var editor = new fabric.Canvas('editor');




$(document).ready(function(){
    setEditorFullscreen();
    
    var rect = new fabric.Rect({
        left: 300,
        top: 300,
        fill: 'aqua',
        width: 70,
        height: 70 
    });
    
    editor.add(rect);
    editor.renderAll();
});


window.addEventListener('resize', setEditorFullscreen, false);





function setEditorFullscreen(){
    editor.setHeight(window.innerHeight);
    editor.setWidth(window.innerWidth);
    editor.renderAll();
}