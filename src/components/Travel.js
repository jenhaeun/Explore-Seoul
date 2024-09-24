import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css';
import 'swiper/css/autoplay';
import './Travel.css';

function Travel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: 'assets/images/han_river_picnic.jpg',
      title: 'Picnic At Han River',
      description: 'Enjoy fried chicken and ramen by the river',
    },
    {
      src: 'assets/images/bbq.jpg',
      title: 'K-BBQ Grilled Right at the Table',
      description: 'Grill kimchi and have it together with the meat',
    },
    {
      src: 'assets/images/hanbok.JPG',
      title: 'Feel Like Royalty in Hanbok',
      description: "Wear hanbok at royal palaces and get free entry",
    },
    {
      src: 'assets/images/dora_observatory.jpg',
      title: 'Look Inside North Korea',
      description: 'View one of the most isolated countries through binoculars',
    },
  ];

  return (
    <div>
      <h1 className="appTitle">Explore SEOUL</h1>

      <h3>Must-Do's in Seoul</h3>
      <div className='mustDos'>
        {/* Image Carousel */}
        <div className="mainImage">
          <Swiper
            modules={[Autoplay]} // Include Autoplay module
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update the index
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay configuration
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="carouselSlide">
                  <img src={image.src} alt={`Slide ${index + 1}`} className="carouselImage" />
                  <div className="carouselText">
                    <h2 className="carouselTitle">{image.title}</h2>
                    <p className="carouselDescription">{image.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pager */}
          <div className="pager">
            {activeIndex + 1}/{images.length}
          </div>
        </div>
      </div>

      <h3>Sort by Category</h3>
      <div className='categoryContainer'>
        <div className='categoryRow'>
          <div className='categories'>
            <img className='categoryImage' src='./assets/images/arts_and_culture.jpg' alt="Arts & Culture" />
            <p className='categoryText'>Arts & Culture</p>
          </div>
          <div className='categories'>
            <img className='categoryImage' src='./assets/images/nature.jpg' alt="Nature" />
            <p className='categoryText'>Nature</p>
          </div>
        </div>
        <div className='categoryRow'>
          <div className='categories'>
            <img className='categoryImage' src='./assets/images/activities.jpg' alt="Activities" />
            <p className='categoryText'>Activities</p>
          </div>
          <div className='categories'>
            <img className='categoryImage' src='./assets/images/health_and_wellness.jpg' alt="Health & Wellness" />
            <p className='categoryText'>Health & Wellness</p>
          </div>
        </div>
        <div className='categoryRow'>
          <div className='categories'>
            <img className='categoryImage' src='./assets/images/shopping.jpg' alt="Shopping" />
            <p className='categoryText'>Shopping</p>
          </div>
          <div className='categories'>
            <img className='categoryImage' src='./assets/images/kpop.jpg' alt="K-Pop" />
            <p className='categoryText'>K-Pop</p>
          </div>
        </div>
      </div>

      <h3>Suggested Itineraries</h3>
      <div className='itinerariesContainer'>
        <div className='itineraries'>
          <img className='itineraryImage' src='./assets/images/ultimate_guide.jpg' alt="Ultimate Guide" />
          <p className='itineraryText'>Ultimate Guide for First-Time Visitors</p>
        </div>
        <div className='itineraries'>
          <img className='itineraryImage' src='./assets/images/history_walk.jpg' alt="History Walk" />
          <p className='itineraryText'>Walk into History of Korea</p>
        </div>
        <div className='itineraries'>
          <img className='itineraryImage' src='./assets/images/culture_food.jpg' alt="Culture & Food" />
          <p className='itineraryText'>5 Days of Culture & Food</p>
        </div>
        <div className='itineraries'>
          <img className='itineraryImage' src='./assets/images/k_beauty.jpg' alt="K-Beauty Experience" />
          <p className='itineraryText'>K-Beauty Experience</p>
        </div>
        <div className='itineraries'>
          <img className='itineraryImage' src='./assets/images/nature_lovers.jpg' alt="For Nature Lovers" />
          <p className='itineraryText'>For Nature Lovers</p>
        </div>
      </div>
    </div>
  );
}

export default Travel;
