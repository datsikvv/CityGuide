console.clear();

var wrapForm = document.getElementById('wrapForm');
var descriptionForm = document.getElementById('descriptionForm');
var btnAddCity = document.getElementById('btn_1');
var btnAddPlace = document.getElementById('btn_2');
var btn = document.getElementsByTagName('button')[0];
var cityForm = createCityForm();
var placeForm = createPlaceForm();

console.dir(btn);

addCityForm(); // Нажимаем add city, добавляется форма
addPlaceFormNew(); //  Нажимаем add placeb Добавление формы места без клика по кнопке

btnEffect(); // Подсветка кнопки add city






/*
var btnClose = document.getElementById('Close');
btnClose.addEventListener( "click" , function() {wrapForm.style.backgroundColor = "red"});
*/






// wrapForm.appendChild(cityFormNew);
wrapForm.appendChild(cityForm);         // Показываем сохраненную форму Гордов для посещения
descriptionForm.appendChild(placeForm);  // Показываем сохраненную форму Мест для посещения


// console.dir(cityForm);
// console.log(cityForm);



// if(btnClose) {
//   closeForm() ; // Закрытие кнопки после нажатия кнопки Close
// }
//  window.onload = function(){
//   closeForm() ;
// }




function createTextField(rows, cols, placeholder){
    var text = document.createElement('textarea');

    text.placeholder = placeholder;
    text.rows = rows;
    text.cols = cols;
    text.style.width = "95%";
    text.style.margin = "3px";

    return text;
};

function createButton(value, _parent){
    var btn = document.createElement('input');
    var ident ='btn' + value;

    btn.id = ident;
    btn.value = value;
    btn.type = "button";
    btn.style.cursor = "pointer";
    btn.style.margin = "5px";
    btn.addEventListener( "click",  function() {
        _parent.removeChild(_parent.lastChild);
    });

    return btn;
};

function createParagraph(text){
    var p = document.createElement('p');

    p.innerHTML = text;

    return p;
};

function createCityFormNew(){
    var cityFormNew = new CityForm();

    var btnSave = createButton("Save");
    var btnClose = createButton("Close", wrapForm);
    var txt1 = createTextField("1", "45", "City name");
    var txt2 = createTextField("3", "45", "Notes");

    cityFormNew.div.appendChild(txt1);
    cityFormNew.div.appendChild(txt2);

    cityFormNew.div.appendChild(btnSave);
    cityFormNew.div.appendChild(btnClose);

    return cityFormNew.div;
};

function createCityForm(){
    var cityFormNew = new CityForm();

    var btnEdit = createButton("Edit");
    var btnDelate = createButton("Delate");
    var p1 = createParagraph("Dnipro");
    var p2 = createParagraph("Lorem ipsum dolor sit amet.");


    cityFormNew.div.appendChild(p1);
    cityFormNew.div.appendChild(p2);
    cityFormNew.div.appendChild(btnEdit);
    cityFormNew.div.appendChild(btnDelate);

    return cityFormNew.div;
};

function addCityForm() {
    var cityFormNew = createCityFormNew();
    btnAddCity.addEventListener( "click" , function() {wrapForm.appendChild(cityFormNew)});
};

function btnEffect() {
    var btn = document.getElementsByTagName('button')[0];

    btn.addEventListener( "mouseover", function() {
        btn.style.backgroundColor = "#ababab";
    });
    btn.addEventListener( "mouseout", function() {
        btn.style.backgroundColor = "#ddd";
    });
};

function createPrioritet(){
    var div = document.createElement('div');
    var select = document.createElement('select');
    var option = document.createElement('option');

    for (i = 0; i <= 5; i++){
        option = document.createElement('option');
        if(i == 0){
            option.innerHTML = "Выберите приоритет";
            select.appendChild(option);
        } else { option.innerHTML = i;
            select.appendChild(option);}
    }
    console.log(select);
    console.log(option);

    div.id = "select";
    div.appendChild(select);

    return div;
};




function createPlaceFormNew(){
    var placeForm = new PlaceForm();

    var btn1 = createButton("Save");
    var btn2 = createButton("Close", descriptionForm);
    var txt1 = createTextField("3", "45", "Notes");
    var select = createPrioritet();

    placeForm.div.appendChild(txt1);
    placeForm.div.appendChild(select);
    placeForm.div.appendChild(btn1);
    placeForm.div.appendChild(btn2);

    return placeForm.div;
};

function createPlaceForm(){
    var placeForm = new PlaceForm();

    var btnEdit = createButton("Edit");
    var btnDelate = createButton("Delate");
    var p1 = createParagraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua");


    placeForm.div.appendChild(p1);

    placeForm.div.appendChild(btnEdit);
    placeForm.div.appendChild(btnDelate);

    return placeForm.div;
};


function addPlaceFormNew() {
    var placeFormNew = createPlaceFormNew();
    btnAddPlace.addEventListener( "click" , function() {descriptionForm.appendChild(placeFormNew)});
};

// конструкторы


function CityForm() {
    this.div = document.createElement('div');
    this.div.indent = "textFormNew";

    this.div.class = "indent";
    this.div.style.width = "90%";
    this.div.style.border = "1px solid black";
    this.div.style.borderRadius = "10px";
    this.div.style.padding = "10px";
    this.div.style.overflow = "hidden";
    this.div.style.margin = "5px";
    this.div.style.backgroundColor = "green";

};

function PlaceForm() {
    this.div = document.createElement('div');
    this.div.indent = "textPlaceFormNew";

    this.div.class = "indentPace";
    this.div.style.width = "93%";
    this.div.style.border = "1px solid black";
    this.div.style.borderRadius = "10px";
    this.div.style.padding = "10px";
    this.div.style.overflow = "hidden";
    this.div.style.margin = "5px";
    this.div.style.backgroundColor = "green";

}