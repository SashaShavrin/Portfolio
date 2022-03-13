// Увеличение скриншота с телефона Crappo
$(document).ready(function() { 
    
    $(".work-three-box-telephone").click(function(){	
          var img = $(this);	
        var src = img.attr('src'); 
        $("body").append("<div class='popup'>"+ 
                         "<div class='popup_bg'></div>"+
                         "<img src='"+src+"' class='popup_img' />"+ 
                         "</div>");
        $(".popup").fadeIn(200); 
        $(".popup_bg").click(function(){	   
            $(".popup").fadeOut(200);
      setTimeout(function() {	
              $(".popup").remove();
            }, 200);
        });
    });
});