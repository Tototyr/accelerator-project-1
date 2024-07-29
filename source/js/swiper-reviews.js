import { Swiper } from './vendor/swiper-bundle';
import { Navigation } from './vendor/modules';
import '../sass/vendor/swiper.scss';

const reviewsSwiperContainer = document.querySelector('.swiper-reviews');

const reviewsSwiperInit = () => {
  const reviewsSwiper = new Swiper(reviewsSwiperContainer, {
    modules: [Navigation],
    speed: 600,
    spaceBetween: 40,
    slidesPerView: 1,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-reviews-next',
      prevEl: '.swiper-button-reviews-prev',
    },
    allowTouchMove: window.innerWidth < 1366,
    on: {
      slideChange: updateReviewsButtons,
      reachEnd: updateReviewsButtons,
      reachBeginning: updateReviewsButtons
    }
  });

  const prevButton = document.querySelector('.swiper-button-reviews-prev');
  const nextButton = document.querySelector('.swiper-button-reviews-next');

  function updateReviewsButtons() {
    const isBeginning = reviewsSwiper.isBeginning;
    const isEnd = reviewsSwiper.isEnd;

    prevButton.classList.toggle('swiper-button-prev--disabled', isBeginning);
    prevButton.disabled = isBeginning;
    reviewsSwiper.allowSlidePrev = !isBeginning;

    nextButton.classList.toggle('swiper-button-prev--disabled', isEnd);
    nextButton.disabled = isEnd;
    reviewsSwiper.allowSlideNext = !isEnd;
  }


  const handleResize = () => {
    reviewsSwiper.allowTouchMove = window.innerWidth < 1366;
  };

  window.addEventListener('resize', handleResize);

  updateReviewsButtons();
};

export { reviewsSwiperInit };
