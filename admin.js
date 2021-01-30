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

var addProduct = function() {
    var Product = {
        id: "SP" + parseInt(product.length + 1),
        name: document.getElementById("name").value,
        img: document.getElementById("img").value,
        price: document.getElementById("price").value
    }
    product.push(Product);
    localStorage.setItem('listProduct', JSON.stringify(product));
    window.location.reload();
}


var updateProduct = function(i) {
    var k = product[i];
    document.getElementById("named").value = k.name;
    document.getElementById("imgd").value = k.img;
    document.getElementById("priced").value = k.price;
    document.getElementById("submitUpdate").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate(' + i + ')">Đồng ý</button>';
}

var submitUpdate = function(i) {
    var k = product[i];
    k.name = document.getElementById("named").value;
    k.img = document.getElementById("imgd").value;
    k.price = document.getElementById("priced").value;
    localStorage.setItem('listProduct', JSON.stringify(product));
    window.location.reload();
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