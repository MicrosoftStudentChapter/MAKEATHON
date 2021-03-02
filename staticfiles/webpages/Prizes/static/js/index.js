tsParticles.load("tsparticles", {
    detectRetina: false,
    fpsLimit: 60,
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10,
                },
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 40,
                duration: 2,
                opacity: 8,
                size: 4,
                speed: 3,
            },
            connect: {
                distance: 80,
                lineLinked: { opacity: 0.5 },
                radius: 60,
            },
            grab: {
                distance: 400,
                lineLinked: { opacity: 1 },
            },
            push: { quantity: 4 },
            remove: { quantity: 2 },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            slow: {
                active: false,
                radius: 0,
                factor: 1,
            },
        },
    },
    particles: {
        color: { value: "#ffffff" },
        lineLinked: {
            blink: true,
            color: "#ffffff",
            consent: false,
            distance: 30,
            enable: true,
            opacity: 0.3,
            width: 1,
        },
        move: {
            attract: {
                enable: false,
                rotate: {
                    x: 500,
                    y: 1200,
                },
            },
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: false,
                area: 2000,
            },
            limit: 0,
            value: 680,
        },
        opacity: {
            animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 2,
                sync: false,
            },
            random: false,
            value: 0.4,
        },
        shape: {
            character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
            },
            image: {
                replaceColor: true,
                src: "images/github.svg",
                width: 100,
            },
            polygon: { sides: 10 },
            stroke: {
                color: "#ffffff",
                width: 3,
            },
            type: "circle",
        },
        size: {
            animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false,
            },
            random: true,
            value: 3,
        },
    },
    polygon: {
        draw: {
            enable: false,
            stroke: {
                color: "rgba(255,255,255,0.2)"
            },
            lineWidth: 1,
        },
        move: {
            radius: 7,
        },
        inline: {arrangement: "equidistant"},
        scale: 0.79,
        type: "inline",
        url: "/static/webpages/Prizes/static/img/trophy.svg",
    },
});
