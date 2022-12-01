// add carousel plugin

new WOW().init();

$(".owl-carousel").owlCarousel({
    rtl:true,
    loop:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        }
    }
});

new SmoothScroll('a[href*="#"]', {
    easing: 'linear',
    speed: 1000
});

$(window).on('scroll load', function () {
    if ($(window).scrollTop() > 120) {
        $('#navbar').css('background-color', 'rgba(20 , 40 , 60 , 0.7)').css('padding', '15px 40px');
    } else {
        $('#navbar').css('background-color', 'rgba(0 , 0 , 0 , 0)').css('padding', '20px 40px');
    }

    if ($(window).scrollTop() > 250) {
        $('#go-to-top').css('opacity','1').css('visibility','visible');
    }else {
        $('#go-to-top').css('opacity','0').css('visibility','hidden');
    }

});


var portfolio = $('#portfolio-container').isotope({
    originLeft: false
});

$('#portfolio-filter li').on('click', function () {
    $('#portfolio-filter li').removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolio.isotope({
        filter: $(this).data('filter')
    });
});

portfolio.on('arrangeComplete', function () {
    if ($(window).scrollTop() % 2 == 0)
        $(window).scrollTop($(window).scrollTop() - 1);
    else {
        $(window).scrollTop($(window).scrollTop() + 1);
    }
});
var portfolio2 = $('#portfolio-container2').isotope({
    originLeft: false
});

$('#portfolio-filter2 li').on('click', function () {
    $('#portfolio-filter2 li').removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolio2.isotope({
        filter: $(this).data('filter')
    });
});

portfolio2.on('arrangeComplete', function () {
    if ($(window).scrollTop() % 2 == 0)
        $(window).scrollTop($(window).scrollTop() - 1);
    else {
        $(window).scrollTop($(window).scrollTop() + 1);
    }
});

// shoppingIcon,hamburgerMenu

let shoppingIcon=Array.from(document.getElementsByClassName('shoppingIcon'));
let shoppingItems=Array.from(document.getElementsByClassName('shoppingItems'));
let dark=Array.from(document.getElementsByClassName('dark'));
let closeShoppingItem=Array.from(document.getElementsByClassName('closeShoppingItem'));
let hamIcon=Array.from(document.getElementsByClassName('hamIcon'));
let mobileMenu=Array.from(document.getElementsByClassName('mobile-Menu'));
let categories=Array.from(document.getElementsByClassName('categories'));
let menu=Array.from(document.getElementsByClassName('menu'));
let menuContent=Array.from(document.getElementsByClassName('menuContent'));
let categoryContent=Array.from(document.getElementsByClassName('categoryContent'));
let mobileLiArrow=Array.from(document.getElementsByClassName('mobileLiArrow'));
let mobileLiArrowSvg=Array.from(document.querySelectorAll('.mobileLiArrow svg'));

mobileLiArrowSvg.forEach((item)=>{
    item.addEventListener('click',function (e) {
        item.classList.toggle('active');
        e.target.parentElement.classList.toggle('active');
        e.target.parentElement.parentElement.classList.toggle('active');
        e.target.parentElement.parentElement.nextElementSibling.classList.toggle('active');
    })
})

closeShoppingItem[0].addEventListener('click',function () {
    shoppingItems[0].style.left='-290px'
    dark[0].style.display='none'
})
dark[0].addEventListener('click',function () {
    shoppingItems[0].style.left='-290px'
    mobileMenu[0].style.right='-290px'
    dark[0].style.display='none'
})

shoppingIcon.forEach((icon)=>{
    icon.addEventListener('click',function () {
        shoppingItems[0].style.left='0'
        dark[0].style.display='block'
    })
})
hamIcon.forEach((icon)=>{
    icon.addEventListener('click',function () {
        mobileMenu[0].style.right='0'
        dark[0].style.display='block'
    })
})

menu.forEach((item)=>{
    item.addEventListener('click',function () {
        item.classList.add('active');
        item.classList.remove('no-active');
        categories[0].classList.remove('active');
        categories[0].classList.add('no-active');
        menuContent[0].style.display='block'
        categoryContent[0].style.display='none'
    })
})
categories.forEach((item)=>{
    item.addEventListener('click',function () {
        item.classList.add('active');
        item.classList.remove('no-active');
        menu[0].classList.remove('active');
        menu[0].classList.add('no-active');
        menuContent[0].style.display='none'
        categoryContent[0].style.display='block'
    })
})

// productPage scripts

let closeTag=Array.from(document.getElementsByClassName('closeTag'));
let checkmark=Array.from(document.getElementsByClassName('checkmark'));
let checkmarkCircle=Array.from(document.getElementsByClassName('checkmarkCircle'));
let filtersRow=Array.from(document.querySelectorAll('.filters > ul > li > div:first-child'));
let check=Array.from(document.getElementsByClassName('check'));
let pageNum=Array.from(document.querySelectorAll('.pageNum div'));

pageNum.forEach((item)=>{
    item.addEventListener('click',function () {
        pageNum.forEach((items)=>{
            items.classList.remove('active');
        });
        item.classList.add('active');
    })
})
closeTag.forEach((item)=>{
    item.addEventListener('click',function () {
        item.parentElement.remove();
    })
})
checkmark.forEach((item)=>{
    item.addEventListener('click',function () {
        item.classList.toggle('active');
        checkmarkCircle[0].classList.toggle('active');
    })
})
filtersRow.forEach((item)=>{
    item.addEventListener('click',function (event) {
        item.querySelector('img').classList.toggle('open');
        event.target.nextElementSibling.classList.toggle('open');
        event.target.nextElementSibling.querySelector('ul').classList.toggle('open');
    })
})
check.forEach((item)=>{
    item.addEventListener('click',function (event) {
        item.classList.toggle('checked');
    })
})