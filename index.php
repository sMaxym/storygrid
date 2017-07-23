<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>StoryGrid</title>

	<link rel="icon" href="icon.png" />
	
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/slick.css" />
    <link rel="stylesheet" href="css/font-awesome.min.css" />
    <link rel="stylesheet" href="css/vex-theme-plain.css" />
    <link rel="stylesheet" href="css/vex.css" />
    
    <link rel="stylesheet" href="css/style.css?version=2" />
    <link rel="stylesheet" href="css/response.css" />
   
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <header id="top">
        <div class="container-fluid data">
            <div class="row">
                <div class="col-lg-4 col-md-3 col-sm-3 col-xs-4">
                    <a href="#"><img class="logo img-responsive" src="img/sg-logo.svg" alt="logo" /></a>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-7">
                    <nav class="menu-wrapper">
                        <a href="#top" class="menu-item">home</a>
                        <a href="#about" class="menu-item">about grids</a>
                        <a href="#" class="menu-item">make grid</a>
                        <a href="#top" onclick="setLoginPos()" id="sign-item" class="menu-item">sign in/up</a>
                        <div class="menu-form">
                            <i class="fa fa-times-circle close" onclick="closeLogin()" aria-hidden="true"></i>
                            <ul class="form-wrapper" id="sign-form">
                                <li><input type="email" placeholder="Email..." id="email" name="txtEmail" /></li>
                                <li><input type="password" placeholder="Password..." id="password" name="txtPassword" /></li>
                                <li><input type="button" id="login-btn" name="btnLogin" value="submit" /></li>
                                <br />
                                <li><div class="open-modal" onclick="openRegistration()" href="#">Registration</div></li>
                            </ul>
                        </div>
                        <a href="#" class="menu-item"><i class="fa fa-flag" aria-hidden="true"></i> uk</a>
                    </nav>
                </div>
                <div class="hidden-lg col-md-1 col-sm-1 col-xs-1" id="toggle">
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="three"></div>
                </div>
            </div>
        </div>
    </header>
    
    <section id="title">
        <div class="container-fluid data">
            <div id="title-overlay">
                <h1>make your grid <br /> let's click this button</h1>
                <div class="underline"></div>
                <div class="btn-grid-wrapper"><a class="btn-grid" href="#">go</a></div>
            </div>
        </div>
    </section>
    
    <section id="about">
        <div class="container data">
            <h2>about grids</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid optio, facere laboriosam dolore? Harum officiis ipsam quos perferendis, quisquam laborum dignissimos quo tenetur sed libero fuga, voluptatum facere nulla sint.</p>
            <div class="underline"></div>
        </div>
    </section>
    
    <section id="example">
        <div class="container-fluid data">
            <div class="row">
                <div class="col-lg-2 col-lg-offset-5 
                            col-md-2 col-md-offset-5 
                            col-sm-2 col-sm-offset-5 
                            col-xs-6 col-xs-offset-3">
                    <h3>examples:</h3>
                </div>
            </div>
            <div class="row">
               <div class="col-lg-1 col-lg-offset-1 
                           col-md-1 col-md-offset-1 
                           col-sm-1 col-sm-offset-1 
                           col-xs-1 col-xs-offset-1">
                   <span id="toLeft"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
               </div>
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8 example-list">
                    <a href="#" class="example-item"><img src="img/grid-example.png" alt="example" /></a>
                    <a href="#" class="example-item"><img src="img/grid-example.png" alt="example" /></a>
                    <a href="#" class="example-item"><img src="img/grid-example.png" alt="example" /></a>
                    <a href="#" class="example-item"><img src="img/grid-example.png" alt="example" /></a>
                </div>
                <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                    <span id="toRight"><i class="fa fa-angle-right" aria-hidden="true"></i></span>    
                </div>
            </div>
        </div>
    </section>
    
    <footer id="footer">
        <div class="container data">
            <div class="row info">
                <div class="info-data">
                    <div class="row" id="copyright">&copy; 2017 StoryGrid</div>
                    <div class="row" id="author">Created by <img src="" alt="framat-logo" /></div>
                    <div class="row" class="links">
                        <a href="#" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="#" target="_blank"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
                        <a href="#" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/vex.combined.min.js"></script>
    <script src="js/serversender.js"></script>
    <script src="js/page-design.js"></script>
    <script>vex.defaultOptions.className = 'vex-theme-plain'</script>

  <script>
      var $signMenu = $('.menu-wrapper .menu-form');
      var $signMenuElement = $('#sign-item');

      function setLoginPos(){
          $signMenu.css({
              'left':$signMenuElement.position().left - 80,
              'top':$signMenuElement.position().top + 45,
          });
      }

      function closeLogin() {
          $signMenu.css({
              'left':$signMenuElement.position().left - 80,
              'top':$signMenuElement.position().top - 9999999,
          });
      }

      function openRegistration(){
          vex.dialog.open({
              message: 'Registration:',
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
                  '.error{',
                  'color: red',
                  '}',
                  '</style>',
                  '<div class="creation-field-wrapper">',
                  '<label for="email">Email :</label>',
                  '<input name="email" type="email" placeholder="Email..." required />',
                  '</div>',
                  '<div class="creation-field-wrapper">',
                  '<label for="passw">Password :</label>',
                  '<input pattern=".{5,}"  name="passw" type="password" placeholder="12345678" required />',
                  '</div>',
                  '<div class="creation-field-wrapper">',
                  '</div>',
                  '</form>',
              ].join(''),
              buttons: [
                  $.extend({}, vex.dialog.buttons.YES, { text: 'Register' }),
                  $.extend({}, vex.dialog.buttons.NO, { text: 'Cancel' }),
              ],
              callback: function(data){
                  if(data){
                      $.ajax({
                          
                      });
                  }
              },
          });
      }

      function vexAlert(message){
          vex.dialog.alert(message);
      }

  </script>
  </body>
</html>