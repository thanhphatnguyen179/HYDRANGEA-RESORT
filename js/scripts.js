"use strict";

// Thanh Phat 2k3 starts

/*San Pham starts*/
var MainImg = document.getElementsByClassName("MainImg");
var smallimg = document.getElementsByClassName("small-img");

for (let i = 0; i < smallimg.length; i++) {
    smallimg[i].onclick = function (event) {
      // Lấy vị trí của phần tử ảnh nhỏ được nhấp
      var index = Array.from(smallimg).indexOf(event.target);
      
      // Xác định chỉ số của MainImg tương ứng
      var mainImgIndex = Math.floor(index / 4);

      // Kiểm tra nếu mainImgIndex tồn tại
      if (mainImgIndex >= 0 && mainImgIndex < MainImg.length) {
          // Cập nhật ảnh trong MainImg
          MainImg[mainImgIndex].src = event.target.src;
      }
  };
}

/*San Pham ends*/

var roomList = {
  "phong0001": {
    "name": "Phòng Superior",
    "price": 4934772,
    "photo": "images/san-pham/phong1-1.jpg"
  },
  "phong0002": {
    "name": "Phòng Suie Junior",
    "price": 11100622,
    "photo": "images/san-pham/phong2-1.jpg"
  },
  "canho0001": {
    "name": "Larose Master - 2 Phòng Ngủ",
    "price": 23497162,
    "photo": "images/san-pham/canho1-1.jpg"
  },
  "canho0002": {
    "name": "Larose Master - 3 Phòng Ngủ",
    "price": 32535993,
    "photo": "images/san-pham/canho2-1.jpg"
  },
  "bt000001": {
    "name": "Biệt Thự Hydranger - 1 Tầng",
    "price": 46077598,
    "photo": "images/san-pham/bietthu1-1.jpg"
  }
};

function addCart(code) {
  let number = parseInt(document.getElementById(code).value);
  if (number == 0){
    alert("Vui lòng chọn số lượng, cảm ơn");
    return 0;
  }
  if(typeof localStorage[code] === "undefined"){
    window.localStorage.setItem(code, number);
    alert("Đặt hàng thành công. Tổng số lượng đã đặt là: "+number+".");
  }
  else {
    let current = parseInt(window.localStorage.getItem(code));
    if(number + current > 100) {
      window.localStorage.setItem(code, 100);
      alert("Tổng số lượng đặt hàng không thể vượt quá 100. Đặt hàng với số lượng: "+(100-current)+".");
      return;
    }
    else {
      window.localStorage.setItem(code, number+current);
      alert("Đặt hàng thành công. Tổng số lượng đã đặt là: "+(number+current)+".");
    }
  }
}

function removeCart(code){
  if(typeof window.localStorage[code] !== "undefined"){
    window.localStorage.removeItem(code);
    document.getElementById("cartDetail").getElementsByTagName('tbody')[0].innerHTML="";
    showCart();
  }
}

function getDiscountRate(){
  var d = new Date();
  var weekday = d.getDay();
  var totalMins = d.getHours()*60+d.getMinutes();
  if(weekday >= 1 && weekday <= 3 && ((totalMins >= 420 && totalMins <= 660) || (totalMins >= 780 && totalMins <= 1020)))
    return 0.1;
  return 0;
}

