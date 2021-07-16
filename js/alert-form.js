// alerta do formulario
$(document).ready(function(){
    $('#contato-formulario').on('submit',function(e) {  //Don't foget to change the id form
    $.ajax({
        url:'enviar.php', //===PHP file name====
        data:$(this).serialize(),
        type:'POST',
        success:function(data){
            console.log(data);
            //Success Message == 'Title', 'Message body', Last one leave as it is
            swal("Email enviado!", "Em breve retornaremos sua mensagem.", "success");
        },
        error:function(data){
            //Error Message == 'Title', 'Message body', Last one leave as it is
            swal("Oops...", "Algo deu errado, tente novamente.", "error");
        }
        });
        e.preventDefault(); //This is to Avoid Page Refresh and Fire the Event "Click"
    });
    });
    