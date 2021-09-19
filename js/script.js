const menuBtn = document.querySelector('#menu-b div'),
    dropdown = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    [menuBtn, dropdown].forEach(e => {
        e.classList.toggle("ativo");
    })
})

function initScrollSuave() {
    const linksInternos = Array.from(document.querySelectorAll('#slide a[href^="#"]'));
    linksInternos.push(document.getElementById('cta-projeto'));

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
}
initScrollSuave();

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