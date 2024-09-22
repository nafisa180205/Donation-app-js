const menuButton = document.getElementById('menu-btn')
const mobileMenu =document.getElementById('mobile-menu')
const selectedSeatElement = document.getElementById('selected-seat')
const totalBookedElement = document.getElementById('total-booked')
const availableSeatElement = document.getElementById('available-seat')
const totalPriceElement = document.getElementById('total-price')
const couponInputElement = document.getElementById('coupon-input')
const couponButtonElement = document.getElementById('coupon-btn')
const defaultTextElement = document.getElementById('default-text')
const grandTotalElement = document.getElementById('grand-total')
const phoneNumberElement = document.getElementById('phone-number')
const NextButtonElement = document.getElementById('next-btn')


menuButton.addEventListener('click' , function(){
    menuButton.children[0].classList.toggle('hidden')
    const closeButton = document.getElementById('close-btn')
    closeButton.classList.toggle('hidden')
    mobileMenu.classList.toggle('hidden')
    
})
