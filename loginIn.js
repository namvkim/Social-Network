function validate() {
    var e = document.forms["myForm"]["email"].value;
    e = document.getElementById("inputEmail").value;
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
    var aCong=email.indexOf("@");
    var dauCham = email.lastIndexOf(".");
    if ((aCong<1) || (dauCham<aCong+2) || (dauCham+2>email.length)) {
    alert("Email bạn điền không chính xác");
    return false;
    }