const menuBtn = document.querySelector('#menu-b div'),
    dropdown = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    [menuBtn, dropdown].forEach(e => {
        e.classList.toggle("ativo");
    })
})

const projetos = document.querySelectorAll('#projeto'),
    projetoInfo = document.querySelectorAll('#infop');

function ativaProjeto(index) {
    projetoInfo.forEach(section => section.classList.remove("ativo"));
    projetoInfo[index].classList.add("ativo");
}

projetos.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (projetoInfo[index].classList.contains("ativo")) {
            projetoInfo[index].classList.remove("ativo");

        } else {
            ativaProjeto(index);
        }
    })
})

window.addEventListener('click', event => {
    let temAtivo = document.querySelector('#infop.ativo');

    if (temAtivo) {
        if (!(temAtivo.contains(event.target) || temAtivo.previousElementSibling.contains(event.target))) {
            [temAtivo, temAtivo.previousElementSibling].forEach(e => e.classList.remove("ativo"))

        }
    }
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

        window.scrollTo({ top: topo, behavior: 'smooth' })
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
    overlay = document.querySelector('.overlay'),
    email = 'oliveira.idsoliver23@gmail.com';

emailDiv.addEventListener('click', () => {
    navigator.clipboard.writeText(email);
    overlay.classList.add('ativo');
    setTimeout(() => {
        overlay.classList.remove('ativo');
    }, 1100);
})