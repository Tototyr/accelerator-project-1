import { priceTabs } from './const';


const priceTabList = document.querySelector('.subscriptions__tab-list');
const tabItems = Array.from(document.querySelectorAll('.subscriptions__tab'));
const cardsPrice = document.querySelectorAll('.subscriptions__card-price');


const onTabItemClick = (evt) => {
  const clickedTab = evt.target.closest('.subscriptions__tab');

  if (!clickedTab) {
    return;
  }


  tabItems.forEach((tab) => tab.classList.toggle('subscriptions__tab--active', tab === clickedTab));

  const activeTabIndex = tabItems.indexOf(clickedTab);


  cardsPrice.forEach((card, index) => {
    const price = priceTabs[activeTabIndex][`price${index + 1}`];
    const priceText = card.querySelector('.subscriptions__card-price-text');
    const priceValue = card.querySelector('.subscriptions__card-price-value');
    if (priceText && priceValue) {
      priceText.textContent = price;
      priceValue.textContent = price;
    }
  });
};


const initializePriceTabs = () => {
  if (priceTabList) {
    priceTabList.addEventListener('click', onTabItemClick);
  }
};

export { initializePriceTabs };
