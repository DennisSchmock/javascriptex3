/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $("#d1").on("click", function (event) {
        $(this).hide();
    });
    $("#d2").on("click", function () {
        $(this).css("border", "solid black 4px");
    });
    $("#d3").on("click", function () {
        $(this).css("font-size", "200px");
    });


    $("div").on("click", function (event) {
        var test = event.target.valueOf();
        var value = $(test).text();
        $(test).text(2*value);
        
    });

});

