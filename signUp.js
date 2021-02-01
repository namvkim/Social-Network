// function validate() {
//     var firstName = document.getElementById("first_name").value;
//     var lastName = document.getElementById("last_name").value;
//     var email = document.forms["myForm"]["email"].value;
//     email = document.getElementById("email").value;
//     var pass = document.getElementById("pass").value;
//     var cPass = document.getElementById("confirmPass").value;
//     var date = document.getElementById("date").value;
//     if (firstName == "") {
//       alert("Vui lòng điền tên!");
//       return false;
//     }
//     if (lastName == "") {
//       alert("Vui lòng điền họ!");
//       return false;
//     }
//     if (email == "") {
//       alert("Vui lòng điền số điện thoại hoặc Email!");
//       return false;
//     }
//     if (pass == "") {
//       alert("Vui lòng điền mật khẩu!");
//       return false;
//     }

//     if (cPass == "") {
//       alert("Vui lòng xác nhận mật khẩu!");
//       return false;
//     }
//     if (date == "") {
//       alert("Vui lòng điền ngày sinh!");
//       return false;
//     }
//     alert("Vui lòng điền thông tin chính xác!")
//     return true;
//     }
//     var aCong=email.indexOf("@");
//     var dauCham = email.lastIndexOf(".");
//     if ((aCong<1) || (dauCham<aCong+2) || (dauCham+2>email.length)) {
//     alert("Email bạn điền không chính xác");
//     return false;
//     }


var a = Math.floor(Math.random() * (999999 - 100000)) + 100000;
console.log(a);
function sendd() {

  
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var date = document.getElementById("date").value;
    var pas = document.getElementById('pass').value;
    var cpas = document.getElementById('confirmPass').value;
    var email = document.getElementById('inputEmail').value;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "nguyenthithuha2911ntth@gmail.com",
        Password: "cvaehfblqsjraowk",
        To: email,
        From: "FA@gmail.com",
        Subject: "Xác nhận đăng ký tài khoản",
        Body: "Mã xác nhận của bạn là: " + a
    }).then(
        message => console.log('data ', message)
    );
    if (pas != cpas) {
        alert("Bạn xác nhận mật khẩu không đúng. Vui lòng điền lại!");
        window.location.reload();
    }
    if (firstName == "" || lastName == "" || date == "") {
        alert("Thông tin bạn điền thiếu. Vui lòng điền lại!");
        window.location.reload();
    }
}
function Next() {
    var vali = parseInt(document.getElementById('vali').value);
    console.log(vali);

    if (vali == a) {
        alert("Bạn đã đăng ký thành công");
         window.location.href = '../personalPage.html';
    }
}

