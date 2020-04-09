const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// PROMPT
// var favColor = prompt("Please enter your favorite color");

const nav = document.querySelectorAll("nav a");
nav.forEach(element => element.style.color = "red");
nav[0].textContent = siteContent.nav["nav-item-1"];
nav[1].textContent = siteContent.nav["nav-item-2"];
nav[2].textContent = siteContent.nav["nav-item-3"];
nav[3].textContent = siteContent.nav["nav-item-4"];
nav[4].textContent = siteContent.nav["nav-item-5"];
nav[5].textContent = siteContent.nav["nav-item-6"];

const cta1 = document.querySelectorAll("h1");
cta1[0].textContent = siteContent.cta["h1"];

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta["button"];

const ctaIMG = document.querySelector("#cta-img");
ctaIMG.src = siteContent.cta["img-src"];

const featureH4 = document.querySelectorAll("h4");

featureH4[0].textContent = siteContent["main-content"]["features-h4"];
featureH4[1].textContent = siteContent["main-content"]["features-h4"];
featureH4[2].textContent = siteContent["main-content"]["features-h4"];
featureH4[3].textContent = siteContent["main-content"]["features-h4"];
featureH4[4].textContent = siteContent["main-content"]["features-h4"];




const sectionText = document.querySelectorAll(".main-content p");
sectionText[0].textContent = siteContent["main-content"]["features-content"];
sectionText[1].textContent = siteContent["main-content"]["about-content"];
sectionText[2].textContent = siteContent["main-content"]["services-content"];
sectionText[3].textContent = siteContent["main-content"]["product-content"];
sectionText[4].textContent = siteContent["main-content"]["vision-content"];

const cTact = document.querySelector(".contact h4");
cTact.textContent = siteContent["contact"]["contact-h4"];

const cTact1 = document.querySelectorAll(".contact p");
cTact1[0].textContent = siteContent["contact"]["address"];
cTact1[1].textContent = siteContent["contact"]["phone"];
cTact1[2].textContent = siteContent["contact"]["email"];

const myFooter = document.querySelector("footer p");
myFooter.textContent = siteContent["footer"]["copyright"];
myFooter.style.color = "red";
