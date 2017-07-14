

// Procedure data

function setCanvasSize($canvas, width, height){
    $canvas.css({
        'width':width,
        'height':height,
    });
}

// ----------------









// OOP data


class GridEntity{
    
    constructor(){
        this._newVex();
    }
    
    _newVex(){
        vex.dialog.open({
            message: 'New Element:',
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
                    '<label for="name">Name/Title</label>',
                    '<input name="name" type="text" placeholder="Angelina" />',
                '</div>',
                '<div class="creation-field-wrapper">',
                    '<label for="desc">Description</label>',
                    '<textarea name="desc" cols="50" rows="6" placeholder="She is a girl from Lutsk town and everyday hero..."></textarea>',
                '</div>', 
                '<div class="creation-field-wrapper">',
                    '<label for="color">Border Color</label>',
                    '<input style="margin-left:10px" name="color" type="color" value="#8bcfbd" />',
                '</div>',
                '<div class="creation-field-wrapper">',
                    '<label for="img">Image</label>',
                    '<input name="img" accept="image/jpeg,image/png" type="file" />',
                '</div>' 
            ].join(''),
            buttons: [
                $.extend({}, vex.dialog.buttons.YES, { text: 'Accept' }),
                $.extend({}, vex.dialog.buttons.NO, { text: 'Cancel' })
            ],
            callback: function (data) {
                if (!data) {
                    console.log('Cancelled')
                } else {
                    console.log('Username', data.username, 'Password', data.password)
                }
            }
        });
    }
    
}



// ----------------
 
