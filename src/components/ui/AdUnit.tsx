'use client';
import { useEffect, useRef } from 'react';

interface AdUnitProps {
  adSlot?: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'autorelaxed';
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
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  useEffect(() => {
    if (!adsenseId) return;
    try {
      const adElement = wrapperRef.current?.querySelector<HTMLModElement>('ins.adsbygoogle');
      if (adElement && !adElement.dataset.adsbygoogleStatus) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense Error:', error);
    }
  }, [adsenseId]);

  if (!adsenseId) {
    return (
      <div 
        className={`overflow-hidden flex flex-col justify-center items-center text-center p-6 bg-white/5 border border-white/5 rounded-2xl w-full ${className}`}
        style={style || { minHeight: '120px' }}
      >
        <p className="text-pizza-primary text-[9px] font-black uppercase tracking-[0.3em] mb-1">PIZZA STAR PARTNER CONTENT</p>
        <h4 className="text-xs font-black text-white uppercase tracking-widest leading-relaxed">CRUSTS MADE FROM SOUL, TOPPED WITH LOVE</h4>
        <p className="text-[9px] text-white/50 mt-1 uppercase tracking-widest">Order via our mobile app for 50% off your first 3 orders!</p>
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className={`overflow-hidden flex justify-center items-center ${className}`}>
      {rawHtml ? (
        <div dangerouslySetInnerHTML={{ __html: rawHtml }} />
      ) : (
        <ins
          className="adsbygoogle"
          style={style || { display: 'block', minHeight: '100px', width: '100%' }}
          data-ad-client={adsenseId}
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
        />
      )}
    </div>
  );
}
