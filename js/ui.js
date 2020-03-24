//var selector_indicator = document.querySelector(".active-selector");
var current_content_view_position = 0

function scroll_down () {
    const down_scroll = document.querySelectorAll(".scroll-down-button");

    console.log(down_scroll)
    for(var i = 0; i < down_scroll.length; i++) {
        let pos = i;
        down_scroll[i].addEventListener('click', function () {
            window.scroll({
                top: window.innerHeight * (pos + 1),
                behavior: 'smooth'
            });
            window.scrollTo({
                top: window.innerHeight * (pos + 1),
                behavior: 'smooth'
            });
        })

    }

}


function update_current_section_index(index) {
    const indicators = document.querySelectorAll('.navigation span');

    for(var id = 0; id < indicators.length; id++){
        var temp = id;
        if(id === index) {
            indicators[id].classList.add("selected");
        } else {
            indicators[id].classList.remove("selected");
        }
    }
}

function on_scroll_header_style () {
    function is_element_in_viewport(element) {
        var bounds = element.getBoundingClientRect();

        return (bounds.top >= 0 && bounds.bottom <= (window.innerHeight || document.documentElement.clientHeight));
    }

    const info_pages_element = document.querySelector(".following");
    const nav_element = document.querySelector("nav");
    const sections = document.querySelectorAll(".page");

    document.addEventListener('scroll', function() {
        if(is_element_in_viewport(info_pages_element)) {
            nav_element.classList.add("dark");
        } else {
            nav_element.classList.remove("dark");
        }

        for(var i=0; i < sections.length; i++) {
            if(is_element_in_viewport(sections[i])) {
                console.log(i);
                update_current_section_index(i);
                break;
            }
        }
    })
}

function initalize() {
    const indicators = document.querySelectorAll(".navigation span");

    for(let i = 0; i < indicators.length; i++) {
        let pos = i;
        indicators[pos].addEventListener('click', function () {
            window.scroll({
                top: window.innerHeight * (pos),
                behavior: 'smooth',
            });
        });
    }
}

initalize();
scroll_down();
on_scroll_header_style();