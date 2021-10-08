window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".nav-bar");
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

var search = window.location.href;

if(search.includes("jumpHistory")){
    let history = document.getElementById("jumpToTheContent")

    if(history){
        document.getElementById("jumpToTheContent").scrollIntoView({behavior: "smooth"});
    }
}

if(search.includes("jumpMembers")){

    let members = document.getElementById("jumpToTheMembers")

    if(members){
        document.getElementById("jumpToTheMembers").scrollIntoView();
    }
}






