
$(function(){
    $("#submit").click(function(){
        let fname = $("#fname").val();
        let lname = $("#lname").val();
        let email = $("#email").val();
        let password = $("#password").val();
        let cpassword = $("#cpassowrd").val();

        if(password == cpassword) {
            alert('true');
        }else {
            alert('false');
        }
    });
});