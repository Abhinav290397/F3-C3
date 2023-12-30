const Btn = document.getElementById("btn");
const Input = document.getElementById("search-input");
const Body = document.querySelector("body");
const Mid = document.getElementById("mid");
const Footer = document.getElementById("footer");

let Date = "";

Btn.addEventListener("click",(event) => {
    event.preventDefault();
    Date = Input.value;
    Input.value = "";
    if(!Date){
        return;
    }
    const Anchor = document.createElement("a");
    Anchor.innerText = Date;
    Footer.appendChild(Anchor);
});
