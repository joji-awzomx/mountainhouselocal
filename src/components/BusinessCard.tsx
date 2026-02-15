'use client';

import React from 'react';
import Link from 'next/link';
import { Business } from '@/data/businesses';
import StarRating from '@/components/StarRating';

interface BusinessCardProps {
  business: Business;
  variant?: 'featured' | 'default' | 'compact';
}

// Category emoji mapping
const categoryEmojis: Record<string, string> = {
  'Restaurants & Dining': '🍽️',
  'Cafes & Bakeries': '☕',
  'Shopping & Retail': '🛍️',
  'Real Estate': '🏠',
  'Beauty & Spas': '💇',
  'Fitness & Sports': '💪',
  'Health & Wellness': '🏥',
  'Entertainment': '🎬',
  'Education': '📚',
  'Professional Services': '🔧',
  'Home & Garden': '🏡',
  'Automotive': '🚗',
};

function getCategoryEmoji(category: string): string {
  return categoryEmojis[category] || '🏢';
}

function isSchool(business: Business): boolean {
  return business.subcategory.includes('School') || business.subcategory === 'School District';
}

export default function BusinessCard({ business, variant = 'default' }: BusinessCardProps) {
  const emoji = getCategoryEmoji(business.category);

  // Featured variant - large card with image overlay
  if (variant === 'featured') {
    return (
      <Link href={`/directory/${business.slug}`}>
        <div className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer group">
          {/* Background image or placeholder */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: business.image
                ? `url(${business.image})`
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            {/* Bottom: Business info */}
            <div className="text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{emoji}</span>
                <span className="text-sm font-medium opacity-90">{business.category}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 line-clamp-2">{business.name}</h3>
              {business.rating > 0 && (
                <div className="flex items-center gap-2">
                  {isSchool(business) ? (
                    <span className="text-sm font-semibold opacity-90">{business.rating}/10 GreatSchools</span>
                  ) : (
                    <>
                      <StarRating rating={business.rating} size="sm" />
                      <span className="text-sm opacity-90">({business.review_count || 0})</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Hover effect */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
        </div>
      </Link>
    );
  }

  // Compact variant - horizontal list item
  if (variant === 'compact') {
    return (
      <Link href={`/directory/${business.slug}`}>
        <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition cursor-pointer">
          {/* Name and category */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{emoji}</span>
              <h4 className="font-semibold text-gray-900 truncate">{business.name}</h4>
            </div>
            <p className="text-sm text-gray-600">{business.category}</p>
            {business.address && (
              <p className="text-xs text-gray-500 truncate">{business.address}</p>
            )}
          </div>

          {/* Rating */}
          {business.rating > 0 && (
            <div className="flex items-center gap-2 whitespace-nowrap">
              {isSchool(business) ? (
                <span className="text-sm font-semibold text-sage-700">{business.rating}/10 GreatSchools</span>
              ) : (
                <>
                  <StarRating rating={business.rating} size="sm" />
                  <span className="text-sm text-gray-600">({business.review_count || 0})</span>
                </>
              )}
            </div>
          )}

        </div>
      </Link>
    );
  }

  // Default variant - standard card
  return (
    <Link href={`/directory/${business.slug}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden h-full flex flex-col">
        {/* Image area */}
        <div
          className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden"
          style={{
            backgroundImage: business.image
              ? `url(${business.image})`
              : 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Logo overlay if available */}
          {business.logo && (
            <div className="absolute top-3 left-3 w-12 h-12 bg-white rounded-full shadow flex items-center justify-center overflow-hidden">
              <img
                src={business.logo}
                alt={business.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Content section */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Category tag */}
          <div className="mb-2">
            <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {emoji} {business.category}
            </span>
          </div>

          {/* Name */}
          <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-2">
            {business.name}
          </h3>

          {/* Tagline */}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{business.tagline}</p>

          {/* Rating */}
          {business.rating > 0 && (
            <div className="flex items-center gap-1 mb-3 text-sm">
              {isSchool(business) ? (
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sage-600 text-white text-xs font-bold">
                    {business.rating}
                  </span>
                  <span className="text-gray-600 text-xs">/10</span>
                  <span className="relative group">
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 text-gray-500 text-[10px] font-bold cursor-help">i</span>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-[10px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      GreatSchools rating · greatschools.org
                    </span>
                  </span>
                </div>
              ) : (
                <>
                  <StarRating rating={business.rating} size="sm" />
                  <span className="text-gray-600">
                    ({business.review_count || 0})
                  </span>
                  <span className="relative group">
                    <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 text-gray-500 text-[10px] font-bold cursor-help">i</span>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-gray-800 text-white text-[10px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                      Based on Google Reviews
                    </span>
                  </span>
                </>
              )}
            </div>
          )}

          {/* Tags */}
          {business.tags && business.tags.length > 0 && (
            <div className="flex gap-1 flex-wrap mb-3">
              {business.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
              {business.tags.length > 3 && (
                <span className="text-gray-500 text-xs px-2 py-1">
                  +{business.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
