function getShoppingItem(){
    return {
        title: "Dulkių siurblys robotas XIAOMI Roborock S5 MAX white",
        price: 379.99,
        currency: "€",
        height: 9.65,
        battery: "Ličio-jonų baterija 5200mAh",
        filter: true,
        description: "Siurbimas ir drėgnas valymas. Siurbimo galia: 2000Pa. Valdymas išmaniuoju telefonu. Aplinkos skenavimas lazeriniu jutikliu, maršruto sudarymas ir pasirinkto kambario valymas. Didelė vandens talpykla: 280ml.",
        noiseLevel: "69 dB",
        manualMode: true,
        automaticMode: true,
        images: ["images/vacuum1.jpg", "images/vacuum2.jpg", "images/vacuum3.jpg", "images/vacuum3.jpg"]
    };
}

function placeShoppingItem(details){

    let template = '<h1>{{title}}</h1><div class="content"><div class="image"><div class="big"><img src="{{mainImage}}" alt=""></div><div class="small">{{imageList}}</div></div><div class="description"><p>{{description}}</p><p>{{height}}<p>{{battery}}</p><p>{{filter}}</p><p>{{noiseLevel}}</p><p>{{manualMode}}</p><p>{{automaticMode}}</p><h3>{{price}}</h3></div></div>';

    template = template.replace("{{title}}", details.title);
    template = template.replace("{{mainImage}}", details.images[0]);
    template = template.replace("{{imageList}}", createImages(details.images));
    template = template.replace("{{description}}", "<b>Aprašymas: </b>" + details.description);
    template = template.replace("{{height}}", "<b>Aukštis: </b>" + details.height);
    template = template.replace("{{battery}}", "<b>Baterija: </b>" + details.battery);
    template = template.replace("{{filter}}", "<b>Filtras: </b>" + resolveYesOrNo(details.filter));
    template = template.replace("{{noiseLevel}}", "<b>Triukšmo lygis: </b>" + details.noiseLevel);
    template = template.replace("{{manualMode}}", "<b>Rankinis režimas: </b>" + resolveYesOrNo(details.manualMode));
    template = template.replace("{{automaticMode}}", "<b>Automatinis režimas: </b>" + resolveYesOrNo(details.automaticMode));
    template = template.replace("{{price}}", "Kaina: " + details.price + details.currency);

    document.querySelector(".shoppincCartItemDetails").innerHTML = template;
}

function createImages(imageLinks){
    let images = '';
    for (let index = 0; index < imageLinks.length; index++) {
        const imageLink = imageLinks[index];

        let imageTemplate = '<img src="{{imageLink}}">';

        imageTemplate = imageTemplate.replace("{{imageLink}}", imageLink);

        images += imageTemplate;
    }

    return images;
}

function resolveYesOrNo(value){
    if(value){
        return "Taip";
    }

    return "Ne";
}