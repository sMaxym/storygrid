var editor = new fabric.Canvas('editor');


window.addEventListener('resize', setEditorFullscreen, false);

$(document).ready(function(){
    setEditorFullscreen();
    
    let max = new GridPlace(editor);
});






function setEditorFullscreen(){
    editor.setHeight(window.innerHeight);
    editor.setWidth(window.innerWidth);
    editor.renderAll();
}