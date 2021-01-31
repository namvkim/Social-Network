// Api

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

function get_user() {
    callAPI("user", "GET", null).then(res => {
        user = res.data;
        console.log(user);
        show_user();
    });
}

get_user();
// end api


// show user

var tt1 = function() {
    document.getElementById("title").innerHTML = "QUẢN LÝ NGƯỜI DÙNG";
}

tt1();

var tt2 = function() {
    document.getElementById("title").innerHTML = "THỐNG KÊ SỐ LIỆU";
}

var tt3 = function() {
    document.getElementById("title").innerHTML = "QUẢN LÝ ";
}

var show_user = function() {
    document.getElementById("show_user").innerHTML = "";
    for (var i in user) {
        document.getElementById("show_user").innerHTML += `
        <tr>
        <td>${user[i].id}</td>
        <td>${user[i].name}</td>
        <td>${user[i].email}</td>
        <td>${user[i].password}</td>
        <td>${user[i].gender}</td>
        <td>${user[i].birthday}</td>
        <td><button onclick="update_user(${i})" class="btn btn-outline-danger"  data-toggle="modal" data-target="#update_user"><i class="fas fa-cogs"></i></button>
        <button onclick="delete_user(${i})" class = "btn ml-1 btn-outline-warning"><i class="fas  fa-trash"></i></button></td>
        </tr>
        `;
    }
}

var delete_user = function(i) {
    user.splice(i, 1);
    show_user();
}

var add_user = function() {
    console.log(user);
    var add_user = {
        id: String(user.length + 1),
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        avatar: "",
        background: "",
        birthday: document.getElementById("birthday").value,
        gender: document.getElementById("gender").value,
    }
    user.push(add_user);
    show_user();
}


var update_user = function(i) {
    document.getElementById("name_up").value = user[i].name;
    document.getElementById("email_up").value = user[i].email;
    document.getElementById("password_up").value = user[i].password;
    document.getElementById("birthday_up").value = user[i].birthday;
    document.getElementById("gender_up").value = user[i].gender;
    document.getElementById("sub_up").innerHTML = `<button type="button" class="btn btn_add col-sm-12" data-dismiss="modal" onclick="submit_update(${i})">Cập nhật</button>`;
}

var submit_update = function(i) {
    var up_user = {
        id: String(i + 1),
        name: document.getElementById("name_up").value,
        email: document.getElementById("email_up").value,
        password: document.getElementById("password_up").value,
        birthday: document.getElementById("birthday_up").value,
        gender: document.getElementById("gender_up").value,
    }
    user.splice(i, 1, up_user);
    show_user();
}

function Save() {
    localStorage.setItem('listProduct', JSON.stringify(product))
}

function load() {
    product = JSON.parse(localStorage.getItem('listProduct'));
    productAdmin();
}

// if (localStorage.getItem("listProduct") != null) {
//     load();
// } else {
//     localStorage.setItem('listProduct', JSON.stringify(product));
//     load();
// }

// end user