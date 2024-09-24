import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { getImagePath } from '../utils'; // Ensure this path is correct
import 'swiper/css';
import 'swiper/css/autoplay';
import './Home.css';

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [weatherData, setWeatherData] = useState([]);

  // Carousel images data
  const images = [
    {
      src: getImagePath('assets/images/gyeongbokgung.jpg'),
      title: 'Gyeongbok Palace',
      description: 'Primary royal palace of Joseon dynasty',
    },
    {
      src: getImagePath('assets/images/bluehouse.jpg'),
      title: 'Cheongwadae (Blue House)',
      description: 'Former presidential office and residence',
    },
    {
      src: getImagePath('assets/images/bukhansan.JPG'),
      title: 'Bukhansan National Park',
      description: "One of Korea's most popular hiking destinations",
    },
    {
      src: getImagePath('assets/images/dmz.jpg'),
      title: 'Demilitarized Zone (DMZ)',
      description: 'Weapon-free buffer zone dividing the Korean peninsula',
    },
  ];

  // Fetch weather data
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=Seoul&units=metric&appid=8ba57f2dc1b69ae252bc79ed07bb78d9`
        );

        const groupedData = {};
        response.data.list.forEach(forecast => {
          const date = forecast.dt_txt.split(' ')[0];
          if (!groupedData[date]) {
            groupedData[date] = {
              date: forecast.dt_txt,
              temps: [forecast.main.temp],
              weather: forecast.weather[0],
            };
          } else {
            groupedData[date].temps.push(forecast.main.temp);
          }
        });

        const weatherDataArray = Object.values(groupedData).map(dayData => ({
          date: dayData.date,
          minTemp: Math.round(Math.min(...dayData.temps)),
          maxTemp: Math.round(Math.max(...dayData.temps)),
          weather: dayData.weather,
        }));

        setWeatherData(weatherDataArray);
      } catch (error) {
        console.error('Error fetching the weather data', error);
      }
    };

    fetchWeatherData();
  }, []);

  // Mapping weather descriptions to custom icons
  const weatherIcons = {
    'clear sky': getImagePath('assets/icons/clear_sky.png'),
    'few clouds': getImagePath('assets/icons/partly_cloudy.png'),
    'scattered clouds': getImagePath('assets/icons/partly_cloudy.png'),
    'broken clouds': getImagePath('assets/icons/cloudy.png'),
    'overcast clouds': getImagePath('assets/icons/cloudy.png'),
    'shower rain': getImagePath('assets/icons/rainy.png'),
    'light rain': getImagePath('assets/icons/rainy.png'),
    'rain': getImagePath('assets/icons/rainy.png'),
    'thunderstorm': getImagePath('assets/icons/thunderstorm.png'),
    'snow': getImagePath('assets/icons/snow.png'),
    'mist': getImagePath('assets/icons/mist.png'),
  };

  // Helper functions for date formatting
  const getDayOfWeek = (dateString, index) => {
    const date = new Date(dateString);
    if (index === 0) return 'Today'; // Display "Today" for the first day
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const formatShortDate = dateString => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  return (
    <div>
      <h1 className="appTitle">Explore SEOUL</h1>

      {/* Image Carousel */}
      <div className="mainImage">
        <Swiper
          modules={[Autoplay]} // Ensure Autoplay module is included
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
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

      {/* Menu Section */}
      <div className="menuWrapper">
        <div className="menuContainer">
          <div className="menu">
            <div className="menuImage">
              <img src={getImagePath('assets/icons/itineraries.png')} alt="Itineraries" className="menuIcon" />
            </div>
            <p>Suggested Itineraries</p>
          </div>
          <div className="menu">
            <div className="menuImage">
              <img src={getImagePath('assets/icons/food.png')} alt="Food" className="menuIcon" />
            </div>
            <p>Food</p>
          </div>
          <div className="menu">
            <div className="menuImage">
              <img src={getImagePath('assets/icons/shopping.png')} alt="Shopping" className="menuIcon" />
            </div>
            <p>Shopping</p>
          </div>
          <div className="menu">
            <div className="menuImage">
              <img src={getImagePath('assets/icons/transportation.png')} alt="Transportation" className="menuIcon" />
            </div>
            <p>Transport-<br />ation</p>
          </div>
          <div className="menu">
            <div className="menuImage">
              <img src={getImagePath('assets/icons/useful_phrases.png')} alt="Useful Phrases" className="menuIcon" />
            </div>
            <p>Useful Phrases</p>
          </div>
          <div className="menu">
            <div className="menuImage">
              <img src={getImagePath('assets/icons/ebook.png')} alt="Maps & Guidebooks" className="menuIcon" />
            </div>
            <p>Maps & Guidebooks</p>
          </div>
        </div>
      </div>

      {/* Weather Forecast Section */}
      <h3>Weather Forecast</h3>
      <div className="weather">
        {weatherData.length > 0 ? (
          weatherData.map((day, index) => (
            <div key={index} className="weatherDay">
              <div className="weatherDetails">
                <div className="weatherInfo">
                  <p className="weatherDayOfWeek">{getDayOfWeek(day.date, index)}</p>
                  <p className="weatherShortDate" style={{ fontSize: '12px' }}>
                    {formatShortDate(day.date)}
                  </p>
                </div>

                <img
                  src={weatherIcons[day.weather.description] || getImagePath('assets/icons/default.png')}
                  alt={day.weather.description}
                  className="weatherIcon"
                />
                <p className="weatherTemp">
                  Low {day.minTemp}°C &nbsp; High {day.maxTemp}°C
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>

      {/* News & Events Section */}
      <div className="newsHeader">
        <h3>News & Events</h3>
        <a href="#none" className="viewMore">
          View more
        </a>
      </div>
      <div className="newsContainer">
        <div className="newsContent">
          <img src={getImagePath('assets/images/reading.webp')} alt="Reading at Hangang Park" />
          <div className="newsText">
            <p className="newsTitle">2024 Reading at Hangang Park</p>
            <p className="newsDate">Sep 16, 2024</p>
          </div>
        </div>
        <div className="newsContent">
          <img src={getImagePath('assets/images/k-link_festival.png')} alt="K-Link Festival" />
          <div className="newsText">
            <p className="newsTitle">K-Link Festival</p>
            <p className="newsDate">Sep 10, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
