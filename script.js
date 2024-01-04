const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),// the top or head element i.e wrapper
    smooth: true
});

function mouseFollower() {
    window.addEventListener('mousemove', function (e) {
        const circle = document.querySelector('#sticky-pointer');
        circle.style.transform = `translate(${e.clientX-4}px,${e.clientY-4}px)`
    });
}
mouseFollower();