const rootElement = document.querySelector('.root-div');
const startBTN = document.querySelector('.btn-start');
console.log(startBTN);


fetch('https://rickandmortyapi.com/api/character')
    .then(function(response) {
        return response.json()
    }).then(function(responseJSON) {
        showCharacters(responseJSON)
    })
    .catch((e) => {
        console.log(e);
    });

const makeElement = function (tagName, className) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    return element;
};


function showCharacters (JSONObj) {
    const characters = JSONObj.results;
    console.log(characters);

    startBTN.onclick = function(){
        console.log("start BTN onclick");
        for (let i = 0; i <= characters.length; i++) {
            const article = makeElement('article', 'card');
            const name = makeElement('h2', 'card__name');
            const status = makeElement('p', 'card__status');
            const species = makeElement('p', 'card__species');
            const gender = makeElement('p', 'card__gender');
            const location =  makeElement('p', 'card__location');
            const cardImg = makeElement('img', 'card__img');
    
            name.textContent = 'Название: ' + characters[i].name;
            status.textContent = 'Статус:  ' + characters[i].status;
            species.textContent = 'Вид:  ' + characters[i].species;
            gender.textContent = 'Пол:  ' + characters[i].gender;
            location.textContent = 'Место нахождения: ' + characters[i].location.name;
            
            cardImg.style.backgroundImage =  "url('" + characters[i].image + "')";
            console.log(cardImg.style.backgroundImage.textContent);

            article.appendChild(cardImg);
            article.appendChild(name);
            article.appendChild(status);
            article.appendChild(species);
            article.appendChild(gender);
            article.appendChild(location);
            rootElement.appendChild(article); 
        startBTN.style.display = 'none';
        }
    }
    }