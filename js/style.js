document.querySelector('.hamburger-menu').
addEventListener('click',() => {
    document.querySelector('.container').classList.toggle("change");
});

document.querySelector('.scroll-btn').addEventListener('click',() => {
    document.querySelector('html').style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior = "unste";
    },1000);
});