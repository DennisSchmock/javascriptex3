/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    var imgArray = $("img");

    shuffle(imgArray);

    // window.console.log(imgArray[1]);
//    for (var i = 0; i < imgArray.length; i++) {
//        window.console.log(i);
//    }
    $('body').on('click', 'img', function () {
        shuffle(imgArray);

        $("#clear").html("");
        for (var i = 0; i < imgArray.length; i++) {
            window.console.log(i);
            var imgsrc = $(imgArray[i]).attr('src');
            $("#clear").append("<div class=\"col-sm-4\"><img class=\"img-circle\" style=\"width: 150px;height: 150\" src='" + imgsrc + "'></div>");
        }
//      var imgsrc = $(this).attr('src');
//      var tempImg = $(imgArray[0]);
//        $(imgArray[0]).replaceWith(this);
//               $(this).append(imgsrc);
//                $("html").append("<div id='image_popup'><img src='"+imgsrc+"'></div>");

    });
    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }
    ;


});



