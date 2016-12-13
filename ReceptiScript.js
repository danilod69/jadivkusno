/*jslint browser: true*/
/*global $, jQuery, alert*/
 var numberOfPosts = 100; //IMPORTANT !!!!! IT SHOULD ALWAYS BE ONE BIGGER THAN THE ACTUAL NUMBER BECAUSE BUGGY CODE !!!!!
 var limit = 5;
$(document).ready(function(){
    
    $(".Articles").hover(
        
        function(){
    
        $(this).animate({left:"+=100px"},'fast');
        
        },
        
        function(){
             $(this).animate({left:"-=100px"},'fast');
             
            
        });
        $(".button").hover(
        
        function(){
    
        $(this).css("background-color","#004d39")
        
        },
        
        function(){
             $(this).css("background-color","#00A885")
             
            
        });
       for(x=numberOfPosts;x>4;x--){
        $(".Articles:nth-child("+x.toString()+")").hide();
    }
    
    $(".button").click(function(){
        
          limit+=3;                                             
    for(x=5;x<limit;x++){                                     
        
        $(".Articles:nth-child("+x.toString()+")").show();
    }     
    });
});