
$(function(){
    $("#submit").click(function(){
        let fname = $("#fname").val();
        let lname = $("#lname").val();
        let email = $("#email").val();
        let password = $("#password").val();
        let cpassword = $("#cpassword").val();
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if(fname == '') {
            alert('Please fill out First name field.');
        }

        if(lname == '') {
            alert('Please fill out Last name field.');
        }

        if(!regex.test(email)) {
            alert('Please match the requested format.');
        }

        if(password === cpassword) {
            alert('true');
        }else {
            alert('Password and Confirm password Not Match!');
        }
    });
});