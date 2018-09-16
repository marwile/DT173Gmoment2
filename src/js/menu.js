function topNav() {
    var top = document.getElementById("nav");
        if (top.className === "navigation") {
            top.className += " responsive";
        } else {
            top.className = "navigation";
        }
}