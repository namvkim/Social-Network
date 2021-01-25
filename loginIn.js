function validate() {
    var e = document.forms["myForm"]["email"].value;
    e = document.getElementById("inputEmail").value;
    var p = document.getElementById("inputPassword").value;
    // var c = document.getElementById("check").value;

    if (e == "") {
        alert("Vui lòng điền số điện thoại hoặc Email!");
        return false;
    }
    if (p == "") {
        alert("Vui lòng điền mật khẩu!");
        return false;
    }
    alert("Vui lòng điền thông tin chính xác!")
    return true;
}
var aCong = email.indexOf("@");
var dauCham = email.lastIndexOf(".");
if ((aCong < 1) || (dauCham < aCong + 2) || (dauCham + 2 > email.length)) {
    alert("Email bạn điền không chính xác");
    return false;
}




// function sendEmail() {
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "<sender’s email address>",
//         Password: "<email password>",
//         To: '<recipient’s email address>',
//         From: "<sender’s email address>",
//         Subject: "<email subject>",
//         Body: "<email body>",
//     })
//         .then(function (message) {
//             alert("mail sent successfully")
//         });
// }