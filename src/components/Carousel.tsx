'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Props {
  images: CarouselImage[];
  className?: string;
}

export interface CarouselImage {
  src: string;
  desc: string;
}

export default function Carousel({ images, className }: Props): JSX.Element {
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);

  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement;
    let { width, height } = elem.getBoundingClientRect();

    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      })
    }
  }, [])

  return (
    <div className={"flex justify-center items-center bg-primary py-5 " + className}>
      <button
          disabled={currentImg === 0}
          onClick={() => setCurrentImg((prev) => prev - 1)}
          className={`-mr-16 sm:mr-4 z-10 h-fit rounded-full text-4xl text-center font-bold px-4 py-2 ` +
                    `${currentImg !== 0
                      ? 'bg-white/60 hover:bg-secondary'
                      : 'bg-transparent opacity-50'}`}
        >
          {'<'}
      </button>

      <div className='h-[30rem] w-80'>
        {/* Carousel container */}
        <div className="relative flex h-[30rem] w-80 overflow-hidden rounded-md">
          {/* Image container */}
          <div
            ref={carouselRef}
            style={{
              left: -currentImg * carouselSize.width,
            }}
            className="absolute flex h-full w-full transition-all duration-300"
          >
            {/* Map through data to render images */}
            {images.map((image, i) => (
              <div key={i} className='w-full shrink-0'>
                <div className="relative h-11/12 w-full ">
                  <Image
                    className={`pointer-events-none object-cover`}
                    alt={`carousel-image-${i}`}
                    fill
                    style={{
                      objectPosition: i == 2
                        ? "100% 20%"
                        : i == 1
                          ? "left"
                          : ""}}
                    src={image.src}
                  />
                </div>
                <div className='text-center mt-2'>{image.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center space-x-2 -mt-10'>
          {images.map((_, i) => (
            <div key={i + 100} className={`h-2 w-2 rounded-full ${currentImg === i? "bg-secondary": "bg-white"} -mt-8 z-10`} />
          ))}
        </div>
      </div>

      <button
          disabled={currentImg === images.length - 1}
          onClick={() => setCurrentImg((prev) => prev + 1)}
          className={`-ml-16 sm:ml-4 z-10 h-fit rounded-full text-4xl text-center font-bold px-4 py-2 ` +
                    `${currentImg !== images.length - 1
                      ? 'bg-white/60 hover:bg-secondary'
                      : 'bg-transparent opacity-50'}`}
        >
          {'>'}
      </button>
    </div>
  );
}
