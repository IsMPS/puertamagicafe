$(document).ready(function(){
    $("#btn-register").click(function(){
        let email = $("#email").val().trim();
        let password = $("#pwd").val().trim();
        let confpassword = $("#pwdconf").val().trim();
        let user = $("#user").val().trim();
        let nac = $("#nac").val().trim();
        


        console.log(email)

        if( email != "" && password != "" && nac !="" && user!="" && confpassword!="" && confpassword==password){
            $.ajax({
                url:'https://localhost:44367/User/Register',
                type:'post',
                data:JSON.stringify({username:user,email:email,password:password,fechanac:nac}),
                contentType:"application/json; charset=utf-8",
                success:function(response){
                    
                    window.location = "index.html";
                },
                error:function(){
                    $("#error").fadeIn();
                }
            });
        }
    });
});