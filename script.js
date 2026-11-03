
const header = document.getElementById("header");

const pages = [
    ["Home", "index.html"],
    ["Cars", "cars.html"],
    ["Services", "services.html"],
    ["About", "about.html"],
    ["Pricing", "pricing.html"],
    ["Locations", "locations.html"],
    ["FAQ", "faq.html"],
    ["Contact", "contact.html"]
];

if (header) {
    const current = location.pathname.split("/").pop() || "index.html";

    header.innerHTML = `
        <a href="index.html" class="logo">
            DRIVE<span>ON</span>
        </a>

        <nav>
            ${pages.map(page => `
                <a href="${page[1]}"
                class="${current === page[1] ? "active" : ""}">
                ${page[0]}</a>
            `).join("")}

            <a href="booking.html" class="btn">Book Now</a>
        </nav>
    `;
}

const footer = document.getElementById("footer");

if (footer) {
    footer.innerHTML = `
        <h2>DRIVE<span style="color:#ff8b28">ON</span></h2>
        <p>Your journey, our responsibility.</p>

        <div class="footer-links">
            <a href="index.html">Home</a>
            <a href="cars.html">Cars</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
        </div>

        <p>© 2026 DRIVEON. All Rights Reserved.</p>
    `;
}

const searchForm = document.getElementById("searchForm");

if (searchForm) {
    searchForm.addEventListener("submit", function(e) {
        e.preventDefault();

        if (!document.getElementById("pickup").value.trim()) {
            alert("Please enter pickup location.");
            return;
        }

        window.location.href = "cars.html";
    });
}

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Your booking request has been submitted!");
        bookingForm.reset();
    });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you! Your message has been received.");
        contactForm.reset();
    });
}
