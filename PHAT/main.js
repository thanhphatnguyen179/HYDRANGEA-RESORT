
$(document).ready(function(){

    // Xử lí sự kiện mũi tên ở footer chạy ra vào
    $(".js-linkggMap").hover(function(){
        $(".js-goto-icon").css({"left" : "10px"});
    }, function(){
      $(".js-goto-icon").css({"left" : "0px"});
  });


    // Xử lí sự kiện ấn vào show list các menu của footer dạng mobile

    function showItem(str){
      $(str + " ~ div").toggle(500);
      $(str + " i").toggleClass("fa-caret-right fa-caret-down");
    }

    
    $(".show1").click(function(){                      
        showItem(".show1");
    });

    $(".show2").click(function(){                     
      showItem(".show2");
    });

    $(".show3").click(function(){                     
      showItem(".show3");
    });

    $(".show4").click(function(){                     
      showItem(".show4");
    });

    $(".show5").click(function(){                     
      showItem(".show5");
    });


//==================== Header=========================

// Start slide

    var slideIndex = 0;
    showDivs(slideIndex);
    
    carousel();
    
    function plusDiv(n) {
      showDivs(slideIndex += n);
    }
    
    function carousel() {
        var i;
        var x = document.getElementsByClassName("slide");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1}
        x[slideIndex-1].style.display = "block";
        setTimeout(carousel, 3000);
      }
    
    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("slide");
      if (n > x.length) {slideIndex = 1}
      if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      x[slideIndex-1].style.display = "block";  
    }
    
    // End Slider
    
    // Start Form
    
    var a = document.getElementById("login");
    var b = document.getElementById("sign-up");
    var c = document.getElementById("button-color");
    
    function signup(){
      a.style.left = "-400px";
      b.style.left = "50px";
      c.style.left = "140px";
    }
    
    function login(){
      a.style.left = "50px";
      b.style.left = "450px";
      c.style.left = "0";
    }




// Xử lí sự kiện trang giới thiệu


    var text1 = "Đây là mô hình phù hợp với các nhà hàng, quán cafe, khách sạn đơn lẻ… Với mô hình này, khách sạn sẽ không phải mất thời gian trả lời mật khẩu cho khách hàng và khách hàng cũng có thể nhận được các ưu đãi, khuyến mãi ngay trên điện thoại của mình. Ngoài ra, khách sạn còn có thể tăng doanh thu bằng việc quảng cáo cho các thương hiệu khác.";
    var text2 = "Massage là phương thức dùng tay, chân hoặc thiết bị cơ khí để làm căng, dịch chuyển hay rung động các cơ và xương của cơ thể. Các động tác thường dùng trong massage là xoa vuốt, day ấn, nhào nặn, bấm chặt, đấm vỗ, rung bằng bàn tay, ngón tay, khuỷu tay, cẳng tay, bàn chân, đầu gối hoặc thiết bị riêng.";
    var text3 = "Nhà hàng hay tiệm ăn là một cơ sở chuyên kinh doanh về việc nấu nướng và phục dịch các món ăn và đồ uống cho khách hàng đến mua và chủ yếu dùng ngay ở đó. Ngoài ra nhiều nhà hàng cũng có thêm dịch vụ gói món ăn lại để khách tiện \"mang đi\" thay vì dùng bữa ngay tại quán.";
    var text4 = "Quầy bar hay quán bar là một cái bàn hẹp dài hoặc ghế dài được thiết kế để pha chế bia hoặc đồ uống có cồn khác. Ban đầu bàn cao ngang ngực, và một phần thanh thường bằng đồng, chạy theo chiều dài của bàn, ngay trên chiều cao sàn, để khách hàng đặt chân lên, đặt tên cho cái bàn..Phòng tập gym, hay thường được đề biển là fitness center, là nơi có chứa trang thiết bị tập luyện phục vụ cho mục đích tập gym.";
    var text5 = "Bể bơi hay hồ bơi, là một loại công trình xây dựng hoặc một dụng cụ dùng để chứa nước ở dạng tĩnh nhằm phục vụ cho việc bơi lội: Bơi lội, lặn, nhảy cầu, bóng nước, bơi nghệ thuật... v.v. Bể bơi cũng còn phục vụ cho các hoạt động vui chơi, nghỉ dưỡng và du lịch.";
    var text6 = "Ô tô (hay xe hơi hay xe con hoặc car) là loại phương tiện giao thông chạy bằng 4 bánh có chở theo động cơ của chính nó. Tên gọi ô-tô được nhập từ tiếng Pháp (automobile), tên tiếng Pháp xuất phát từ từ auto (tiếng Hy Lạp, nghĩa là tự thân) và từ mobilis (tiếng La Tinh, nghĩa là vận động).";
    var speed = 10;

    var i = 0;
    var check = true;

    function typeWriter(txt) {
      if (i < txt.length && check == true) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        ++i;
        setTimeout(function(){
          typeWriter(txt);
        }, speed);
      }else{
        i = 0;
      }
    }



    function showMessage(txt){
      check = true;
      $("#text").css({"display" : "block", "border" : "1px solid", "background-color" : "var(--header-color)"});
      $("#text").animate(typeWriter(txt));   
    }

    function closeMessage(){
      check = false;
      document.getElementById("text").innerHTML = "";
      $("#text").css({"display" : "block", "border" : "0px solid", "background-color" : "rgba(255, 255, 255, 0.8)"});
    }



    $(".service-1").hover(function(){
      showMessage(text1);
    }, function(){
      closeMessage();
    });


    $(".service-2").hover(function(){
      showMessage(text2);
    }, function(){
      closeMessage();
    });

    $(".service-3").hover(function(){
      showMessage(text3);
    }, function(){
      closeMessage();
    });


    $(".service-4").hover(function(){
      showMessage(text4);
    }, function(){
      closeMessage();
    });


    $(".service-5").hover(function(){
      showMessage(text5);
    }, function(){
      closeMessage();
    });


    $(".service-6").hover(function(){
      showMessage(text6);
    }, function(){
      closeMessage();
    });


});

