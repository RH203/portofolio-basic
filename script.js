const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=90) {
        header.classList.add('bg-primary');
    }
    else {
        header.classList.remove('bg-primary');
    }
}