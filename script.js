const hamburger = document.querySelector(".hamburger_wrapper");
const links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
  links.classList.toggle("show");
});

/* This piece of handle the navBar links while shifting in different screen sizes */
let currentWindowWidth = window.innerWidth;
window.addEventListener("resize", () => {
  currentWindowWidth = window.innerWidth;
  if (currentWindowWidth > "990") {
    links.classList.remove("show");
  }
});

/* --------------------------- */
/* Dynamically Populated Features Section. Each Index of array represent a feature card */
const featuresWrapper = document.getElementById("features__wrapper");
const features = [
  {
    id: 1,
    icon: "https://assets-global.website-files.com/5d9a902248623ef932d0da66/62225a7f676224c377b70b1b_code-icon.svg",
    title: "Embed on your site",
    desc: "Seamlessly integrate ranked choice contests on your page.",
  },
  {
    id: 2,
    icon: "https://assets-global.website-files.com/5d9a902248623ef932d0da66/5f8af0adc267803f82ec1b6b_winners_green.svg",
    title: "Unlimited Candidates",
    desc: "Voters can choose from a broad array of choices in each contest.",
  },
  {
    id: 3,
    icon: "https://assets-global.website-files.com/5d9a902248623ef932d0da66/5f8ae7695a8bcbac0ba73af3_voter.svg",
    title: "Unlimited Voters",
    desc: "Reach your voters. Even if theres 100,000 of them.",
  },
  {
    id: 4,
    icon: "https://assets-global.website-files.com/5d9a902248623ef932d0da66/5f8af1aabe7a66136190e2d8_duplicate_detection_green.svg",
    title: "Duplicate Detection",
    desc: "Filter out votes that may not be unique.",
  },
  {
    id: 5,
    icon: "https://assets-global.website-files.com/5d9a902248623ef932d0da66/6226ab7b6f46e7c715fa3ba8_lock.svg",
    title: "Private Results",
    desc: "Make sure the outcome isn't revealed until you want it to be.",
  },
  {
    id: 6,
    icon: "https://assets-global.website-files.com/5d9a902248623ef932d0da66/6226ac0d04a4fa4933ff7866_results.svg",
    title: "Custom Call to Action",
    desc: "Send voters to any website after they vote.",
  },
  {
    id: 7,
    icon: "https://assets-global.website-files.com/5d9a902248623ef932d0da66/62225c4b095022664a677e31_file-explain-icon.svg",
    title: "Detailed Profiles",
    desc: "Flesh out choices with detailed descriptions and pictures.",
  },
  {
    id: 8,
    icon: "https://assets-global.website-files.com/5d9a902248623ef932d0da66/5f8aee6cc66732ae4894f662_mobile-friendly.svg",
    title: "Highly Accessible",
    desc: "Device friendly. Screen Reader friendly. Language friendly.",
  },
];

featuresWrapper.innerHTML = features
  .map(
    (feature) => `
<article class="feature__card" key="${feature.id}">
    <div class="icon_wrapper">
      <img src="${feature.icon}" alt="${feature.title}" />
    </div>
    <h3 class="feature_title">${feature.title}</h3>
    <p class="feature_desc">${feature.desc}</p>
  </article>
`
  )
  .join("");

/* Testimonial Slider */
let slides = document.getElementsByClassName("mySlides");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

if (!slides.length == 0) {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  let currentSlide = function (n) {
    showSlides((slideIndex = n));
  };

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }
}

prev.addEventListener("click", () => {
  plusSlides(-1);
});

next.addEventListener("click", () => {
  plusSlides(1);
});
