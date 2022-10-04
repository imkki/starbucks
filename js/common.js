// search 통합검색
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

// bagdes 
const badgeEl = document.querySelector('.badges');
window.addEventListener('scroll', _.throttle(function() { // _.throttle(함수, 시간)
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        // gsap.to(요소, 지속시간(초), 옵션)
        gsap.to(badgeEl, 0.4, {
            opacity: 0,
            display: 'none'
        })
    } else {
        gsap.to(badgeEl, 0.4, {
            opacity: 1,
            display: 'block'
        })
    }
}, 300));

// animation
const fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        opacity: 1,
        delay: (index + 1) * 0.7
    });
});

// swiper slide
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    slidePerView: 3, // 보여질 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true, // 반복
    autoplay: {
        delay: 5000
    },
    pagenation: {
        el: '.promotion .swiper-pagenation', // 페이지번호 선택자
        clickable: true // 사용자의 페이지 번호 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToogleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToogleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion    // true로 반환
    if(isHidePromotion) {
        promotionEl.classList.add('hide'); // 숨기기
    } else {
        promotionEl.classList.remove('hide'); // 보이기
    }
});