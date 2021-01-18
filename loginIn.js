function validate() {
    var e = document.getElementById("inputEmail").value;
    var p = document.getElementById("inputPassword").value;
  
    if(e== "") {
    alert("Vui lòng điền số điện thoại hoặc Email!");
    return false;
    }
    if(p== "") {
    alert("Vui lòng điền mật khẩu!");
    return false;
    }
    alert("Vui lòng điền thông tin chính xác!")
    return true;
    }