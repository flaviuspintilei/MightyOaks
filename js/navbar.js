window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".nav-bar");
    console.log(navbar);
    navbar.classList.toggle('sticky', window.scrollY > 0);
})

var aboutHeader = document.getElementById("aboutDropdown");

var dropdownContent = document.getElementsByClassName("dropdown-content")[0];

aboutHeader.addEventListener("mouseover", () => {
    dropdownContent.classList.add("display-block");
});

aboutHeader.addEventListener("mouseout", () => {
    dropdownContent.classList.remove("display-block");
});

dropdownContent.addEventListener("mouseover", () => {
    dropdownContent.classList.add("display-block");
})

dropdownContent.addEventListener("mouseout", () => {
    dropdownContent.classList.remove("display-block");
});

var historyMenu = document.querySelector(".history-menu");

historyMenu.addEventListener("click", historyFunction => {
        document.getElementById("#jumpToTheContent").scrollIntoView({behavior: 'smooth'});
});


function membersFunction() {
    window.location.hash = "jumpToTheMembers";
}




