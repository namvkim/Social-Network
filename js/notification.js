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
        callAPI(`user/${id_user}/notification`, "GET", null).then(res => {
            notification = res.data;
            add2();
            add3();
        });
    });
}


get_user();


function add2() {
    for (var i in notification) {
        var n = notification[i].id_notfi - 1;
        document.getElementById("note1").innerHTML += `
        <a class="dropdown-item" href="#">
            <div class="row">
                <div class="col-sm-2">
                    <img class =" mr-auto" src="${user[n].avatar}" alt="" style="height: 40px; width: 40px; border-radius: 50%; border: 2px solid #a1a1a1">
                </div>
                <div class="col-sm-6"><b>${user[n].name}</b>
                    <p>${notification[i].content}</p>
                </div>
                <div class="col-sm-4"><i style="color: cadetblue;">1 giây trước</i></div>
            </div>
        </a>
        `;
    }
}

function add3() {
    for (var i in notification) {
        var n = notification[i].id_notfi - 1;
        document.getElementById("note2").innerHTML += `
            <a class="dropdown-item " href="# ">
                <div class="row ">
                    <div class="col-sm-2 ">
                        <img src="${user[n].avatar}" alt=" " style="height: 40px; width: 40px; border-radius: 50%; border: 2px solid #a1a1a1">
                    </div>
                    <div class="col-sm-6"><b>${user[n].name}</b>
                        <p>Chúc mừng sinh nhật</p>
                    </div>
                    <div class="col-sm-4">
                        <img class="ml-sm-5" src="../img/birthday.png " alt=" " style="height: 40px; width: 40px; ">
                    </div>
                </div>
            </a>
        `;
    }
}



function abc() {
    for (var i in notification)
        document.getElementById("note1").innerHTML += `
            <img src="${user[notification[i].id_notif-1].avatar}" alt="" style="height: 40px; width: 40px;">`;
}
// abc();


// function add2() {
//     for (var i = 5; i > 1; i--) {
//         document.getElementById("note1").innerHTML += `												
//     <a class="dropdown-item" href="#">												
//     <div class="row">												
//     <div class="col-sm-2">												
//     <img src="https://lh4.googleusercontent.com/JJHJ3sNhwZtCphatt7QL3zRaNNy6AsjPgqANlZP4JJQOoozZx-24-2zwfy-dxRz7GhViW7aTpVteOLkIhkrid_u4DaGdsRGoDStY-vzvX4Mb64kYYyXELw_XINV7YVUSe-ib4HY1" alt="" style="height: 40px; width: 40px;">												
//     </div>												
//     <div class="col-sm-4"><b>tunny</b>												
//     <p>Chúc mừng sinh nhật</p>												
//     </div>												
//     <div class="col-sm-6">												
//     <img class="ml-sm-5" src="imgNotificate/birthday.png" alt="" style="height: 40px; width: 40px;">												
//     </div>												
//     </div>												
//     </a>												
//     `;
//     }
// }

// add2();

function deleteTour(i) {
    callAPI(`cart/${i}`, "DELETE", null).then(response => {
        window.location.reload();
    });
}