//toggle

let menuicon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// active section

const typed = new Typed('.multitext', {
    strings: ['FullStack Developer', 'ML Practitioner', 'Big Data Analyst'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

let sec = document.querySelectorAll('section');
let navigate = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sec.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top <offset +height){
            navigate.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

