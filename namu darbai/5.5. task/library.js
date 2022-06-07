function getParagraphContent() {
    return document.querySelector("p").innerText;
}

function changeParagraphContent() {
    let paragraphContent = getParagraphContent();
    document.querySelector("p").innerText = paragraphContent.replace("€", "EUR.");
}