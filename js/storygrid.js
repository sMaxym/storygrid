var editOptions = {
    Edit: false,
    Color: false,
    Image: false,
    Remove: false,
}

var lineCreation = {    
    LineSelectable: 0,
    EntityFrom: null,
    EntityTo: null,
};

var entitySettings = {
    Width: 50, 
    Height: 50,
    PositionLeft: 500, 
    PositionTop: 500,
    TextSize: 15,
};




var cfg = {
    Containers: {
        Entity: null,
        Connections: null,
    }
}

// Procedure data


function initStorygrid(entityContainer, connectionContainer){
    cfg.Containers.Entity = entityContainer;
    cfg.Containers.Connections = connectionContainer;
}


function setCanvasSize($canvas, width, height){
    $canvas.css({
        'width':width,
        'height':height,
    });
}

function throwException(){
    vex.dialog.alert('Sorry... something went wrong :(');
}

function hideSelectionTools(object){
    object.setControlsVisibility({
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
}

function setObjectName(object, text){
    var dataText = new fabric.Text(text, {
        fontFamily: 'Lato',
        fontSize: entitySettings.TextSize,
        originX: 'center',
        originY: 'center',
        left: entitySettings.PositionLeft + 25,
        top: entitySettings.PositionTop + 80,
    });
    
    var group = new fabric.Group([object, dataText],{
        
    });
    
    return group;
}

function addConnection(canvas){
    return new GridConnection(canvas, lineCreation.EntityFrom, lineCreation.EntityTo);
}

// ----------------



// OOP data


class GridEntity{

    getEntity(){
        return this.entity;
    }
    
    setEntity(value){
        this.entity = setObjectName(value, 'FRAMAT');
        hideSelectionTools(this.entity);
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
    
    setConnection(id, value){
        if(id == 0){
            this.connections[id] = value; 
        }else if(id == 1){
            this.connections[id] = value;
        }else if(id == 2){
            this.connections[id] = value;
        }else{
            this.connections[id] = value;
        }
    }
    
    getConnection(id){
        return this.connections[id];
    }
    
    
    
    constructor(canvas){
        this.canvas = canvas;
        this.displayed = false;
        this.entity = new fabric.Rect({
            left: entitySettings.PositionLeft,
            top: entitySettings.PositionTop,
            fill: '#8bcfbd',
            width: entitySettings.Width,
            height: entitySettings.Height, 
        });
        this.connections = [null,null,null,null];
        
        this._newVex(canvas);
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
                $.extend({}, vex.dialog.buttons.NO, { text: 'Cancel' }),
            ],
            callback: function(data){
                
                if(data){
                    if(data.name == ""){
                        throwException();
                    }else{
                        self.name = data.name;
                        self.description = data.desc;
                        self.color = data.color;

                        self.entity.set('fill', data.color);
                        self.entity.item(1).set({
                            text:self.name,
                            fill:self.color,
                        });

                        self.display(canvas);
                    }
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
        
        var self = this;
        
        super.setEntity(new fabric.Rect({
                        width: entitySettings.Width,
                        height: entitySettings.Height,
                        left: entitySettings.PositionLeft,
                        top: entitySettings.PositionTop,
                        }));
        
        this.entity.on('selected', function(e){  
            
            //Line Creation
            if(lineCreation.LineSelectable != 0){
                this.item(0).set({ strokeWidth: 5, stroke: 'rgba(255,0,0,0.3)' });
                if(lineCreation.LineSelectable == 1){
                    lineCreation.EntityTo = self;
                    cfg.Containers.Connections.push(addConnection(this.canvas));
                    lineCreation.EntityFrom.entity.item(0).set({ strokeWidth: 0, stroke: 'rgba(255,0,0,0.3)' });
                    lineCreation.EntityTo.entity.item(0).set({ strokeWidth: 0, stroke: 'rgba(255,0,0,0.3)' });
                }else if(lineCreation.LineSelectable == 2){
                    lineCreation.EntityFrom = self;
                }
                
                lineCreation.LineSelectable -= 1;
            }
            
        });
    }
}

class GridNpc extends GridEntity{
    constructor(canvas){
        super(canvas);
        
        var self = this;
        
        super.setEntity(new fabric.Rect({
                        width: entitySettings.Width,
                        height: entitySettings.Height,
                        originX: 'left',
                        originY: 'center',
                        left: entitySettings.PositionLeft,
                        top: entitySettings.PositionTop,
                        angle: 45,
                        }));
        
        this.entity.on('selected', function(e){  
            if(lineCreation.LineSelectable != 0){
                this.item(0).set({ strokeWidth: 5, stroke: 'rgba(255,0,0,0.3)' });
                if(lineCreation.LineSelectable == 1){
                    lineCreation.EntityTo = self;
                    cfg.Containers.Connections.push(addConnection(this.canvas));
                    lineCreation.EntityFrom.entity.item(0).set({ strokeWidth: 0, stroke: 'rgba(255,0,0,0.3)' });
                    lineCreation.EntityTo.entity.item(0).set({ strokeWidth: 0, stroke: 'rgba(255,0,0,0.3)' });
                }else if(lineCreation.LineSelectable == 2){
                    lineCreation.EntityFrom = self;
                }
                
                lineCreation.LineSelectable -= 1;
            }
        });
    }
}

class GridPlace extends GridEntity{
    constructor(canvas){
        super(canvas);
        
        var self = this;
        
        super.setEntity(new fabric.Circle({
                        radius: entitySettings.Width / 2,
                        left: entitySettings.PositionLeft,
                        top: entitySettings.PositionTop,
                        }));
        
        this.entity.on('selected', function(e){  
            if(lineCreation.LineSelectable != 0){
                this.item(0).set({ strokeWidth: 5, stroke: 'rgba(255,0,0,0.3)' });
                if(lineCreation.LineSelectable == 1){
                    lineCreation.EntityTo = self;
                    cfg.Containers.Connections.push(addConnection(this.canvas));
                    lineCreation.EntityFrom.entity.item(0).set({ strokeWidth: 0, stroke: 'rgba(255,0,0,0.3)' });
                    lineCreation.EntityTo.entity.item(0).set({ strokeWidth: 0, stroke: 'rgba(255,0,0,0.3)' });
                }else if(lineCreation.LineSelectable == 2){
                    lineCreation.EntityFrom = self;
                }
                
                lineCreation.LineSelectable -= 1;
            }
        });
    }
}



class GridConnection{
    constructor(canvas, entityFrom, entityTo){
        var self = this;
        this.canvas = canvas;
        this.from = entityFrom;
        this.to = entityTo;
        this.coords = [
            this.from.entity.left + entitySettings.Width / 2,
            this.from.entity.top + entitySettings.Height / 2,
            this.to.entity.left + entitySettings.Width / 2,
            this.to.entity.top + entitySettings.Height / 2,
        ];
        
        this.entity = new fabric.Line(this.coords, {
            fill: this.from.color,    
            stroke: this.from.color,
            strokeWidth: 2,
            selectable: false,
        });
        
        for(var i = 0; i < 4; ++i){
            if(!this.from.connections[i]){
                this.from.setConnection(i, this.entity);
            }
        }
        
        for(var i = 0; i < 4; ++i){
            if(!this.to.connections[i]){
                this.to.setConnection(i, this.entity);
            }
        }
        
        this.from.entity.on('moving', function(e){
            if(self.from != null && self.to != null){
                self.entity.set({'x1': self.from.entity.left + entitySettings.Width / 2}); 
                self.entity.set({'y1': self.from.entity.top + entitySettings.Height / 2});
                
                self.canvas.renderAll();   
            }
        });
        
        this.to.entity.on('moving', function(e){
            if(self.from != null && self.to != null){
                self.entity.set({'x2': self.to.entity.left + entitySettings.Width / 2}); 
                self.entity.set({'y2': self.to.entity.top + entitySettings.Height / 2});
                
                self.canvas.renderAll();
            }
        });
        
        
        
        canvas.add(this.entity);
        canvas.sendToBack(this.entity);
        canvas.renderAll();
    }
}







// ----------------
 
