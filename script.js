const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),// the top or head element i.e wrapper
    smooth: true
});

function mouseFollower() {
    window.addEventListener('mousemove', function (e) {
        const circle = document.querySelector('#sticky-pointer');
        circle.style.transform = `translate(${e.clientX - 4}px,${e.clientY - 4}px)`
    });
}

function firstPageanim() {
    const tl = gsap.timeline();

    tl.from('#nav', {
        duration: 1.5,
        y: -10,
        opacity: 0,
        ease: Expo.easeInOut
    }).to('.boundingElem', {
        y: 0,
        ease: Expo.easeInOut,
        duration: 1.25,
        stagger: .2
    });
}

mouseFollower();
firstPageanim();