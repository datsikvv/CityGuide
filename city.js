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
