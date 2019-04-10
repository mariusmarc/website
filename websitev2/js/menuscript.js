

function changeDisplay() {

    var menuContainer = document.getElementById("menucontainer")

    
    if (menuContainer.classList.contains("menucontainer--open") == true) {
        menuContainer.classList.remove("menucontainer--open");
    } else {
        menuContainer.classList.add("menucontainer--open");
    }
    
}

function expandItem(id) {
    var element = document.getElementById(id);
    var className = "boxelement--active";

    if (element.classList.contains(className) == true) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}