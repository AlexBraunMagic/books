import { useEffect, useState, useRef, useMemo } from 'react';
import type { ComponentType } from 'react';

import { Box } from '@mui/material';
import styles from './style.module.css';
import { SliderDot } from '../slider-dot';

interface ICarouselProps<T> {
  allSlides: Array<T>;
  SlideCard: ComponentType<{ card: T }>;
}

export function Carousel<T>({ allSlides, SlideCard }: ICarouselProps<T>) {
  const [slideHeight, setSlideHeight] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const [sliderPosition, setSliderPosition] = useState('0');
  const slideRef = useRef<HTMLDivElement | null>(null);
  const dotsWrapperRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const dotsArr = useMemo(() => {
    return Array.from({ length: Math.ceil(allSlides.length / 3) }, (v, i) => i);
  }, [allSlides]);

  useEffect(() => {
    if (slideRef.current && dotsWrapperRef.current && carouselRef.current) {
      setSlideHeight(
        slideRef.current.clientHeight + dotsWrapperRef.current.clientHeight,
      );
      setSlideWidth(Math.floor(carouselRef.current.clientWidth / 3) - 16);
    }
  }, []);

  useEffect(() => {
    if (activeDot && carouselRef.current) {
      setSliderPosition(`-${carouselRef.current.clientWidth * activeDot}px`);
      return;
    }
    setSliderPosition('0');
  }, [activeDot]);

  return (
    <Box
      ref={carouselRef}
      style={{ height: `${slideHeight}px` }}
      className={styles.carousel}
    >
      <Box
        style={{
          left: sliderPosition,
        }}
        className={styles.carousel__cards_wrapper}
      >
        {allSlides.map((item) => (
          <Box ref={slideRef} style={{ width: `${slideWidth}px` }}>
            <SlideCard card={item} />
          </Box>
        ))}
      </Box>
      <Box ref={dotsWrapperRef} className={styles.carousel__dots_wrapper}>
        {dotsArr.map((item) => (
          <SliderDot
            key={item}
            isActive={item === activeDot}
            dotValue={item}
            handleClick={setActiveDot}
          />
        ))}
      </Box>
    </Box>
  );
}
