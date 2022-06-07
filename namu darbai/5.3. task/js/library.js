function getMonthName(){
    let d = new Date();

    return [
        "Sausis", 
        "Vasaris", 
        "Kovas", 
        "Balandis", 
        "Gegužis", 
        "Birželis",
        "Liepa",
        "Rugpjūtis",
        "Rugsėjis",
        "Spalis",
        "Lapkritis",
        "Gruodis"
    ][d.getMonth()];
}