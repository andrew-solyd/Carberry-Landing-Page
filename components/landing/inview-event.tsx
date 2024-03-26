import React, { useEffect, useRef } from 'react';
import { trackEvent } from '@/helpers/tracking'

interface InViewEventProps {
  eventName: string;
  className?: string;
}

const InViewEvent: React.FC<InViewEventProps> = ({ eventName, className }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasFiredEventRef = useRef<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasFiredEventRef.current) {
            hasFiredEventRef.current = true;

            trackEvent(eventName)
              .catch((error) => {
                console.error(`Error sending ${eventName} event to Pirsch:`, error);
              });
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.disconnect();
      }
    };
  }, [eventName]);

  return <div ref={containerRef} className={className} />;
};

export default InViewEvent;