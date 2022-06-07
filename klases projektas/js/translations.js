function getTranslations(lang){
    let translations = {
        en: {
            menu: {
                main: "Home",
                services: "Services",
                gallery: "Gallery"
            }
        },
        lt: {
            menu: {
                main: "Pagrindinis",
                services: "Paslaugos",
                gallery: "Galerija"
            }
        }
    };

    return translations[lang];
}

function doTranslations(lang){
    let translation = getTranslations(lang);

    document.querySelector("[translation-menu-main]").innerText = translation.menu.main;
    document.querySelector("[translation-menu-services]").innerText = translation.menu.services;
    document.querySelector("[translation-menu-gallery]").innerText = translation.menu.gallery;
}