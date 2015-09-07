/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.

$(document).ready(function(){
    $("#one").click(function(){
        $("#one").hide();
    });
    $("#two").mouseover(function(){
        $("#two").hide();
    });
});
*/
$(document).ready(function(){
    $("#srt").click(function(){
        $("#bg").text("This will be hide in a moment");
        $("#bg").bind("mouseover",function(){
        $(this).hide(4000);
        });
    });
    $("#stp").click(function(){
        $("#bg").unbind("mouseover");
        $("#bg").text("This will not hide in a moment");
        });
    });
    
    
    

    
