//start ofeers section  

const offersItems = document.querySelector('.offers-items');
const offerItems = document.querySelectorAll('.offer-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const totalItems = offerItems.length;

function updateSliderPosition() {
  offersItems.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNextOffer() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateSliderPosition();
}

function showPrevOffer() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateSliderPosition();
}

nextBtn.addEventListener('click', showNextOffer);
prevBtn.addEventListener('click', showPrevOffer);

// Optional: Auto-slide every 5 seconds
setInterval(showNextOffer, 5000);


// end offers secion