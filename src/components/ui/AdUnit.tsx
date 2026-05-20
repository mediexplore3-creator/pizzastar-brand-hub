'use client';
import { useEffect, useRef } from 'react';

interface AdUnitProps {
  adSlot?: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle';
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
  rawHtml?: string;
}

export default function AdUnit({ 
  adSlot, 
  adFormat = 'auto', 
  fullWidthResponsive = true,
  className = '',
  style,
  rawHtml
}: AdUnitProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const adElement = wrapperRef.current?.querySelector<HTMLModElement>('ins.adsbygoogle');
      if (adElement && !adElement.dataset.adsbygoogleStatus) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense Error:', error);
    }
  }, []);

  return (
    <div ref={wrapperRef} className={`overflow-hidden flex justify-center items-center ${className}`}>
      {rawHtml ? (
        <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
      ) : (
        <ins
          className="adsbygoogle"
          style={style || { display: 'block', minHeight: '100px', width: '100%' }}
          data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID || 'ca-pub-9190694258297146'}
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
        />
      )}
    </div>
  );
}
