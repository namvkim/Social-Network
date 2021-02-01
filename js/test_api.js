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

function add2() {
    for (var i in user) {
        document.getElementById("ava").innerHTML += `<img src="${user[i].background}" alt="">`;
    }
}

function add() {

    document.getElementById("ava").innerHTML += `aa`;

}

add();


function deleteTour(i) {
    callAPI(`cart/${i}`, "DELETE", null).then(response => {
        window.location.reload();
    });
}