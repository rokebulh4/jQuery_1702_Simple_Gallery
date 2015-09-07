$(document).ready(function(){
    $("#mpass").keypress(function(){
        var plength=$(this).val().length;
        if(plength<1){
            $(".malert").text("");
            $(".malert").removeClass("red");
            $(".malert").removeClass("green");
            $(".malert").removeClass("yellow");
        }
        else if(plength<8){
            $(".malert").text("Password must be at least 8 digit!");
            $(".malert").addClass("red");
            $(".malert").removeClass("green");
            $(".malert").removeClass("yellow");
        }
        else if(plength<=11){
            $(".malert").text("Password strength is good!");
            $(".malert").addClass("yellow");
            $(".malert").removeClass("green");
            $(".malert").removeClass("red");
        }
        else{
            $(".malert").text("Password strength is strong !");
            $(".malert").addClass("green");
            $(".malert").removeClass("red");
            $(".malert").removeClass("yellow");
        }
    });
});

$(document).ready(function(){
    $("#three").click(function(){
        $(".three").toggle(3000);
    });
     $("#two").click(function(){
        $(".two").toggle(3000);
    });
     $("#one").click(function(){
        $(".one").toggle(3000);
    });
    $(".thumbnail").mouseenter(function(){
        $(this).fadeTo("slow", .5);
        $(".thumbnail").not(this).fadeTo("1000", 1);
    });
    $("#four").click(function(){
        $(".four").toggle(3000);
    });
});

$(document).ready(function(){
    $("#smpass").keypress(function(){
        var plength=$(this).val().length;
        if(plength<1){
            $(".smalert").text("");
            $(".smalert").removeClass("red");
            $(".smalert").removeClass("green");
            $(".smalert").removeClass("yellow");
        }
        else if(plength<8){
            $(".smalert").text("Password must be at least 8 digit!");
            $(".smalert").addClass("red");
            $(".smalert").removeClass("green");
            $(".smalert").removeClass("yellow");
        }
        else if(plength<=11){
            $(".smalert").text("Password strength is good!");
            $(".smalert").addClass("yellow");
            $(".smalert").removeClass("green");
            $(".smalert").removeClass("red");
        }
        else{
            $(".smalert").text("Password strength is strong !");
            $(".smalert").addClass("green");
            $(".smalert").removeClass("red");
            $(".smalert").removeClass("yellow");
        }
    });
});