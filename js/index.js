const dark = document.querySelector('#dark');
const place = document.querySelector('.blog_');
const item = document.querySelector('#menu');
const up_arrow = document.querySelector('.up_arrow');
const drop = document.querySelector('.drop');
const img = document.querySelector('.img');
const bt = document.querySelector('.far');
const thanks = document.querySelector('.thanks');
const input_one = document.querySelector('#input_one');




let baseURL = window.location.pathname;
let u = baseURL.slice(-11);
let l = baseURL.slice(-10);

function pth() {
    if (u == "/index.html") {
        item.children[0].style.borderBottom = "5px solid rgb(255, 255, 255)";
    } else if (l == "/blog.html") {
        item.children[1].style.borderBottom = "5px solid rgb(255, 255, 255)";
    }
};
pth();
bt.addEventListener('click', clear)

function clear() {
    console.log(input_one.value || "input empty");
    setTimeout(function() {
        input_one.value = '';
    }, 100)
};
bt.addEventListener('click', thanks_u);

function thanks_u() {


    if (input_one.value == '') {
        thanks.innerHTML = 'Input empty. Please fill out.';

    } else {
        thanks.innerHTML = 'Thanks you, one of our team members will get in touch soon. Cheers.';
    }

    setTimeout(function() {
        thanks.innerHTML = '';
    }, 5000)
};


window.addEventListener('scroll', show);

function show() {
    setTimeout(function() {
        up_arrow.style.visibility = 'visible';
    }, 1000)
};


up_arrow.addEventListener('click', upArrow)

function upArrow() {
    up_arrow.style.visibility = 'visible';
    scrollTo(top = 0, left = 0);
};

window.addEventListener('scroll', foo);

function foo() {
    if (window.scrollY == 0) {
        setTimeout(function() {
            up_arrow.style.visibility = 'hidden';

        }, 1100)
    }
};

////first

place.addEventListener('mouseenter', toggleOptions);
place.addEventListener('click', toggleOptions);

function toggleOptions() {
    item.children[1].style.borderBottom = "none";
    dark.style.overflow = 'visible';
};

window.addEventListener('scroll', toggleOut);
place.addEventListener('mouseleave', toggleOut);

function toggleOut() {
    dark.style.overflow = 'hidden';

    if (l == "/blog.html") {
        item.children[1].style.borderBottom = "5px solid rgb(255, 255, 255)";
    }
};
///DARK_MODE
const darkBTN = document.querySelector('.dark');
let o = document.querySelector('.o');

let body = document.querySelector('body');
let section = document.querySelector('.section');
let preview = document.querySelector('.preview');




darkBTN.addEventListener('click', darkMode);

function darkMode() {
    body.style.backgroundColor = "#161716";
    section.id = 'sect';
    dark.style.borderBottom = '1px solid white';
    // preview.style.borderRadius = '10px';

    o.innerHTML = `
    body{
        background: #232323!important;
    }
    .desc  ul li {
        border: 1px solid white;
    }
    .section .cards .card .card-body {
        background-color: #232323 !important;
    }
    .socials ul li{
        border: 1px solid white;margin: 5px;
        padding: 15px 17px;
    }
    .socials ul li :hover {
        color: none; 
        background-color: none;
    }
    .form-control {    background-color: #495057;
    }
    p,
    h1,
    h3,
    h5,
    h4,
    li {
        color: #d7d7d8 !important;
    }
   .bodi{
    background: #232323!important;
   }
    
    hr{
        border: 1px solid #d7d7d8 !important;
    }
    a {
        color: #99c3f3 !important;
    }
    
    `;
    setTimeout(function() {
        darkBTN.innerHTML = 'Light Mode';
    }, 200);
};

darkBTN.addEventListener('click', lightMode);

function lightMode() {
    if (darkBTN.innerHTML == 'Light Mode') {

        o.innerHTML = '';
        body.style.backgroundColor = "";
        section.id = '';
        // preview.style.borderRadius = 0;
        setTimeout(function() {
            darkBTN.innerHTML = 'Dark Mode';
        }, 200);
    }
};