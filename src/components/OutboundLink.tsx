'use client'

import { trackOutboundClick } from './Analytics'

interface OutboundLinkProps {
  href: string
  businessName?: string
  category?: string
  children: React.ReactNode
  className?: string
}

export default function OutboundLink({
  href,
  businessName,
  category,
  children,
  className = '',
}: OutboundLinkProps) {
  const handleClick = () => {
    trackOutboundClick(href, businessName, category)
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
}
