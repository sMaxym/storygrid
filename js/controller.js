var editor = new fabric.Canvas('editor');


window.addEventListener('resize', setEditorFullscreen, false);

$(document).ready(function(){
    setEditorFullscreen();
    
    var rect = new fabric.Rect({
        left: 300,
        top: 300,
        fill: '#8bcfbd',
        width: 70,
        height: 70 
    });
    
    editor.add(rect);
    editor.renderAll();
});






function setEditorFullscreen(){
    editor.setHeight(window.innerHeight);
    editor.setWidth(window.innerWidth);
    editor.renderAll();
}