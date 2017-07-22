var editor = new fabric.Canvas('editor');

var gridEntities = [];
var gridLines = [];

var $addButtonChar = $('button[data-btn-add="char"]');
var $addButtonNpc = $('button[data-btn-add="npc"]');
var $addButtonPlace = $('button[data-btn-add="place"]');
var $addButtonConnection = $('button[data-btn-add="connection"]');

var $editingPanel = $('.editing-panel');
var $editButtonEdit = $('[data-btn-edit="edit"]');
var $editButtonColor = $('[data-btn-edit="color"]');
var $editButtonImage = $('[data-btn-edit="image"]');
var $editButtonRemove = $('[data-btn-edit="remove"]');

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
    lineCreation.LineSelectable = 2;
});


$editButtonEdit.on('click', function(){
    
});
$editButtonColor.on('click', function(){
    vex.dialog.open({
        message: 'Pick a color:',
        input: [
            '<style>',
                '.creation-field-wrapper {',
                    'margin: 1em 0;',
                '}',
                '.creation-field-wrapper > label {',
                    'display: inline-block;',
                    'margin-bottom: .2em;',
                '}',
                '.creation-field-wrapper > textarea {',
                    'resize: none',
                '}',
            '</style>',
                
            '<div class="creation-field-wrapper">',
                '<label for="color">Border Color</label>',
                '<input style="margin-left:10px" name="color" type="color" value="#8bcfbd" />',
            '</div>',
        ].join(''),
        buttons: [
            $.extend({}, vex.dialog.buttons.YES, { text: 'Change' }),
        ],
        callback: function(data){
            if(data){
                var activeObject = editor.getActiveObject(),
                    activeGroup = editor.getActiveGroup();
                if (activeObject) {
                    activeObject.item(0).set('fill', data.color);
                    activeObject.item(1).set('fill', data.color);
                }
                else if (activeGroup) {
                    var objectsInGroup = activeGroup.getObjects();
                    editor.discardActiveGroup();
                    objectsInGroup.forEach(function(object) {
                        object.item(0).set('fill', data.color);
                        object.item(1).set('fill', data.color);
                    });
                }
                editor.renderAll();
            }
        },
    });
});
$editButtonRemove.on('click', function(){
    var activeObject = editor.getActiveObject(),
    activeGroup = editor.getActiveGroup();
    if (activeObject) {
        editor.remove(activeObject);
        delete activeObject;
    }
    else if (activeGroup) {
        if (confirm('Are you sure?')) {
            var objectsInGroup = activeGroup.getObjects();
            editor.discardActiveGroup();
            objectsInGroup.forEach(function(object) {
                editor.remove(object);
                delete object;
            });
        }
    }
    
    removeUndisplayed(gridEntities);
    
    var removingLines = getUnsignedConns(gridLines);
    removingLines.forEach(function(item, index, object){
        editor.remove(item.entity);
        item.from = null;
        item.to = null;
        
        delete item.entity;
    });
});



editor.on("object:selected", function(e){
    $editButtonColor.children().css({'color':e.target.getFill(),});
});

editor.on("selection:cleared", function(){ 
    $editButtonColor.children().css({'color':'#717171',});
});


$(document).ready(function(){
    setEditorFullscreen();
    cfg.Containers.Entity = gridEntities;
    cfg.Containers.Connections = gridLines;
});



function setEditorFullscreen(){
    editor.setHeight(window.innerHeight);
    editor.setWidth(window.innerWidth);
    editor.renderAll();
}

function addEntity(objectList, entity){
    objectList.push(entity);
    removeUndisplayed(objectList);
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

function removeUndisplayed(container){
    container.forEach(function(item, index, object){
        if(!item.entity.isOnScreen()){
            object.splice(index, 1);
        }
    });
}

function getUnsignedConns(container){
    var unsigned = [];
    container.forEach(function(item, index, object){
        if(!item.from.entity.isOnScreen() || !item.to.entity.isOnScreen()){
            unsigned.push(object[index]);
            object.splice(index, 1);
        }
    });
    
    return unsigned;
}