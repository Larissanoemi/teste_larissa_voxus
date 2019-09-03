      
        $('input[name=email]').on('blur', function(){
            $('.error_message').css('color', 'blue').hide();
            var email = $(this).val();

            if(email != ''){
                
                $('.box-form ').show();

                if(!isEmail(email)){
                    $('input[name=email]').next('.error_message').show().text('E-mail inválido.');
                }else{
                   
                }
            }else{
                $('.box-form ').hide();
            }
        });