function tiltCards(){
    VanillaTilt.init(document.querySelectorAll(".banner"), {
        max: 19,
        speed: 3000,
        glare: true,
        scale: 1.2,
        axis: X,
        "max-glare": 0.7,
    });
}

tiltCards()