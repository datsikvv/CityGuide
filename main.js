console.clear();

var wrapForm = document.getElementById('wrapForm');
var descriptionForm = document.getElementById('descriptionForm');
var btnAddCity = document.getElementById('btn_1');
var btnAddPlace = document.getElementById('btn_2');
var btn = document.getElementsByTagName('button')[0];
var cityForm = createCityForm();
var placeForm = createPlaceForm();
var body = document.body;


addCityForm(); // Нажимаем add city, добавляется форма
addPlaceFormNew(); //  Нажимаем add placeb Добавление формы места без клика по кнопке

btnEffect(); // Подсветка кнопки add city



wrapForm.appendChild(cityForm);         // Показываем сохраненную форму Гордов для посещения
descriptionForm.appendChild(placeForm);  // Показываем сохраненную форму Мест для посещения




