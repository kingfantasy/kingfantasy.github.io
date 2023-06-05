$(document).ready(function(){
    $("#btn").click(function(){

        var uname = $("#username").val();

        if($('#pass').val() == '') {
            alert('ENTER PASSWORD');
        }
        else if ($('#username').val() == '') {
            alert('ENTER USERNAME');
        }
        else
        {
            alert('Welcome' + uname);
            $("#username").val("");
            $("#pass").val("");
        }
    })
})
