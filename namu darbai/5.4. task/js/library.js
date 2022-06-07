function isPasswordCorrect(){
    let userPassword = prompt("Įveskite slaptažodį!");
    
    return [
        "querty123",
        "slaptazodis",
        "labas123"]
        .includes(userPassword);
    // grąžinama true, jeig vartotojo įvestas slaptažodis yra masyve, priešingu atveju grąžinama false

}