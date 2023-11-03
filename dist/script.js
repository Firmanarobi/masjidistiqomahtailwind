//header scroll fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

//tentang menu
const tentang =  document.querySelector('#tentang');
const tentangMenu =  document.querySelector('#tentang-menu');

tentang.addEventListener('click', function() {
    tentang.classList.toggle('tentang-active');
    tentangMenu.classList.toggle('hidden');
});

//lainnya menu
const lainnya =  document.querySelector('#lainnya');
const lainnyaMenu =  document.querySelector('#lainnya-menu');

lainnya.addEventListener('click', function() {
    lainnya.classList.toggle('lainnya-active');
    lainnyaMenu.classList.toggle('hidden');
});