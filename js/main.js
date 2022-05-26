//Amaliy ish
var elBox = document.createElement('div')
elBox.classList.add('container', 'pokemon-main', 'pb-5')

var mainImg = document.createElement('img')
mainImg.classList.add('m-auto', 'd-block', 'mt-5', 'mb-5')
mainImg.setAttribute('src', '../images/main-img.png')

var pokemonImg = document.createElement('img')
pokemonImg.classList.add('m-auto', 'd-inline-block', 'pokemon-img')
pokemonImg.setAttribute('src', '../images/pokemon-img.svg')
pokemonImg.setAttribute('width', '50');
pokemonImg.setAttribute('height', '50');

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
	elLi.classList.add('pokemon-list-item')

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
	elIcon.classList.add('icon', 'ms-auto', 'd-inline-grid')
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
	elBox.appendChild(pokemonImg);
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