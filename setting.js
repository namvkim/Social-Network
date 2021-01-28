const url_api = "https://600a50de778d1a0017793a0a.mockapi.io/ai";
var notification = [];

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
        console.log(user);
        add2();
        console.log(id_user);
        console.log(user[id_user - 1].name);
        console.log(user[id_user - 1].birthday);

    });
}
get_user();

function add2() {
    var gen = '';
    if (user[id_user - 1].gender == false) {
        gen = "nam";
    } else gen = "nu";
    console.log(user[id_user - 1].name);
    var infor = "";
    infor += '<p>' + user[id_user - 1].name + '</p>';
    infor += '<p>' + user[id_user - 1].birthday + '</p>';
    infor += '<p>' + gen + '</p>';
    document.getElementById("setinfor").innerHTML += infor;
}