function showCart(){

  var tbody = document.getElementById("cartDetail").getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  var formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });
  var totalPreTax = 0;
  for(let i = 0; i < window.localStorage.length; i++){
    if(typeof roomList[localStorage.key(i)] === "undefined")
      continue;
    var key   = window.localStorage.key(i);
    var item  = roomList[key];
    var qty   = localStorage.getItem(key);

    var photo = document.createElement("td");
    photo.innerHTML = "<img src='"+item.photo+"' width='100px'/>";
    photo.style.textAlign = "center";

    var name = document.createElement("td");
    name.innerHTML = item.name;

    var quantity = document.createElement("td");
    quantity.innerHTML = qty;
    quantity.style.textAlign = "center";

    var price = document.createElement("td");
    price.innerHTML = formatter.format(item.price);
    price.style.textAlign = "center";

    var total = document.createElement("td");
    total.innerHTML = formatter.format(item.price * qty);
    total.style.textAlign = "center";
    totalPreTax += item.price * qty;

    var bin = document.createElement("a");
    bin.innerHTML = "<i class='fa fa-trash trash-icon'></i>";
    bin.setAttribute("href", "#");
    bin.setAttribute("data-code", key);
    bin.onclick = function(){ removeCart(this.dataset.code) };

    var rm = document.createElement("td")
    rm.appendChild(bin);
    rm.style.textAlign = "center";

    var row = document.createElement("tr");
    row.appendChild(photo);
    row.appendChild(name);
    row.appendChild(quantity);
    row.appendChild(price);
    row.appendChild(total);
    row.appendChild(rm);
    
    tbody.appendChild(row);
  }
  var discountRate = getDiscountRate()
  var discount = totalPreTax * discountRate;
  var tax = 0.1*(totalPreTax - discount);
  document.getElementById("bill_totalpretax").innerHTML = formatter.format(totalPreTax);
  document.getElementById("bill_discount").innerHTML = discountRate + " x A = "+formatter.format(discount);
  document.getElementById("bill_tax").innerHTML = formatter.format(tax);
  document.getElementById("bill_total").innerHTML = formatter.format(totalPreTax-discount+tax);

}


/*don hang*/


document.addEventListener("DOMContentLoaded", function() {
  var submit = document.querySelector(".submit-cart");

  submit.addEventListener("click", function() {

    var check = document.querySelector("#cartDetail tbody td");
    if (check === null || check === undefined)
      alert("Không thể xác nhận đơn hàng, do không có đơn hàng nào được chọn");
    else {
      alert("Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi");
      localStorage.clear();
      window.location.reload();
    }
  });

});


// Thanh Phat 2k3 ends

// S O N 2k20 start

// Start Slider

var slideIndex = 0;
showDivs(slideIndex);

carousel();

function plusDiv(n) {
  showDivs(slideIndex += n);
}

