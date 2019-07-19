const backtotop = document.querySelector('.backtotop');

window.onscroll = function(){

    if (window.pageYOffset > 650) {
        backtotop.classList.add('show-backtotop');
    } else {
        backtotop.classList.remove('show-backtotop');
    }

    console/log(window.pageYOffset)
}