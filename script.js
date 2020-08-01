function hamburgerMenu() {
    var navbar = document.querySelector("#navbar");
    var icon = document.querySelector("#icon");
    if (navbar.className === "topnav") {
        navbar.className += " responsive";
        icon.className += " active";
    } else {
        navbar.className = "topnav";
        icon.className = "";
    }
}