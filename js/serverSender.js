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
        data:         {
            'email':         email,
            'password':      password,
            'action':        2,
        },
        dataType:     'html',
        success:      function(data){
            alert(data);
        },
    });

    if(id == '-1') return false;
    else return true;
}