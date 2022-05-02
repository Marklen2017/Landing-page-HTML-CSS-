function openTab(evt, openTab) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(openTab).style.display = "block";
    evt.currentTarget.className += " active";
  }


var big_wrapper;
var hamburger_menu;

function declare() {
    big_wrapper = document.querySelector(".big-wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if (dark) {
        clone.classList.remove("light");
    } else {
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    document.body.classList.add("stop-scrolling");

    clone.addEventListener("animationend", () => {
        document.body.classList.remove("stop-scrolling");
        big_wrapper.remove();
        clone.classList.remove("copy");
        declare();
        events();
    });
}

function events() {
    hamburger_menu.addEventListener("click", () => {
        big_wrapper.classList.toggle("active");
    });
}

events();

const emailField = document.getElementById("emailField");
const button = document.getElementById("button");
const response = document.getElementById("response");
const input = document.getElementById("emailField")
const errorIcon =  document.getElementById("error-icon")

button.addEventListener("click", function (event) {
    event.preventDefault()
    const email = emailField.value;
    if (validateEmail(email)) {
        response.innerHTML = "Email is Valid";
        input.style.border = "1px solid green"
        response.style.background="green"
        errorIcon.style.display = "none"

    } else {
        response.innerHTML = "Whoops, make sure email format is valid";
        input.style.border = "1px solid red"
        errorIcon.style.display = "block"
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}