function carousel() {
    var i;
    var x = document.getElementsByClassName("tc-slide");
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
  var x = document.getElementsByClassName("tc-slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// End Slider

// Start search-box

$(window).scroll(function(){
  var sticky = $('#search-box'),
      scroll = $(window).scrollTop();
  var height = $('.tc-slide').height();

  if (scroll >= height) sticky.addClass('sticky');
  else sticky.removeClass('sticky');
});

// End search-box

// Start Responsive of Navigation

function myFunction() {
  var x = document.getElementById("navil");
  if (x.className === "navi-left") {
    x.className += " responsive";
  } else {
    x.className = "navi-left";
  }
  var y = document.getElementById("navir");
  if (y.className === "navi-right") {
    y.className += " responsive";
  } else {
    y.className = "navi-right";
  }
}

// End Responsive of Navigation

// Start Log-in Sign-out

function login(){
  document.getElementById("login").style.left = "50px";
  document.getElementById("sign-up").style.left = "750px";
  document.getElementById("button-color").style.left = "0";
}

function signup(){
  document.getElementById("login").style.left = "-400px";
  document.getElementById("sign-up").style.left = "50px";
  document.getElementById("button-color").style.left = "140px";
}

function f_dnhap() {
  alert("Đăng nhập thành công!");
}

function f_dki() {
  alert("Đăng ký tài khoản thành công!");
}

// Start Log-in Sign-out

// S O N 2k20 end

// Hien Le( 2k3 gia roi gio tao ki nguc 2k5) =))
// Start Gioi Thieu
$(document).ready(function(){
// ========================JS Footer Start===============================

// Xử lí sự kiện mũi tên ở footer chạy ra vào
    $(".js-linkggMap").hover(function(){
        $(".js-goto-icon").css({"left" : "10px"});
    }, function(){
      $(".js-goto-icon").css({"left" : "0px"});
  });


    // Xử lí sự kiện ấn vào show list các menu của footer dạng mobile

    function showItem(str){
      if(screen.width >= 477) return;
      $(str + " ~ div").toggle(500);
      $(str + " i").toggleClass("fa-caret-right fa-caret-down");
    }

    
    $(".show1" ).click(function(){                      
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


    // Fix lỗi khi show và close danh sách menu footer kéo màn hình rộng ra thì mất các list menu

    $(window).resize(function(){
      var width = $(window).width();
      if(width >= 477){
        $(".link-item").show();
      }
    });


// ========================JS Footer End===============================


    
var text1 = "Với tiêu chí không những để vui mà còn là vì sức khỏe Hydrangea Resort có cả bãi xe đạp cho du khách thuê để chạy vòng quang đường núi ngắm nhìn vẻ đẹp hoang sơ ở nơi đây, ngoài ra còn có cả thuyền sup cho du khách có cơ hội ngăm nhìn hoàng hôn từ hồ nước.";
var text2 = "Với đội ngũ dày dặn kinh nghiệm sẽ mang đến cho mọi người trải nghiệm thoải mái nhất khi đến với resort, tại đây có các dịch vụ như gội đầu dưỡng sinh, massage toàn thân, đặc biệt là có phòng xông hơi giúp du khách hài lòng về resort của chúng tôi.";
var text3 = "Với thiết kế chuẩ Châu Âu sẽ mang lại cho du khách cảm giác sang trọng nhưng không kém phần lãng mạng. Đến với Hydrangea Resort đội ngũ đầu bếp có tay nghề và kinh nghiệm dồi dào sẽ mang lại cho du khách những món ăn có thể nói là Mĩ vị nhân gian.";
var text4 = "Một ly cocktail kết thúc cho một ngày dài là một trải nghiệm hoàn toàn thực tế, ở tại nơi đây có tới 50 món đồ uống khác nhau. Đặt biệt mỗi tối thứ 7 hàng tuần sẽ có live band tại Resort với những ca sĩ có giọng ca say đắm lòng. ";
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
  $("#text").css({"display" : "block", "border" : "0px solid", "background-color" : "#e4f3b6"});
}

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
});
// End Gioi Thieu

// Hoang Phuc starts
    // Lien He starts
function lh_namef(){
    let lh_name = document.getElementById("lh_name").value;
    return lh_name;
}

function lh_emailf(){
    let lh_email = document.getElementById("lh_email").value;
    return lh_email;
}

function lh_contentf(){
    let lh_content = document.getElementById("lh_details").value;
    return lh_content;
}

function lh_gui(){
    if((lh_namef() != "") && (lh_emailf() != "") && (lh_contentf() != ""))
        alert("Câu hỏi của bạn đã được ghi lại!");
}
    // Lien He ends
    // Trang Chu starts
function tc_ngayThue(){
    let ngayThue = document.getElementById("tc_ngayThue").value;
    let toDay = new Date();
    toDay = toDay.getFullYear()+"-"+(toDay.getMonth()+1)+"-"+toDay.getDate();
    if(ngayThue<toDay){
        alert("Không thể đặt phòng ở quá khứ!");
        document.getElementById("tc_ngayThue").value="";
    }
    else
        return ngayThue;
}

function tc_ngayTra(){
    let ngayTra = document.getElementById("tc_ngayTra").value;
    if(tc_ngayThue()>ngayTra){
        alert("Không thể trả phòng trước khi thuê phòng!");
        document.getElementById("tc_ngayTra").value="";
    }
    else
        return ngayTra;
}

function tc_soNguoi(){
    let soNguoi = document.getElementById("tc_soNguoi").value;
        if(soNguoi < 1){
            alert("Hãy nhập lại số người thuê phòng!");
            document.getElementById("tc_soNguoi").value="";
        }
        else
            return soNguoi;
}

function tc_seacrh(){
    if((tc_ngayThue() != "") && (tc_ngayTra() != "") && (tc_soNguoi() != ""))
        window.location="san-pham.html";
}
    // Trang Chu ends
// Hoang Phuc ends
