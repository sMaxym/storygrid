var entityWidth = 50, 
    entityHeight = 50,
    entityPositionLeft = 500, 
    entityPositionTop = 500;

// Procedure data

function setCanvasSize($canvas, width, height){
    $canvas.css({
        'width':width,
        'height':height,
    });
}

function throwException(){
    vex.dialog.alert('Sorry... something went wrong :(');
}

// ----------------



// OOP data


class GridEntity{

    getEntity(){
        return this.entity;
    }
    
    setEntity(value){
        value.setControlsVisibility({
            mt: false, 
            mb: false, 
            ml: false, 
            mr: false, 
            bl: false,
            br: false, 
            tl: false, 
            tr: false,
            mtr: false, 
        });
        this.entity = value;
    }
    
    getName(){
        return this.name;
    }
    
    setName(value){
        this.name = value;
    }
    
    getDescription(){
        return this.description;
    }
    
    setDescription(value){
        this.description = value;
    }
    
    getColor(){
        return this.color;
    }

    setColor(value){
        this.color = value;
        this.entity.set('fill', this.color);
        this.canvas.renderAll();
    }
    
    
    constructor(canvas){
        this.canvas = canvas;
        this.displayed = false;
        this.entity = new fabric.Rect({
            left: entityPositionLeft,
            top: entityPositionTop,
            fill: '#8bcfbd',
            width: entityWidth,
            height: entityHeight, 
        });
        
        this._newVex(canvas);
        
        
        
        this.entity.on('selected', function(e){});
    }
    
    _newVex(canvas){
        var self = this;
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
                    '<input name="name" type="text" placeholder="Angelina" required />',
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
            callback: function(data){
                if(data.name == ""){
                    throwException();
                }else{
                    self.name = data.name;
                    self.description = data.desc;
                    self.color = data.color;
                    
                    self.entity.set('fill', data.color);
                    
                    self.display(canvas);
                }
            },
        });
    }
    
    display(canvas){
        if(!this.displayed){
            canvas.add(this.entity);
            canvas.renderAll();  
        
            this.displayed = true;
        }
    }
}



class GridChar extends GridEntity{
    constructor(canvas){
        super(canvas);
        
        super.setEntity(new fabric.Rect({
                        width: entityWidth,
                        height: entityHeight,
                        left: entityPositionLeft,
                        top: entityPositionTop,
                        }));
    }
}

class GridNpc extends GridEntity{
    constructor(canvas){
        super(canvas);
        
        super.setEntity(new fabric.Rect({
                        width: entityWidth,
                        height: entityHeight,
                        left: entityPositionLeft,
                        top: entityPositionTop,
                        angle: 45,
                        }));
    }
}

class GridPlace extends GridEntity{
    constructor(canvas){
        super(canvas);
        
        super.setEntity(new fabric.Circle({
                        radius: entityWidth / 2,
                        left: entityPositionLeft,
                        top: entityPositionTop,
                        }));
    }
}



// ----------------
 
