// Dynamic Year and Last Modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger Menu Toggle
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('open');
});

// --- TEMPLE ARRAY ---
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 68610,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 96000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Swapped out the last 6 images with highly reliable, open-access image links
  {
    templeName: "Abidjan Ivory Coast",
    location: "Abidjan, Ivory Coast",
    dedicated: "2025, May, 25",
    area: 35546,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg"
  },
  {
    templeName: "Syracuse Utah Temple",
    location: "Syracuse, Utah, United States",
    dedicated: "2015, May, 1",
    area: 12000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/syracuse-utah-temple/syracuse-utah-temple-60529-main.jpg"
  },
  {
    templeName: "Melbourne Australia Temple",
    location: "Melbourne, Australia",
    dedicated: "2000, December, 2",
    area: 15000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/melbourne-australia-temple/melbourne-australia-temple-58608-main.jpg"
  },
  {
    templeName: "Chicago Illinois Temple",
    location: "Chicago, Illinois, United States",
    dedicated: "1985, August, 9-13",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/chicago-illinois-temple/chicago-illinois-temple-58403-main.jpg"
  },
  {
    templeName: "Antofagasta Chile Temple",
    location: "Antofagasta, Chile",
    dedicated: "2025, June, 15",
    area: 26163,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-60193-main.jpg"
  },
  {
    templeName: "ELKO Nevada Temple",
    location: "Elko, Nevada, United States",
    dedicated: "2025, October, 12",
    area: 11990,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/elko-nevada-temple/elko-nevada-temple-63344-main.jpg"
  },
  {
    templeName: "Johannesburg Temple",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24-25",
    area: 5765,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
  },
  {
    templeName: "South Korea Temple",
    location: "South Korea",
    dedicated: "1985, December, 14-15",
    area: 5765,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22305-main.jpg"
  }
];

// --- GALLERY CREATION & FILTERING ---
const gallery = document.querySelector("#temple-gallery");
const galleryTitle = document.querySelector("#gallery-title");

function createTempleCards(filteredTemples) {
    gallery.innerHTML = ""; // Clear existing elements

    filteredTemples.forEach(temple => {
        // Use <figure> to match your existing CSS styles
        let card = document.createElement("figure");

        // Image with lazy loading required by assignment
        let img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        // Figcaption container for textual data
        let caption = document.createElement("figcaption");
        
        caption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

        card.appendChild(img);
        card.appendChild(caption);
        gallery.appendChild(card);
    });
}

// Initial initialization load
createTempleCards(temples);

// Navigation Filter Event Listeners
const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        
        const filter = e.target.getAttribute("data-filter");
        galleryTitle.textContent = filter;

        switch(filter) {
            case "Old":
                createTempleCards(temples.filter(t => parseInt(t.dedicated.substring(0, 4)) < 1900));
                break;
            case "New":
                createTempleCards(temples.filter(t => parseInt(t.dedicated.substring(0, 4)) > 2000));
                break;
            case "Large":
                createTempleCards(temples.filter(t => t.area > 90000));
                break;
            case "Small":
                createTempleCards(temples.filter(t => t.area < 10000));
                break;
            case "Home":
            default:
                createTempleCards(temples);
                break;
        }
        
        // Auto-close menu drawer on mobile viewports
        if (window.innerWidth < 768) {
            mainnav.classList.remove("show");
            hambutton.classList.remove("open");
        }
    });
});