///1-Masala

// const userNumbers = []

// function sumInput(numbers) {
//     var sum = 0;
//     var userSon = Number(prompt(`Sonlar kiriting:`));

//     if(sumInput < 0 || isNaN(sumInput)) {
//         userNumbers.push(userSon)
//         prompt += userSon
//     }else {
//         var userSon = alert(prompt(`son kiriting:`));
//     }
//     for (let i = 0; i < userNumbers.length; i++) {
//         sum += numbers[i]
//     }
//     return sum
    
// }
// alert(sumInput([]))
// console.log(userNumbers);

//2-Masala
// var salaries = {
// 	"Akmal": 1200,
// 	"Salim": 5200,
// 	"Karima": 1800
// }
// function sumSalaries (salaries) {
//     return salaries = Akmal + Salim + Karima
// }

// console.log((salaries)) // Natija: 8200 -> chiqishi kk



//Amaliy ish
var elBox = document.createElement('div')
elBox.classList.add('container', 'pokemon-main', 'pb-5')

var mainImg = document.createElement('img')
mainImg.classList.add('m-auto', 'd-block', 'mt-5', 'mb-5')
mainImg.setAttribute('src', '../images/main-img.png')

var elForm = document.createElement('form');
elForm.classList.add('class', 'form', 'd-flex', 'w-100', 'mb-5', 'justify-content-center', 'pb-5')

var elSelect = document.createElement('select');
elSelect.classList.add('class', 'form__select', 'col-2', 'p-2', 'text-center', 'p-2')

var elSelectOption = document.createElement('option')
elSelectOption.textContent = 'Gross';

var elSelectLetters = document.createElement('select');
elSelectLetters.classList.add('class', 'form__select__letters', 'col-2', 'text-center')

var elSelectLettersOption = document.createElement('option')
elSelectLettersOption.textContent = 'Aa-Zz';

var elSearch = document.createElement('input');
elSearch.setAttribute('placeholder', 'Search')
elSearch.setAttribute('type', 'search')
elSearch.classList.add('class', 'form__control', 'col-2', 'p-2')

var elBtn = document.createElement('button');
elBtn.textContent = 'Button';
elBtn.classList.add('class', 'btn')

var elList = document.createElement('ul');
elList.classList.add('pokemon-list', 'd-flex', 'list-unstyled', 'flex-wrap', 'justify-content-center', 'mb-5')

for(var i = 0; i < pokemons.length; i++) {
	elLi = document.createElement('li');
	elLi.classList.add('pokemon-list-item', 'card-header')

	elLine = document.createElement('hr');
	elLine.classList.add('card-line')

	elImg = document.createElement('img')
	elImg.setAttribute('src', pokemons[i].img)
    elImg.classList.add('pokemons-image', 'm-auto', 'mt-3', 'd-block')
	elImg.setAttribute('width', '157')
	elImg.setAttribute('height', '157')

	elName = document.createElement('h3');
	elName.textContent = pokemons[i].name;
	elName.classList.add('d-inline-block', 'pokemon-name')

	elTitle = document.createElement('p');
	elTitle.textContent = pokemons[i].type;
	elTitle.setAttribute('class', 'pokemon-title');

	var elIcon = document.createElement('img');
	elIcon.setAttribute('src', pokemons[i].icon);
	elIcon.classList.add('icon', 'd-inline-block')
	elIcon.setAttribute('width', '30')
	elIcon.setAttribute('height', '30')

	elWeight = document.createElement('p');
	elWeight.textContent = pokemons[i].weight;
	elWeight.classList.add('pokemon-weight',  'd-inline-block', 'me-4');

	elAge = document.createElement('p');
	elAge.textContent = pokemons[i].age;
	elAge.classList.add('pokemon-age', 'd-inline-block');

	elLi.appendChild(elImg);
	elLi.appendChild(elLine);
	elLi.appendChild(elName);
	elLi.appendChild(elIcon)
	elLi.appendChild(elTitle);
	elLi.appendChild(elWeight);
	elLi.appendChild(elAge);
	elList.appendChild(elLi);

	elBox.appendChild(mainImg);
	elSelect.appendChild(elSelectOption)
	elSelectLetters.appendChild(elSelectLettersOption)
	elForm.appendChild(elSelect);
	elForm.appendChild(elSearch);
	elForm.appendChild(elSelectLetters);
	elForm.appendChild(elBtn)
	elBox.appendChild(elForm);
	elBox.appendChild(elList);
	document.body.appendChild(elBox);
}