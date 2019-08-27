


document.addEventListener('DOMContentLoaded', function (){
    
    // var div = document.createElement("div");
    // div.innerHTML = "generate this list";
    // document.getElementById("CharacterElements").appendChild(div);

});

function getRandomNumber(max) {
    return Math.floor(Math.random() * (+max - 0));
}

function randomIndex(array) {
    return array[getRandomNumber(array.length)];
}

function generateCharacter() {
    var userInputs = getElementSelection();
    var character = "";
    for (let index = 0; index < userInputs.length; index++) {
        if (userInputs[index].checked) {
            character +=  randomIndex(data[userInputs[index].name]) + " ";
        }
    }
    updateCharactor(character);
}

function updateCharactor(character) {
    var outputDiv = document.getElementById('CharacterDescription');
    outputDiv.innerHTML = "Random Charactor Generated " + character;
}

function getElementSelection() {
    return document.getElementsByTagName('input');
}


