'use client';
import { useEffect, useRef } from 'react';

interface AdUnitProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle';
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function AdUnit({ 
  adSlot, 
  adFormat = 'auto', 
  fullWidthResponsive = true,
  className = '',
  style
}: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  
  useEffect(() => {
    try {
      if (adRef.current && !adRef.current.dataset.adsbygoogleStatus) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense Error:', error);
    }
  }, []);

  return (
    <div className={`overflow-hidden flex justify-center items-center ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style || { display: 'block', minHeight: '100px', width: '100%' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID || 'ca-pub-9190694258297146'}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  );
}
