document.addEventListener('DOMContentLoaded', function () {
    createElementSelection()
});

function createElementSelection() {
    const keys = Object.keys(data)
    for (let index = 0; index < keys.length; index++) {

        var li = document.createElement("li");
        li.setAttribute("class", "box");

        if (keys[index] === 'Descriptor') {

            var label = document.createElement("label");
            label.innerText = keys[index];

            var div = document.createElement("div");
            div.setAttribute("class", "select");

            var select = document.createElement("select");
            select.setAttribute('id','Descriptor')
            for (let index = 0; index <= 3; index++) {
                var option = document.createElement("option");
                option.setAttribute("value",index)
                option.innerHTML = index;
                if(index == 1){option.setAttribute("selected","selected")}
                select.appendChild(option)
            }
            
            div.appendChild(select)
            label.appendChild(div)

            li.appendChild(label)
       
        }
        else {

            var label = document.createElement("label");
            label.innerText = keys[index];

            var input = document.createElement("input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("name", keys[index]);

            li.appendChild(label)
            label.appendChild(input)

        }  
       
        document.getElementById("CharacterElements").append(li);
       

    }
}

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

    var descriptor = document.getElementById('Descriptor');
    var selection = descriptor.options[descriptor.selectedIndex].text;
    for (let index = 0; index < selection; index++) {
        character += randomIndex(data["Descriptor"]) + " ";
    }

    updateCharacter(character);
}

function updateCharacter(character) {
    var outputDiv = document.getElementById('CharacterDescription');
    outputDiv.innerHTML = "" + character;
}

function getElementSelection() {
    return document.getElementsByTagName('input');
}



