document.addEventListener('DOMContentLoaded', function () {
    createElementSelection()
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
            character += randomIndex(data[userInputs[index].name]) + " ";
        }
    }
    updateCharacter(character);
}

function updateCharacter(character) {
    var outputDiv = document.getElementById('CharacterDescription');
    outputDiv.innerHTML = "Random Character Generated " + character;
}

function getElementSelection() {
    return document.getElementsByTagName('input');
}

function createElementSelection() {
    const keys = Object.keys(data)
    for (let index = 0; index < keys.length; index++) {
        var div  = document.createElement("div");
        
        var label = document.createElement("label");
        label.setAttribute("class","checkbox");
        label.innerText  = keys[index];
               
        var input = document.createElement("input");
        input.setAttribute("type","checkbox");
        input.setAttribute("name",keys[index]);
        
        
        div.appendChild(label)
        label.appendChild(input)
        
        document.getElementById("CharacterElements").appendChild(div);
    }
}

