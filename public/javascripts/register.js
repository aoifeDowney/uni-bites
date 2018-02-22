$(document).ready( function() {
    /**
    * Event handler for when the user attempts to register
    */
    $("#reg-form").submit(function (event) {
        event.preventDefault();
        // data checking

        var user_name = event.target.inputUsername.value;
        var email = event.target.inputEmail.value;
        var password = event.target.inputPassword.value;
        var confirm_password = event.target.inputConfirmPassword.value;

        var message = "";
        if(user_name.length == 0){
            message += "Please enter a username.<br/>";
        }
    
        if(email.length == 0){
            message += "Please enter an email.<br/>";
        }

        if(password.length == 0){
            message += "Please enter a password.<br/>";
        }

        if(confirm_password.length == 0){
            message += "Please enter the confirmation password.<br/>";
        }

        if(password.length > 0 && confirm_password != password){
            message += "Password and password confirmation do not match.<br/>"
        }

        if(message.length > 0) {
            swal('Errors',
                message,
                'error');

            return;
        }

        $.ajax({
            type: 'POST',
            url: '/users/register',
            dataType: 'json',
            data: {
                'user_name': event.target.inputUsername.value,
                'email': event.target.inputEmail.value,
                'password': event.target.inputPassword.value,
                'confirm_password': event.target.inputConfirmPassword.value
            },
            success: function(token){
                $(location).attr('href', '/feed' );
                // Redirect to a login page
            },
            error: function(errMsg) {
                swal('Oops...',
                    errMsg.responseJSON.body,
                    'error');
            }
        });
    }); 
});