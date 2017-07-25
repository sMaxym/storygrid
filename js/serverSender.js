function register(email, password){
    $.ajax({
        url:          "server/registration.php?",
        type:         'POST',
        cache:        false,
        data:         {
            'email':         email,
            'password':      password,
            'action':        1,
        },
        dataType:     'html',
        success:      function(data){
            vexAlert("Thanks for registration. Your account has been created ;)");
        },
    });
}

function logIn(email, password){
    var id;
    $.ajax({
        url:          "server/registration.php?",
        type:         'POST',
        cache:        false,
        async:        false,
        data:         {
            'email':         email,
            'password':      password,
            'action':        2,
        },
        dataType:     'html',
        success:      function(data){
            id = data;
        },
    });

    return id;
}

function logOut(){
    $.ajax({
        url:          "server/registration.php?",
        type:         'POST',
        cache:        false,
        async:        false,
        data:         {
            'action':        3,
        },
        dataType:     'html',
        success:      function(data){

        },
    });
}

function sendGrid(name, canvas, entities, conns){
    $.ajax({
        url:          "server/dbgridsender.php?",
        type:         'POST',
        cache:        false,
        data:         {
            'name':          name,
            'canvas':        canvas,
            'entities':      entities,
            'conns':         conns,
        },
        dataType:     'json',
        success:      function(data){
            
        },
    });
}