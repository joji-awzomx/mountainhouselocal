interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
}

function StarIcon({ className, filled }: { className: string; filled: boolean }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={filled ? 0 : 1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );
}

export default function StarRating({ rating, size = 'md' }: StarRatingProps) {
  const normalizedRating = Math.min(Math.max(rating, 0), 5);
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 !== 0;

  const sizeConfig = {
    sm: { iconSize: 'h-4 w-4', textSize: 'text-sm' },
    md: { iconSize: 'h-5 w-5', textSize: 'text-base' },
    lg: { iconSize: 'h-6 w-6', textSize: 'text-lg' },
  };

  const { iconSize, textSize } = sizeConfig[size];

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {Array.from({ length: fullStars }).map((_, i) => (
          <StarIcon key={`full-${i}`} className={`${iconSize} text-yellow-400`} filled={true} />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <StarIcon className={`${iconSize} text-gray-300`} filled={false} />
            <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
              <StarIcon className={`${iconSize} text-yellow-400`} filled={true} />
            </div>
          </div>
        )}
        {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }).map((_, i) => (
          <StarIcon key={`empty-${i}`} className={`${iconSize} text-gray-300`} filled={false} />
        ))}
      </div>
      <span className={`${textSize} font-medium text-gray-700`}>
        {normalizedRating.toFixed(1)}
      </span>
    </div>
  );
}
