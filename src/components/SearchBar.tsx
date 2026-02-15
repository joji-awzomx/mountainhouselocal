'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { businesses } from '@/data/businesses';
import { blogPosts } from '@/data/blog';

interface SearchResult {
  type: 'business' | 'article';
  id: string;
  title: string;
  slug: string;
  subtitle?: string;
  score: number;
}

interface SearchBarProps {
  size?: 'large' | 'small';
}

// Fuzzy match scoring function
function fuzzyMatch(text: string, query: string): number {
  if (!query) return 0;
  
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  
  // Exact substring match - highest priority
  if (lowerText.includes(lowerQuery)) {
    const index = lowerText.indexOf(lowerQuery);
    // Bonus for starting at the beginning
    if (index === 0) {
      return 100;
    }
    return 80;
  }
  
  // Start-of-string match for each word
  const words = lowerText.split(/\s+/);
  for (const word of words) {
    if (word.startsWith(lowerQuery)) {
      return 70;
    }
  }
  
  // Character-level matching for typo tolerance
  let score = 0;
  let queryIndex = 0;
  for (let i = 0; i < lowerText.length && queryIndex < lowerQuery.length; i++) {
    if (lowerText[i] === lowerQuery[queryIndex]) {
      score += 10;
      queryIndex++;
    }
  }
  
  // Only return a score if we matched all query characters
  if (queryIndex === lowerQuery.length) {
    return score;
  }
  
  return 0;
}

// Search all businesses and blog posts
function searchAll(query: string): SearchResult[] {
  const results: SearchResult[] = [];
  
  // Search businesses
  for (const business of businesses) {
    let score = 0;
    
    // Search in name
    score = Math.max(score, fuzzyMatch(business.name, query));
    
    // Search in category
    score = Math.max(score, fuzzyMatch(business.category, query));
    
    // Search in subcategory
    if (business.subcategory) {
      score = Math.max(score, fuzzyMatch(business.subcategory, query));
    }
    
    // Search in tagline
    score = Math.max(score, fuzzyMatch(business.tagline, query));
    
    // Search in description
    score = Math.max(score, fuzzyMatch(business.description, query));
    
    // Search in tags
    if (business.tags) {
      for (const tag of business.tags) {
        score = Math.max(score, fuzzyMatch(tag, query));
      }
    }
    
    if (score > 0) {
      results.push({
        type: 'business',
        id: business.id,
        title: business.name,
        slug: business.slug,
        subtitle: business.category,
        score,
      });
    }
  }
  
  // Search blog posts
  for (const post of blogPosts) {
    let score = 0;
    
    // Search in title
    score = Math.max(score, fuzzyMatch(post.title, query));
    
    // Search in excerpt
    score = Math.max(score, fuzzyMatch(post.excerpt, query));
    
    // Search in category
    score = Math.max(score, fuzzyMatch(post.category, query));
    
    // Search in tags
    if (post.tags) {
      for (const tag of post.tags) {
        score = Math.max(score, fuzzyMatch(tag, query));
      }
    }
    
    if (score > 0) {
      results.push({
        type: 'article',
        id: post.id,
        title: post.title,
        slug: post.slug,
        subtitle: post.category,
        score,
      });
    }
  }
  
  // Sort by score and limit results
  return results.sort((a, b) => b.score - a.score);
}

export default function SearchBar({ size = 'small' }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout>();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Debounced search
  useEffect(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const timer = setTimeout(() => {
      if (query.trim()) {
        const searchResults = searchAll(query);
        setResults(searchResults);
        setIsOpen(true);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 150);

    setDebounceTimer(timer);

    return () => clearTimeout(timer);
  }, [query]);

  // Click outside handler
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const businessResults = results.filter(r => r.type === 'business').slice(0, 5);
  const articleResults = results.filter(r => r.type === 'article').slice(0, 5);

  const isLarge = size === 'large';

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${isLarge ? 'max-w-2xl' : 'max-w-md'}`}
    >
      <div
        className={`relative flex items-center ${
          isLarge
            ? 'bg-white rounded-lg shadow-lg p-4'
            : 'bg-white rounded border border-gray-300 p-2'
        }`}
      >
        <svg
          className={`${isLarge ? 'w-6 h-6' : 'w-5 h-5'} text-gray-400 mr-2`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder={isLarge ? 'Search businesses and articles...' : 'Search...'}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          className={`flex-1 bg-transparent outline-none ${
            isLarge ? 'text-lg' : 'text-sm'
          } placeholder-gray-500`}
        />
      </div>

      {/* Dropdown Results */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto"
        >
          {results.length === 0 ? (
            <div className="p-4 text-center text-gray-500">No results found</div>
          ) : (
            <>
              {businessResults.length > 0 && (
                <div className="border-b border-gray-100">
                  <div className="px-4 py-2 bg-gray-50 text-sm font-semibold text-gray-700">
                    Businesses
                  </div>
                  {businessResults.map((result) => (
                    <Link key={result.id} href={`/directory/${result.slug}`}>
                      <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition">
                        <div className="font-medium text-gray-900">{result.title}</div>
                        <div className="text-sm text-gray-600">{result.subtitle}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {articleResults.length > 0 && (
                <div>
                  <div className="px-4 py-2 bg-gray-50 text-sm font-semibold text-gray-700">
                    Articles
                  </div>
                  {articleResults.map((result) => (
                    <Link key={result.id} href={`/blog/${result.slug}`}>
                      <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition">
                        <div className="font-medium text-gray-900">{result.title}</div>
                        <div className="text-sm text-gray-600">{result.subtitle}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
