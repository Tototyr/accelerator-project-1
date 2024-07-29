// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import {initializeFaqAccordion} from './accordion';
import { initializePriceTabs } from './price-tab';
import {reviewsSwiperInit} from './swiper-reviews.js';
import {juriSwiperInit} from './swiper-juri.js';


const bootStrap = () => {
  initializePriceTabs();
  initializeFaqAccordion();
  juriSwiperInit();
  reviewsSwiperInit();

};

bootStrap();
