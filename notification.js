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
var id_note;

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
        if (id_user == notification[i].userId) {
            id_note = notification[i].id_notfi - 1;
            document.getElementById("note1").innerHTML += `
            <div class="row">
                <div class="col-sm-2">
                    <img src="${user[id_note].background}" alt="" style="height: 40px; width: 40px;">
                </div>
                <div class="col-sm-4"><b>${user[id_note].name}</b>
                    <p>${notification[id_note].content}</p>
                </div>
                <div class="col-sm-6"><i style="color: cadetblue;">1 giây trước</i></div>
                </div>
        `;

        }

    }
}

function add() {
    for (var i in pesonal) {
        document.getElementById("ava").innerHTML += `<img src="${pesonal[i].img}" alt="">`;
    }
}




function deleteTour(i) {
    callAPI(`cart/${i}`, "DELETE", null).then(response => {
        window.location.reload();
    });
}