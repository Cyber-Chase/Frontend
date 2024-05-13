class MobileNavbar {
    constructor() {
        this.mobileMenu = document.querySelector(this.mobileMenu);
        this.navList = document.querySelector(this.navList);
        this.navLinks = document.querySelectorAll(this.navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = " ")
        : (link.style.animation = `navLinkFade 0.5 ease forwards $ {index / 7 + 0.3}s`);
        });
    }


    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-links",
    ".nav-links li",
);

mobileNavbar.init();