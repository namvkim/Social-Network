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
        add2();
    });
}
get_user();

function add2() {
    var gen = '';
    var time = "";
    var infor = "";
    if (user[id_user - 1].gender == false) {
        gen = "nam";
    } else gen = "nu";

    var curDate = new Date(user[id_user - 1].birthday);
    var day = curDate.getDate();
    var month = curDate.getMonth();
    var year = curDate.getFullYear();
    time += day + "/" + month + "/" + year;


    infor += '<p>' + user[id_user - 1].name + '</p>';
    infor += '<p>' + time + '</p>';
    infor += '<p>' + gen + '</p>';
    document.getElementById("setinfor").innerHTML += infor;
}