const faqContainer = document.querySelector('.faq__details-lists-container');
const tabButtons = document.querySelectorAll('.faq__tab-button');
const detailLists = document.querySelectorAll('.faq__details-list');

const setElementHeight = (element, height) => {
  element.style.height = height;
};

const adjustFirstItemHeight = () => {
  const firstItem = document.querySelector('.faq__details-list--active li');
  if (firstItem) {
    const firstItemContent = firstItem.querySelector('p');
    const marker = firstItem.querySelector('.faq__details-list-marker');
    if (firstItemContent && marker.classList.contains('faq__details-list-marker--active')) {
      setElementHeight(firstItemContent, `${firstItemContent.scrollHeight}px`);
    }
  }
};

const toggleAccordionItem = (item) => {
  const marker = item.querySelector('.faq__details-list-marker');
  const content = item.querySelector('p');

  const isActive = marker.classList.toggle('faq__details-list-marker--active');
  setElementHeight(content, isActive ? `${content.scrollHeight}px` : '0');
};

const onAccordionItemClick = (event) => {
  const item = event.target.closest('li');
  if (item) {
    toggleAccordionItem(item);
  }
};

const onAccordionItemKeydown = (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    const item = event.target.closest('li');
    if (item) {
      toggleAccordionItem(item);
    }
  }
};

const switchTab = (selectedButton) => {
  tabButtons.forEach((button) => {
    const isActive = button === selectedButton;
    button.classList.toggle('faq__tab-button--active', isActive);
    button.parentElement.classList.toggle('faq__tab-item--active', isActive);
  });
  detailLists.forEach((list) => {
    list.classList.toggle('faq__details-list--active', list.dataset.faqList === selectedButton.dataset.faqList);
  });
  adjustFirstItemHeight();
};

const onTabButtonClick = (event) => {
  const selectedButton = event.target.closest('.faq__tab-button');
  if (selectedButton) {
    switchTab(selectedButton);
  }
};

const initializeFaqAccordion = () => {
  if (!faqContainer) {
    return;
  }


  adjustFirstItemHeight();

  faqContainer.addEventListener('click', onAccordionItemClick);
  faqContainer.addEventListener('keydown', onAccordionItemKeydown);
  tabButtons.forEach((button) => button.addEventListener('click', onTabButtonClick));
};


export { initializeFaqAccordion };
