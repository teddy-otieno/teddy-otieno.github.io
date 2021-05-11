"use strict";

//var selector_indicator = document.querySelector(".active-selector");
var current_content_view_position = 0;

function scroll_down() {
  var down_scroll = document.querySelectorAll(".scroll-down-button");
  console.log(down_scroll);

  var _loop = function _loop() {
    var pos = i;
    down_scroll[i].addEventListener('click', function () {
      window.scroll({
        top: window.innerHeight * (pos + 1),
        behavior: 'smooth'
      });
      window.scrollTo({
        top: window.innerHeight * (pos + 1),
        behavior: 'smooth'
      });
    });
  };

  for (var i = 0; i < down_scroll.length; i++) {
    _loop();
  }
}

function update_current_section_index(index) {
  var indicators = document.querySelectorAll('.navigation span');

  for (var id = 0; id < indicators.length; id++) {
    var temp = id;

    if (id === index) {
      indicators[id].classList.add("selected");
    } else {
      indicators[id].classList.remove("selected");
    }
  }
}

function on_scroll_header_style() {
  function is_element_in_viewport(element) {
    var bounds = element.getBoundingClientRect();
    return bounds.top >= 0 && bounds.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }

  var info_pages_element = document.querySelector(".following");
  var nav_element = document.querySelector("nav");
  var sections = document.querySelectorAll(".page");
  document.addEventListener('scroll', function () {
    if (is_element_in_viewport(info_pages_element)) {
      nav_element.classList.add("dark");
    } else {
      nav_element.classList.remove("dark");
    }

    for (var i = 0; i < sections.length; i++) {
      if (is_element_in_viewport(sections[i])) {
        console.log(i);
        update_current_section_index(i);
        break;
      }
    }
  });
}

function initalize() {
  var indicators = document.querySelectorAll(".navigation span");

  var _loop2 = function _loop2(i) {
    var pos = i;
    indicators[pos].addEventListener('click', function () {
      window.scroll({
        top: window.innerHeight * pos,
        behavior: 'smooth'
      });
    });
  };

  for (var i = 0; i < indicators.length; i++) {
    _loop2(i);
  }
}

initalize();
scroll_down();
on_scroll_header_style(); // var last_scroll_position = 0;
// var previous_window_height = 0;
// var is_window_scrolling = false;
// window.onscroll = function() {
//     console.log(`is window scrolling = ${is_window_scrolling}`);
//     console.log(`${last_scroll_position} - ${window.scrollY}`);
//     if(window.scrollY > last_scroll_position && !is_window_scrolling) {
//         console.log("Window is scrolling");
//         previous_window_height = window.innerHeight;
//         let scroll_offset = (window.pageYOffset || document.documentElement.scrollTop).toFixed();
//         let target = (scroll_offset + window.innerHeight).toFixed();
//         window.scroll({
//             top: target.toFixed(),
//             behavior: 'smooth'
//         });
//         is_window_scrolling = true;
//         window.onscroll = function() {
//             (console.log(`height = ${window.innerHeight} - offset = ${scroll_offset}`));
//             let currentScrollOffset = (window.pageYOffset || document.documentElement.scrollTop).toFixed()
//             if(currentScrollOffset.toFixed() === target) {
//                 console.log("Scrolling stopped");
//                 is_window_scrolling = false;
//             }
//         }
//     }
//     last_scroll_position = window.scrollY;
// }