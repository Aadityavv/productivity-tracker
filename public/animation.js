const blurCircle = document.querySelector(".blurBGCircle");

document.addEventListener("mousemove", (e) => {
    blurCircle.style.left = `${e.clientX - blurCircle.offsetWidth / 2}px`;
    blurCircle.style.top = `${e.clientY - blurCircle.offsetHeight / 2}px`; // Adjusted for centering the circle
});
