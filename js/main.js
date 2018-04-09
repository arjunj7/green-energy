/* 
Declare variables:
masthead (HTML container storing 
the current slide - slide-show part)

slides (array of elements storing 
all slides - slide-show part)

buttons (collected list of 
3 buttons in array - main content hide/reveal part)

contents (array of 3 elements - contents 
in main content hide/reveal part)

container (HTML element that will get a content
from array contents)

i (variable to be used as index-pointer 
inside loops for slide-show part)

k (variable to be used as index-pointer
inside loops for hide/reveal content part) */

(function () {
   


/*
-------------------------------------
START CODING REVEAL-HIDE MAIN-CONTENT
-------------------------------------
*/

var buttons = document.querySelectorAll("main span");

var contents = [
        '<figure class="clearfix">' +
            '<img src="./img/img-01.jpg" alt="energy">' +
            '<figcaption>Electric cars run a minimum of partly on electricity. not like standard vehicles that use a hydrocarbon or diesel-powered engine, electrical cars and trucks use an electrical motor powered by electricity from batteries or a electric cell.</figcaption>' +
        '</figure>',

         '<figure class="clearfix">' +
            '<img src="./img/img-02.jpg" alt="solar-panel">' +
            '<figcaption>Solar energy is beamy light-weight and warmth from the Sun that is controlled employing a vary of ever-evolving technologies like star heating, photovoltaics, star thermal energy, star design, liquefied salt power plants and artificial chemical process.</figcaption>' +
        '</figure>',

        '<figure class="clearfix">' +
            '<img src="./img/img-03.jpg" alt="wind-mill">' +
            '<figcaption>Wind power is that the use of air flow through wind turbines to automatically power generators for power.</figcaption>' +
        '</figure>'
];

var container = document.querySelector(".container");
container.innerHTML = contents[0];

function handleClick(ev) {
    ev.preventDefault();
    var target = ev.target;

    for (z = 0; z < buttons.length; z++) {
        if (buttons[z].hasAttribute("id")) {
            buttons[z].removeAttribute("id");
        }
    }

    if (ev.target.innerHTML === "Electricity") {
        container.innerHTML = contents[0];
    } else if (ev.target.innerHTML === "Solar") {
        container.innerHTML = contents[1];
    } else {
        container.innerHTML = contents[2];
    }

    ev.target.setAttribute("id", "active");
}

for (z = 0; z < buttons.length; z++) {
        buttons[z].addEventListener("click", handleClick);
}

}());