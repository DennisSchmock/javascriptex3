/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function () {
    $("li").filter(function(i){
        if(i%2===1){
            
           $(this).css("background","gray");
        };
    });
    $("li").each(function(i){
       $(this).css("font-size",(10+i));
    });

});


