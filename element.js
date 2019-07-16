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


function addScript( _src ) {
    var script = document.createElement('script');
    script.src= _src

    return body.appendChild(script);
}
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

