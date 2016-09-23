/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function () {



    var persons = ["Dennis", "Hans", "Lars", "Morten", "Hop hop"];
//using 1 to not use the first div
    $("#container").append("<table class=\"table-striped\">");
    for (var i = 1; i < persons.length; i++) {
        $("#container").append("<tr><td>" + persons[i] + "</td></tr>");

    }
    $("#container").append("</table>");

});

