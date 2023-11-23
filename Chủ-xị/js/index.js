"use strict";

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
    "photo": "images/sanPham/phong1-1.jpg"
  },
  "phong0002": {
    "name": "Phòng Larose",
    "price": 7991627,
    "photo": "images/sanPham/phong2-1.jpg"
  },
  "phong0003": {
    "name": "Phòng Suie Junior",
    "price": 11100622,
    "photo": "images/sanPham/phong3-1.jpg"
  },
  "canho0001": {
    "name": "Larose Master - 2 Phòng Ngủ",
    "price": 23497162,
    "photo": "images/sanPham/canho1-1.jpg"
  },
  "canho0002": {
    "name": "Larose Master - 3 Phòng Ngủ",
    "price": 32535993,
    "photo": "images/sanPham/canho2-1.jpg"
  },
  "bt000001": {
    "name": "Biệt Thự Hydranger - 1 Tầng",
    "price": 46077598,
    "photo": "images/sanPham/bietthu1-1.jpg"
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
    price.style.textAlign = "right";

    var total = document.createElement("td");
    total.innerHTML = formatter.format(item.price * qty);
    total.style.textAlign = "right";
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

    var check = document.querySelector("#cartDetail tbody");
    if (check === null || check === undefined)
      alert("Không thể xác nhận đơn hàng, do không có đơn hàng nào được chọn");
    else {
      alert("Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi");
      localStorage.clear();
      window.location.reload();
    }
  });

});

