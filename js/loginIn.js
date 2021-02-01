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

var users;

//     var email = "Turner_Skiles10@hotmail.com";
//   //  email.toString();
//     var password = parseInt(31032);

// var res = email.toString();
var id_user;
var password;
var email;

function get_user() {
    callAPI("user", "GET", null).then(res => {
        console.log("usser data", res.data)
        users = res.data;


    });
}
get_user()

function login() {
    password = parseInt(document.getElementById('inputPassword').value);
    email = document.getElementById('inputEmail').value;
    console.log("login.....")

    users.forEach(user => {
        if (user.email === email && user.password === password) {
            alert("Đăng nhập thành công");
            window.location.href = "../html/personalPage.html";
            brack();
        } else {
            window.location.reload();
        }

    });

}