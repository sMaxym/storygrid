var $addButtons = $('.options-list');
var $editingPanel = $('.editing-panel');
var $editingPanelToggle = $('.editing-panel .panel-title a');
var $editingButtons = $('.editing-panel .list-group>.list-group-item');

var toggleArrowMode = 180;
var $tooltips = $('[data-toggle="tooltip"]');


$(document).ready(function(){
    initialize();
    initAddButton();
    initEditingPanel();
    
    vex.dialog.open({
        message: 'Enter your username and password:',
        input: [
            '<input name="color" type="color" value="#8bcfbd" />'
        ].join(''),
        buttons: [
            $.extend({}, vex.dialog.buttons.YES, { text: 'Login' }),
            $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
        ],
        callback: function (data) {
            if (!data) {
                console.log('Cancelled')
            } else {
                console.log('Username', data.username, 'Password', data.password)
            }
        }
    });
    
});

function initialize(){
    $editingPanel.draggable();
    $tooltips.tooltip();
}

function initAddButton(){
    var $buttons = $('.options-list>li>.option');
    var $icon = $('<i class="fa fa-plus-circle" aria-hidden="true"></i>');
    
    $buttons.css({
    });
    
    $icon.css({
        'padding-right':'10px',
        'font-size':'20px',
        'color':'#8bcfbd',
    });
    
    $buttons.prepend($icon);
}

function initEditingPanel(){
    $editingPanel.css({
        'position':'absolute',
        'top':'10px',
        'right':'20px',    
    });
}





$addButtons.children().add($editingPanelToggle).add($editingButtons).on('click', function(e){
    $(this).find('i').animate({
        'font-size':'15px',
    }, 100).animate({
        'font-size':'20px',
    }, 100);
});

$editingPanelToggle.on('click', function(e){
    $(this).parent().css({
        '-webkit-transform': 'rotate(' + toggleArrowMode + 'deg)',
        '-moz-transform': 'rotate(' + toggleArrowMode + 'deg)',
        '-ms-transform': 'rotate(' + toggleArrowMode + 'deg)',
        '-o-transform': 'rotate(' + toggleArrowMode + 'deg)',
        'transform': 'rotate(' + toggleArrowMode + 'deg)',
    });
    
    toggleArrowMode = toggleArrowMode == 180 ? 0 : 180;
});




