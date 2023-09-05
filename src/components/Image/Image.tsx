import React, { useEffect, useState } from 'react';
import { cn } from '@/common';

export interface ImageProps {
  /**
   * URL of the image
   */
  src?: string;

  /**
   * URL set of the image
   */
  srcSet?: string;

  /**
   * Alt text of the image
   */
  alt?: string;

  /**
   * Indicate whether the has a max width value or not
   */
  hasMaxWidth?: boolean;

  /**
   * Pass a custom state if the image does not load correctly
   */
  noImg?: JSX.Element;

  /**
   * Specify optional styles to be added to the component
   */
  style?: React.CSSProperties;

  /**
   * Specify an optional className to be added to the component
   */
  className?: string;

  /**
   * Callback fired when the image load
   */
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

/**
 * Image component is used to display images
 * @author Sergio Ruiz<sergioruizdavila@gmail.com>
 * Created at 2023-08-26
 */
export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, srcSet, alt, hasMaxWidth = false, noImg, style, className, onLoad }, ref) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isValidSrc, setIsValidSrc] = useState(Boolean(src));

    const classes = cn(
      'transition-opacity duration-500 max-w-none',
      {
        'max-w-full': hasMaxWidth,
        'opacity-0': !imageLoaded,
        'opacity-100': imageLoaded,
      },
      className,
    );

    useEffect(() => {
      setIsValidSrc(Boolean(src));
    }, [src]);

    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>): void => {
      setImageLoaded(true);
      if (onLoad) onLoad(event);
    };

    return (
      <>
        {isValidSrc ? (
          <img
            ref={ref}
            className={classes}
            style={style}
            src={src}
            srcSet={srcSet}
            alt={alt}
            onLoad={handleLoad}
            onError={(): void => setIsValidSrc(false)}
          />
        ) : (
          <>
            {noImg ? (
              noImg
            ) : (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <p className="text font-semi-bold text-xl text-slate-300">{alt}</p>
              </div>
            )}
          </>
        )}
      </>
    );
  },
);
