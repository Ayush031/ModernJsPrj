const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),// the top or head element i.e wrapper
    smooth: true
});

function mouseFollower(xscale, yscale) {
    window.addEventListener('mousemove', function (e) {
        document.querySelector('#sticky-pointer').style.transform = `translate(${e.clientX - 4}px,${e.clientY - 4}px) scale(${xscale}, ${yscale}) `;
    });
}
var timeout;
function mouseBubble() {
    let xscale = 1;
    let yscale = 1;
    let xprev = 0;
    let yprev = 0;

    window.addEventListener('mousemove', function (e) {
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(0.8, 1.2, e.clientX - xprev);
        yscale = gsap.utils.clamp(0.8, 1.2, e.clientY - yprev);

        xprev = e.clientX;
        yprev = e.clientY;
        mouseFollower(xscale, yscale);
        timeout = setTimeout(() => {
            document.querySelector('#sticky-pointer').style.transform = `translate(${e.clientX - 4}px,${e.clientY - 4}px) scale(1,1) `;
        }, 100);
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
        duration: 2,
        stagger: .2,
        delay: -1,
    }).from('#home-footer', {
        duration: 1.5,
        y: -10,
        opacity: 0,
        ease: Expo.easeInOut,
        delay: -1
    });
}

// mouseFollower();
firstPageanim();
mouseBubble();

document.querySelectorAll('.elem').forEach(elem => {
    elem.addEventListener('mouseleave', (e) => {
        gsap.to(elem.querySelector('img'), {
            opacity: 0,
        });
    });

    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener('mousemove', (e) => {
        var diff = e.clientY - elem.getBoundingClientRect().top;
        var diffx = e.clientX - elem.getBoundingClientRect().left;        
        rotate = e.clientX;

        gsap.to(elem.querySelector('img'), {
            opacity: 1,
            ease: Power1,
            top: e.clientY,
            left: e.clientX,
            rotate: gsap.utils.clamp(-20, 20, e.clientX - rotate),
        });
    });
});