const body = document.body;
const darkModeToggle = document.getElementById('dark-mode-toggle');
const iframe = document.querySelector('iframe');

document.addEventListener("DOMContentLoaded", ()=> {
    if (localStorage.getItem("theme-white")) {
        setTheme(JSON.parse(localStorage.getItem("theme-white")));
    } else {
        setTheme(body.classList.contains("theme-white") ? true : false);
    }
})

if (iframe) {
    iframe.addEventListener('load', ()=> {
        if (localStorage.getItem("theme-white")) {
            setThemeIframe(JSON.parse(localStorage.getItem("theme-white")));
        } else {
            setThemeIframe(body.classList.contains("theme-white") ? true : false);
        }
    })
}

darkModeToggle.addEventListener('click', ()=> {
    if (iframe) {
        setThemeIframe(body.classList.contains("theme-white") ? false : true);
    }
    setTheme(body.classList.contains("theme-white") ? false : true);
})

function setTheme(white) {

    localStorage.setItem('theme-white', white);
    if (white) {
        body.classList.add('theme-white');
    }
    else {
        body.classList.remove('theme-white');
    }
    document.querySelector('link[href$="theme-dark.css"]').disabled = white;

}

function setThemeIframe(white) {

    window.epg.theme(white);

}
