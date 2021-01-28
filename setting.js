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
var id_note;


function get_user() {
    callAPI("user", "GET", null).then(res => {
        user = res.data;
        for (var i in user) {
            if (user[i].email == email) { id_user = parseInt(i) + 1; break; }
        };
        // callAPI(`user/${id_user}/notification`, "GET", null).then(res => {
        //     notification = res.data;
        // });
    });
}


get_user();


function add2() {

    document.getElementById("note2").innerHTML += `
        <p>${user[i].name}</p>
        <p></p>
        <p>Male</p>
        `;

}