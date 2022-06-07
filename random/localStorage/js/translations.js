function initTranslastions(selectElement) {
    // pasiimame local storage objekta
    let localStorage = window.localStorage;

    // pasitikriname ar jau yra issaugota language reiksme
    let lang = localStorage.getItem("language");

    if (!lang) { // ar nera lang priskirtas/issaugotas
        lang = selectElement.value;
    } else {
        selectElement.value = lang;
    }

    doTransalations(lang);

    selectElement
        .addEventListener("change", function() {
            doTransalations(this.value); // paduodam kalba funkcijai
            localStorage.setItem("language", this.value) // this - siuo atveju yra dropdownas
        });
}


function doTransalations(kalba) {
    let translation = getTranslation(kalba);

    document.querySelector("[translation-menu-main]").innerText = translation.menu.main;

    document.querySelector("[translation-menu-service]").innerText = translation.menu.service;

    document.querySelector("[translation-menu-contact]").innerText = translation.menu.contacts;
}

function getTranslation(lang) {
    let translations = {
        en: {
            menu: {
                main: "Home",
                service: "Services",
                contacts: "Contacts"
            }
        },
        lt: {
            menu: {
                main: "Pagrindinis",
                service: "Paslaugos",
                contacts: "Kontaktai"
            }
        }
    };

    return translations[lang];
}