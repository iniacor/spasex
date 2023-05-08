import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SliderWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const SlickSlider = styled(Slider)`
  /* Slider */
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }

  /* Dots */
  .slick-dots {
    position: absolute;
    bottom: -50px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }

  .slick-dots li {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
  }

  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 20px;
    height: 20px;
    padding: 5px;
    cursor: pointer;
    border: 1px solid black;
    outline: none;
    border-radius: 50%;
  }

  .slick-dots li button:focus {
    outline: none;
  }

  /* Inactive dot */
  .slick-dots li button:before {
    position: absolute;
    top: -10%;
    left: -10%;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid #fff;
    background-color: tranparent;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    transform: translate(50%, 50%);
  }

  /* Active dot */
  .slick-dots li.slick-active button:before {
    background-color: #000;
  }

  .slick-dots li.slick-active button:before::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #000;
  }

  /* Arrows */
  .slick-arrow {
    position: absolute;
    top: -62px;
    display: block;
    width: 44px;
    height: 44px;
    cursor: pointer;
    background: #ececec;
    border: 2px solid #ccc;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
  }

  .slick-arrow:focus {
    outline: none;
  }

  .slick-arrow:hover {
    opacity: 1;
  }

  .slick-prev {
    left: 1145px;
  }

  [dir='rtl'] .slick-prev {
    right: -50px;
    left: auto;
  }

  .slick-next {
    right: -25px;
  }

  [dir='rtl'] .slick-next {
    left: -50px;
    right: auto;
  }
  .slick-prev:before,
  .slick-next:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 40px;
    height: 40px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .slick-prev:before {
    background-image: url(src/assets/icons/ArrowLeft.svg);
  }
  .slick-next:before {
    background-image: url(src/assets/icons/ArrowRight.svg);
  }
`;

export const ToursTitle = styled.h2`
  margin-bottom: 43px;
  font-family: 'Syne';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;
`;
