'use client';

interface AmpAdProps {
  adClient: string;
  adSlot: string;
  width?: string;
  height?: string;
  className?: string;
}

export default function AmpAd({ 
  adClient, 
  adSlot,
  width = "100vw",
  height = "320",
  className = ""
}: AmpAdProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div 
        dangerouslySetInnerHTML={{
          __html: `
            <amp-ad 
              width="${width}" 
              height="${height}"
              type="adsense"
              data-ad-client="${adClient}"
              data-ad-slot="${adSlot}"
              data-auto-format="rspv"
              data-full-width="">
              <div overflow=""></div>
            </amp-ad>
          `
        }}
      />
    </div>
  );
}
