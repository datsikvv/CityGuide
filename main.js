console.clear();

var wrapForm = document.getElementById('wrapForm');
var descriptionForm = document.getElementById('descriptionForm');
var btnAddCity = document.getElementById('btnAddCity');
var btnAddPlace = document.getElementById('btnAddPlace');
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


function createTextField(rows, cols, placeholder){
    var text = document.createElement('textarea');

    text.placeholder = placeholder;
    text.rows = rows;
    text.cols = cols;
    text.style.width = "95%";
    text.style.margin = "3px";

    return text;
};

function createButton(value){
    var btn = document.createElement('input');
    var ident = value;

    btn.id = ident;
    btn.value = value;
    btn.type = "button";
    btn.style.cursor = "pointer";
    btn.style.margin = "5px";
    return btn;
};

function createParagraph(text){
    var p = document.createElement('p');

    p.innerHTML = text;

    return p;
};

function createCityFormNew(){
    var div = document.createElement('div');
    var indent = "textFormNew";
    var btn1 = createButton("Save");
    var btn2 = createButton("Close");
    var txt1 = createTextField("1", "45", "City name");
    var txt2 = createTextField("3", "45", "Notes");

    div.class = indent;
    div.style.width = "93%";
    div.style.border = "1px solid black";
    div.style.borderRadius = "10px";
    div.style.padding = "10px";
    div.style.overflow = "hidden";
    div.style.margin = "5px";
    div.style.backgroundColor = "green";

    div.appendChild(txt1);
    div.appendChild(txt2);

    div.appendChild(btn1);
    div.appendChild(btn2);

    return div;
};

function createCityForm(){
    var div2 = createCityFormNew().cloneNode(true);

    var indent = "textForm";
    var btn3 = createButton("Edit");
    var btn4 = createButton("Delate");
    var p1 = createParagraph("Dnipro");
    var p2 = createParagraph("Lorem ipsum dolor sit amet.");
    // var txt1 = createTextField("1", "45", "City name");

    div2.class = indent;

    div2.appendChild(p1);
    div2.appendChild(p2);

    // div2.replaceChild(p1, txt1);
    // div2.replaceChild(p2, txt2);
    // div2.removeChild(txt1);
    // div2.appendChild(p1);
    // div2.removeChild(txt1);
    // div2.appendChild(p2);

    // div2.replaceChild(btn3, btn1);
    // div2.replaceChild(btn4, btn2);

    div2.appendChild(btn3);
    div2.appendChild(btn4);

    return div2;
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
    var div = document.createElement('div');
    var indent = "textPlaceFormNew";
    var btn1 = createButton("Save");
    var btn2 = createButton("Close");
    var txt1 = createTextField("3", "45", "Notes");
    var select = createPrioritet();


    div.class = indent;
    div.style.width = "93%";
    div.style.border = "1px solid black";
    div.style.borderRadius = "10px";
    div.style.padding = "10px";
    div.style.overflow = "hidden";
    div.style.margin = "5px";
    div.style.backgroundColor = "green";

    div.appendChild(txt1);
    div.appendChild(select);
    div.appendChild(btn1);
    div.appendChild(btn2);

    return div;
};

function createPlaceForm(){
    var div2 = createPlaceFormNew().cloneNode(true);

    var indent = "textPlaceForm";
    var btn3 = createButton("Edit");
    var btn4 = createButton("Delate");
    var p1 = createParagraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua");

    // var txt1 = createTextField("1", "45", "City name");

    div2.class = indent;

    div2.appendChild(p1);

    // div2.replaceChild(p1, txt1);
    // div2.replaceChild(p2, txt2);
    // div2.removeChild(txt1);
    // div2.appendChild(p1);
    // div2.removeChild(txt1);
    // div2.appendChild(p2);

    // div2.replaceChild(btn3, btn1);
    // div2.replaceChild(btn4, btn2);

    div2.appendChild(btn3);
    div2.appendChild(btn4);

    return div2;
};


function addPlaceFormNew() {
    var placeFormNew = createPlaceFormNew();
    btnAddPlace.addEventListener( "click" , function() {descriptionForm.insertBefore(placeFormNew, descriptionForm.children[0])});
};

function closeForm() {

}