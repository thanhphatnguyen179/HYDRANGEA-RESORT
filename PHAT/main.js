
$(document).ready(function(){
    // Xử lí sự kiện mũi tên ở footer chạy ra vào
    $(".js-linkggMap").mouseenter(function(){
        $(".js-goto-icon").css({"left" : "10px"});
    })

    $(".js-linkggMap").mouseout(function(){
        $(".js-goto-icon").css({"left" : "0px"});
    })


    // Xử lí sự kiện ấn vào show list các menu của footer dạng mobile

    
    $(".show1").click(function(){               
        $(".link-item1").toggle(500);
        $(".menu-item1 h3 i").toggleClass("fa-caret-right fa-caret-down");
    });

    $(".show2").click(function(){               
        $(".link-item2").toggle(500);
        $(".menu-item2 h3 i").toggleClass("fa-caret-right fa-caret-down");
    });

    $(".show3").click(function(){               
        $(".link-item3").toggle(500);
        $(".menu-item3 h3 i").toggleClass("fa-caret-right fa-caret-down");
    });

    $(".show4").click(function(){               
        $(".link-item4").toggle(500);
        $(".menu-item4 h3 i").toggleClass("fa-caret-right fa-caret-down");
    });

    $(".show5").click(function(){               
        $(".link-item5").toggle(500);
        $(".menu-item5 h3 i").toggleClass("fa-caret-right fa-caret-down");
    });



        
    








});

