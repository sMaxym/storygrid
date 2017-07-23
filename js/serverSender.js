function register(email, password){
    $.ajax({
        url:          '/server/registration.php',
        type:         'POST',
        cache:        false,
        data:         {
            'email':         email,
            'password':      password,
        },
        dataType:     'html',
        success:      function(data){
            vexAlert("Thanks for registration. Your accout has been created ;)");
        },
    });
}