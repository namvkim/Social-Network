const url_api = "https://600a50de778d1a0017793a0a.mockapi.io/ai";

function callAPI(endpoint, method, body) {
    return axios({
        method: method,
        url: `${url_api}/${endpoint}`,
        data: body,
    }).catch((err) => {
        console.log(err);
    });
}

var user;
var pesonal;
var email = "Lexie.Keeling@yahoo.com";
var id_user;

function get_user() {
    callAPI("user", "GET", null).then(res => {
        user = res.data;
        for (var i in user) {
            if (user[i].email == email) { id_user = parseInt(i) + 1; break; }
        };
        callAPI(`user/${id_user}/pesonal`, "GET", null).then(res => {
            pesonal = res.data;
            console.log(pesonal);

        });
    });
}
get_user();

var a = Math.floor(Math.random() * (999999 - 100000)) + 100000;
console.log(a);

function sendd() {
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var date = document.getElementById("date").value;
    var pas = document.getElementById('pass').value;
    var cpas = document.getElementById('confirmPass').value;
    var email = document.getElementById('inputEmail').value;

    let User = {
        id: parseInt(user.length + 1),
        name: firstName + lastName,
        email: email,
        password: pas,
        confirmPass: cpas,

    }
    callAPI("user", "POST", User).then((Response) => {})
    console.log(user);
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