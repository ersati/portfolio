const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const mobile = document.querySelector(".mobile");

const homeButton = document.querySelector(".nav-item__mobile")


const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
    mobile.classList.toggle('mobile--active');
};

const handleRemoveClass = () => {
    hamburger.classList.remove('hamburger--active');
    nav.classList.remove('navigation--active');
    mobile.classList.remove('mobile--active');
}

hamburger.addEventListener("click", handleClick)
homeButton.addEventListener("click", handleRemoveClass)