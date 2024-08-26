import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import RatingCard from './RatingCard';

SwiperCore.use([Navigation, Pagination]);

const Slider = () => {
  const ratingCards = [
    { rating: 5, user: 'Alice', comment: 'Great product!' },
    { rating: 4, user: 'Bob', comment: 'Very useful.' },
    { rating: 3, user: 'Charlie', comment: 'It’s okay.' },
    { rating: 5, user: 'David', comment: 'Excellent!' },
    { rating: 4, user: 'Eve', comment: 'Good value.' },
    { rating: 3, user: 'Frank', comment: 'Not bad.' },
    { rating: 5, user: 'Grace', comment: 'Loved it!' },
    { rating: 4, user: 'Hank', comment: 'Pretty good.' },
  ];

  return (
    <div className="container mx-auto p-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={1} // Start with 1 slide per view by default
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {ratingCards.map((card, index) => (
          <SwiperSlide key={index}>
            <RatingCard rating={card.rating} user={card.user} comment={card.comment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
