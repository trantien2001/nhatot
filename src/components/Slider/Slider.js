import { Box } from '@mui/system';
import clsx from 'clsx';
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import bannerApi from '~/api/BannerApi';
import styles from './Slider.module.scss';

export default function Slider() {
  const [banner, setBanner] = useState([]);
  var bannerLength = useRef();
  var setMarginSlide = useRef();
  var setWidthSlides = useRef();
  var counter = useRef();

  useEffect(() => {
    const fetchBanner = async () => {
      const bannerList = await bannerApi.getSrcBanner();
      setBanner(bannerList.banner);
      bannerLength.current = bannerList.banner.length;
      setMarginSlide.current = 100 / bannerLength.current;
    };
    fetchBanner();
    handleSlide();
  }, []);

  const handleSlide = () => {
    setWidthSlides.current = document.querySelector('.slides');
    counter.current = 1;
    setInterval(() => {
      document.getElementById('radio' + counter.current).checked = true;
      setWidthSlides.current.style.width = `${bannerLength.current * 100}%`;

      addDot(counter.current);
      if (counter.current == 1) {
        removeDot(bannerLength.current + 1);
      } else {
        removeDot(counter.current);
      }

      const elements = document.querySelectorAll(
        `#radio${counter.current}:checked ~ .first`,
      );
      for (var element of elements) {
        element.style = `margin-left: ${
          0 - setMarginSlide.current * (counter.current - 1)
        }%`;
      }
      counter.current++;
      if (counter.current > bannerLength.current) counter.current = 1;
    }, 3000);
  };

  const addDot = (dot) => {
    document.querySelector(`.dot${dot}`).style.backgroundColor = '#40d3dc';
  };

  const removeDot = (dot) => {
    document.querySelector(`.dot${dot - 1}`).style.backgroundColor =
      'transparent';
  };

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
      }}
    >
      <Box className={styles.slider}>
        <Box className={clsx(styles.slides, 'slides')}>
          {banner.map((result, index) => (
            <input
              key={index}
              type="radio"
              name="radio-btn"
              id={`radio${index + 1}`}
            />
          ))}

          {banner.map((result, index) => (
            <div key={index} className={clsx(styles.slide, 'first')}>
              <img
                src={`assets/images/banners/${result.img}`}
                style={{ maxWidth: '960px' }}
                alt="HB PTY JUPITER"
              />
            </div>
          ))}

          <div className={styles.navigation_auto}>
            {banner.map((result, index) => (
              <div key={index} className={`auto-btn${index + 1}`}></div>
            ))}
          </div>
        </Box>
        <div className={styles.navigation_manual}>
          {banner.map((result, index) => (
            <label
              key={index}
              htmlFor={`radio${index + 1}`}
              className={clsx(styles.manual_btn, `dot${index + 1}`)}
            />
          ))}
        </div>
      </Box>
    </Box>
  );
}
