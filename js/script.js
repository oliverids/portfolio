const menuBtn = document.querySelector('#menu-b div'),
    dropdown = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    [menuBtn, dropdown].forEach(e => {
        e.classList.toggle("ativo");
    })
})

const links = document.querySelectorAll('#slide a[href^="#"]');
function initScrollSuave() {
    const linksInternos = Array.from(links);
    linksInternos.push(document.getElementById('cta-projeto'));

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        let topo = section.offsetTop - 110;

        window.scrollTo({top: topo, behavior: 'smooth'})
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
}
initScrollSuave();

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const windowmetade = window.innerHeight * 0.4;
    let current;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top - windowmetade;

        if (sectionTop < 0) {
            current = section.getAttribute('id');
        }
    })

    links.forEach(link => {
        link.classList.remove('active')

        if (link.classList.contains(current)) {
            link.classList.add('active')
        }
    })
})

const voltaTopo = document.getElementById("topo");
voltaTopo.addEventListener('click', () => {
    let topo = document.body;

    topo.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

const emailDiv = document.getElementById('email'),
    email = 'oliveira.idsoliver23@gmail.com';

emailDiv.addEventListener('click', () => {
    navigator.clipboard.writeText(email);
    emailDiv.classList.add('ativo');
    setTimeout(() => {
        emailDiv.classList.remove('ativo');
    }, 1100);
})