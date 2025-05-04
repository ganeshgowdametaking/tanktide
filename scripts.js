function submitForm() {
    const emailInput = document.getElementById("email");
    if (emailInput.value.trim() !== "") {
        alert(`Thanks for signing up, ${emailInput.value.trim()}!`);
        emailInput.value = "";
    } else {
        alert("Please enter a valid email address.");
    }
}

// Countdown Timer
function startCountdown() {
    const launchDate = new Date("2025-06-01T00:00:00").getTime();
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = launchDate - now;
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("countdown").innerHTML = "<h3>We're Live!</h3>";
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }, 1000);
}

// Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll("[data-animate='fade-in']").forEach((el) => {
    gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: el.dataset.delay || 0,
        scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});

document.querySelectorAll("[data-animate='slide-in-left']").forEach((el) => {
    gsap.from(el, {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});

document.querySelectorAll("[data-animate='slide-in-right']").forEach((el) => {
    gsap.from(el, {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});

// Custom Cursor
const cursor = document.querySelector(".custom-cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

document.querySelectorAll("button, a, .feature-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    });
    el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
});

// Initialize
startCountdown();
