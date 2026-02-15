import React from 'react';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

/**
 * Lightweight markdown renderer for blog and business content.
 * Supports: **bold**, *italic*, paragraphs (double newlines), and line breaks.
 */
export default function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  const paragraphs = content.split(/\n\n+/);

  return (
    <div className={className}>
      {paragraphs.map((paragraph, i) => {
        const trimmed = paragraph.trim();
        if (!trimmed) return null;

        return (
          <p key={i} className="mb-5 last:mb-0">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

function renderInline(text: string): React.ReactNode[] {
  // Process **bold** and *italic* markers
  const parts: React.ReactNode[] = [];
  // Match **bold**, *italic*, or plain text segments
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Push text before this match
    if (match.index > lastIndex) {
      parts.push(renderLineBreaks(text.slice(lastIndex, match.index), parts.length));
    }

    if (match[2]) {
      // **bold**
      parts.push(<strong key={`b-${match.index}`}>{match[2]}</strong>);
    } else if (match[3]) {
      // *italic*
      parts.push(<em key={`i-${match.index}`}>{match[3]}</em>);
    }

    lastIndex = match.index + match[0].length;
  }

  // Push remaining text
  if (lastIndex < text.length) {
    parts.push(renderLineBreaks(text.slice(lastIndex), parts.length));
  }

  return parts;
}

function renderLineBreaks(text: string, keyBase: number): React.ReactNode {
  const lines = text.split('\n');
  if (lines.length === 1) return text;

  return (
    <React.Fragment key={`lb-${keyBase}`}>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
