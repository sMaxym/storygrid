<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>Editor | StoryGrid</title>
    
    <link rel="icon" href="icon.png" />

    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/font-awesome.min.css" />
    <link rel="stylesheet" href="css/vex-theme-plain.css" />
    <link rel="stylesheet" href="css/vex.css" />
    
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/editor-interface.css" />
   
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    
  </head>
  <body>
   
    <canvas id="editor"></canvas>
   
    <ul class="options-list">
        <li><button data-btn-add="char" class="option" type="button">Character</button></li>
        <li><button data-btn-add="npc" class="option upper" type="button">npc</button></li>
        <li><button data-btn-add="place" class="option" type="button">Place</button></li>
        <li><button data-btn-add="connection" class="option" type="button">Connection</button></li>
        <li><button data-btn-add="save" class="option" type="button">Save</button></li>
    </ul>
    
    <div class="editing-panel">
        <div class="panel-group">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" href="#collapse1">
                        <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
                    </a>
                </h4>
              </div>
              <div id="collapse1" class="panel-collapse collapse in">
                <ul class="list-group">
                  <li data-btn-edit="edit" data-toggle="tooltip" title="Edit" class="list-group-item"><i class="fa fa-pencil" aria-hidden="true"></i></li>
                  <li data-btn-edit="color" data-toggle="tooltip" title="Change Color"  class="list-group-item"><i class="fa fa-square" aria-hidden="true"></i></li>
                  <li data-btn-edit="image" data-toggle="tooltip" title="Change Image" class="list-group-item"><i class="fa fa-picture-o" aria-hidden="true"></i></li>
                  <li data-btn-edit="remove" data-toggle="tooltip" title="Remove" class="list-group-item"><i class="fa fa-trash" aria-hidden="true"></i></li>
                </ul>
              </div>
            </div>
        </div>
    </div>
   
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.cookie.js"></script>
    <script src="js/fabric.min.js"></script>
    <script src="js/JSON.prune.js"></script>
    <script src="js/vex.combined.min.js"></script>
    <script>vex.defaultOptions.className = 'vex-theme-plain'</script>

    <script src="js/serversender.js"></script>
    <script src="js/storygrid.js"></script>
    <script src="js/controller.js"></script>
    <script src="js/design.js"></script>
  </body>
</html>