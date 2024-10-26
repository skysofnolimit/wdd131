const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const mainContainer = document.querySelector(".main_container");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  mainContainer.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  mainContainer.classList.remove("active");
}))

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Palmyra New York",
    location: "Palmyra, New York",
    dedicated: "2000, April, 6",
    area: 10900,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/palmyra-new-york/400x250/palmyra-new-york-mormon-temple-882900-high-res-print.jpg"
  },
  {
    templeName: "Philadelphia Temple",
    location: "Philadelphia, Pennsylvania",
    dedicated: "2016, September, 18",
    area: 61466,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/philadelphia-pennsylvania/400x250/philadelphia-pennsylvania-temple-exterior-1775821-wallpaper.jpg"
  },
  {
    templeName: "Los Angeles California Temple",
    location: "Los Angeles, California",
    dedicated: "1956, March, 11",
    area: 190614,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/400x250/los-angeles-california-temple-1079458-wallpaper.jpg"
  }
];

createTempleCard(temples);

// displays all the temples stored in the array.

const homelink = document.querySelector("#home");
homelink.addEventListener("click", () => {
  createTempleCard(temples);
});

// All temples built before 1900

const oldlink = document.querySelector("#old");
oldlink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => parseDate(temple.dedicated) < new Date('1900-01-01')));
});

// All temples built after 2000

const newlink = document.querySelector("#new");
newlink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => parseDate(temple.dedicated) > new Date('2000-01-01')));
});

// All temples larger than 90000 square feet

const largelink = document.querySelector("#large");
largelink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area > 90000));
});

// All temples smaller than 10000 square feet

const smalllink = document.querySelector("#small");
smalllink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => temple.area < 10000));
});

function createTempleCard(filteredTemples) {
  document.querySelector(".main_container-grid").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".main_container-grid").appendChild(card);
});
}

// Function to parse the dedicated date string into a Date object

function parseDate(dateStr) {
  const [year, month, day] = dateStr.split(',').map(part => part.trim());
  return new Date(`${year}-${month}-${day}`);
}