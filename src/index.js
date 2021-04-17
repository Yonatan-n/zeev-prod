import "./styles.css";

function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}
(function observeScrollEffect() {
  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      const elm = entry.target;
      if (entry.isIntersecting) {
        observer.unobserve(elm);
        elm.classList.add("scroll-observed-element-in");
        elm.classList.remove("scroll-observed-element-out");
      } else {
        elm.classList.add("scroll-observed-element-out");
        elm.classList.remove("scroll-observed-element-in");
      }

      // if (elm.classList.contains("section-intro"))
      //   console.log(entry.boundingClientRect);
    });
  }
  const sections = [...document.querySelectorAll("section")];

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };
  const observer = new IntersectionObserver(handleIntersect, options);
  sections.forEach((section) => observer.observe(section));
  // console.log({ xs });
})();

const gallery1 = document.querySelector("#gallery-1");
const gallery2 = document.querySelector("#gallery-2");
const gallery3 = document.querySelector("#gallery-3");

["1.jpg", "2.jpg", "3.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "pyramid.jpg"]
  .map((name) => "assets/" + name)
  .forEach((src) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = src;
    div.appendChild(img);
    gallery1.appendChild(div);
  });
["3.jpg", "4.jpg", "5.jpg", "2.jpg", "6.jpg", "7.jpg", "8.jpg", "pyramid.jpg"]
  .map((name) => "assets/" + name)
  .forEach((src) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = src;
    div.appendChild(img);
    gallery2.appendChild(div);
  });
[
  "https://www.youtube.com/embed/K1qvFZwVok8",
  "https://www.youtube.com/embed/fMfipiV_17o",
  "https://www.youtube.com/embed/QgAmuR_jabE",
  "https://www.youtube.com/embed/f708GtL6tns"
]
  // .map((name) => "assets/" + name)
  .forEach((src) => {
    let div = document.createElement("div");
    let iframe = document.createElement("iframe");
    iframe.src = src;
    div.className = "iframe-container";
    // iframe.className = '';
    div.appendChild(iframe);
    gallery3.appendChild(div);
  });

(function observeScrollImagesEffect() {
  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      const elm = entry.target;
      if (entry.isIntersecting) {
        observer.unobserve(elm);
        elm.classList.add("scroll-observed-element-in-img");
        elm.classList.remove("scroll-observed-element-out-img");
      } else {
        elm.classList.add("scroll-observed-element-out-img");
        elm.classList.remove("scroll-observed-element-in-img");
      }

      // if (elm.classList.contains("section-intro"))
      //   console.log(entry.boundingClientRect);
    });
  }
  const imgs = [
    ...document.querySelectorAll("img, .iframe-container, h1, h4, p")
  ];

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };
  const observer = new IntersectionObserver(handleIntersect, options);
  imgs.forEach((img) => observer.observe(img));
  // console.log({ xs });
})();

(function initContactSection() {
  let email = document.querySelector("#email-address");
  email.href = "mailto:someone@yoursite.com?subject=I'm looking for a designer";
  let linkedin = document.querySelector("#linkedin-address");
  linkedin.href = "https://www.linkedin.com/in/yonatan-ninio-97b32120a/";
  let ig = document.querySelector("#ig-address");
  // ig.innerText = "Zeef Fink";
  ig.href = "https://www.instagram.com/explore/tags/communist/";
})();

document.querySelector("body").style = "display:block;";
