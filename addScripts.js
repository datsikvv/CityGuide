var body = document.body;

addScript( "city.js" );
addScript( "place.js" );
addScript( "element.js" );
addScript( "constructor.js" );

setTimeout(addScript( "main.js" ), 1000);

function addScript( _src ) {
    var script = document.createElement('script');
    script.src= _src

    return body.appendChild(script);
}
