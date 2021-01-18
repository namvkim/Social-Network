function validate() {
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var phoneEmail = document.getElementById("phoneEmail").value;
    var pass = document.getElementById("pass").value;
    var cPass = document.getElementById("confirmPass").value;
    var date = document.getElementById("date").value;
    if (firstName == "") {
      alert("Vui lòng điền tên!");
      return false;
    }
    if (lastName == "") {
      alert("Vui lòng điền họ!");
      return false;
    }
    if (phoneEmail == "") {
      alert("Vui lòng điền số điện thoại hoặc Email!");
      return false;
    }
    if (pass == "") {
      alert("Vui lòng điền mật khẩu!");
      return false;
    }
  
    if (cPass == "") {
      alert("Vui lòng xác nhận mật khẩu!");
      return false;
    }
    if (date == "") {
      alert("Vui lòng điền ngày sinh!");
      return false;
    }
    alert("Vui lòng điền thông tin chính xác!")
    return true;
  }