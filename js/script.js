const menuBtn = document.querySelector('#menu-b div'),
    dropdown = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    [menuBtn, dropdown].forEach(e => {
        e.classList.toggle("ativo");
    })
    // menuBtn
})