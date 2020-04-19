function myFunction() {
    var x = document.getElementById("navbar");
    var y = document.getElementById("icon");
    if (x.className === "topnav") {
        x.className += " responsive";
        y.className += " active";
    } else {
        x.className = "topnav";
        y.className = "";
    }
}