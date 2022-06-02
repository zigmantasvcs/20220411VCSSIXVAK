function printUserName(){
    // paprašyti įvesti vartotojo vardą ir išvesti jį į konsolę
    let userName = prompt("Įveskite vartotojo vardą");

    console.log(userName);
}

function getUserName(){
    let userName = prompt("Įveskite vartotojo vardą");

    return userName;
}

// function doesUserExist(username){
//     let usernames = ["jonas123", "onute4", "petras55"];

//     for (let index = 0; index < usernames.length; index++) {
//         const element = usernames[index];

//         console.log(index);

//         if(element == username){
//             return true;
//         }
//     }

//     return false;
// }

function doesUserExist(username){
    return ["jonas123", "onute4", "petras55"].includes(username);
}

function printUserValidationMessage(user){
    if (doesUserExist(user)) {
        document.querySelector("p").innerText = "Sveiki prisijungę";
        document.querySelector("p").style.color = "green";
    } else {
        document.querySelector("p").innerText = "Jūs nerastas sistemoje";
        document.querySelector("p").style.color = "red";
    }
}

function calculateArrayNumbersAverage(array){

    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
        sum += element;
    }

    return sum/array.length;
}