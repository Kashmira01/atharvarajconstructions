const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const testimonials = [
    {
        text: `"From the first consultation to the final reveal, they truly listened to our ideas and brought them to life with incredible attention to detail."`,
        name: "Parth Jadhav",
        role: "Manager",
        heading: "Reliable, professional, and truly cared about every detail",
        img: "images/testimonial-img.jpg"
    },
    {
        text: `"Exceptional service, transparent communication, and a team that genuinely cares about client satisfaction."`,
        name: "Sneha Kulkarni",
        role: "Project Lead",
        heading: "A team that listens, understands, and delivers beyond expectations",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800"
    },
    {
        text: `"Their professionalism and ability to execute even the most complex tasks made our project absolutely seamless."`,
        name: "Rahul Patil",
        role: "Construction Supervisor",
        heading: "Precision, quality, and dedicated teamwork at every stage",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"
    }
];

let index = 0;
let autoSlideInterval;

/* -------------------------
LOAD SLIDE
----------------------------*/
function loadSlide() {
    const t = testimonials[index];

    document.getElementById("testimonialText").innerText = t.text;
    document.getElementById("personName").innerText = t.name;
    document.getElementById("personRole").innerText = t.role;
    document.getElementById("testimonialHeading").innerText = t.heading;

    const img = document.getElementById("testimonialImage");
    img.src = t.img;

    img.classList.add("fade");
    setTimeout(() => {
        img.classList.remove("fade");
    }, 700);
}

/* -------------------------
NEXT & PREV CONTROLS
----------------------------*/
function nextSlide() {
    index = (index + 1) % testimonials.length;
    loadSlide();
}

function prevSlide() {
    index = (index - 1 + testimonials.length) % testimonials.length;
    loadSlide();
}

/* -------------------------
AUTO SLIDE (INFINITE 2s)
----------------------------*/
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 2000);
}

/* -------------------------
INIT
----------------------------*/
loadSlide();
startAutoSlide();
