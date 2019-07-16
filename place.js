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
