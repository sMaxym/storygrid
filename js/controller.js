var editor = new fabric.Canvas('editor');

var gridEntities = [];

var $addButtonChar = $('button[data-btn-add="char"]');
var $addButtonNpc = $('button[data-btn-add="npc"]');
var $addButtonPlace = $('button[data-btn-add="place"]');
var $addButtonConnection = $('button[data-btn-add="connection"]');

window.addEventListener('resize', setEditorFullscreen, false);

$addButtonChar.on('click', function(){
    addEntity(gridEntities, newGridEntity('char', editor));
});
$addButtonNpc.on('click', function(){
    addEntity(gridEntities, newGridEntity('npc', editor));
});
$addButtonPlace.on('click', function(){
    addEntity(gridEntities, newGridEntity('place', editor));
});
$addButtonConnection.on('click', function(){
});


$(document).ready(function(){
    setEditorFullscreen();
});



function setEditorFullscreen(){
    editor.setHeight(window.innerHeight);
    editor.setWidth(window.innerWidth);
    editor.renderAll();
}

function addEntity(objectList, entity){
    objectList.push(entity);
}

function newGridEntity(type, canvas){
    
    var entity;
    
    if(type == 'char'){
        entity = new GridChar(canvas);
    }else if(type == 'npc'){
        entity = new GridNpc(canvas);
    }else if(type == 'place'){
        entity = new GridPlace(canvas);
    }
        
    return entity;
}