/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {

    $("div").not(".row,.col-sm-4").on("click", function (event) {
        var test = event.target;
        var value = parseInt($(test).text());
        
      
        $(test).text(value*2);
    });
});
