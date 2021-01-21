var product = [{
    id: "SP1",
    name: "Áo dài thuê họa tiết 11",
    img: "https://mate.vn/images/cp_blog_post/10/ao-dai-theu.jpg",
    price: 120000
},
{
    id: "SP2",
    name: "Áo dài truyền thống",
    img: "https://g.lnwfile.com/6wt377.jpg",
    price: 200000
},
{
    id: "SP3",
    name: "Áo dài",
    img: "https://mate.vn/images/cp_blog_post/10/ao-dai-theu.jpg",
    price: 150000
},
{
    id: "SP4",
    name: "Áo dài hiện đại",
    img: "https://g.lnwfile.com/6wt377.jpg",
    price: 190000
},
{
    id: "SP5",
    name: "Váy baggy",
    img: "https://mate.vn/images/cp_blog_post/10/ao-dai-theu.jpg",
    price: 500000
},
{
    id: "SP6",
    name: "Váy chấm  bi trắng",
    img: "https://g.lnwfile.com/6wt377.jpg",
    price: 250000
},

{
    id: "SP7",
    name: "Váy xanh",
    img: "https://mate.vn/images/cp_blog_post/10/ao-dai-theu.jpg",
    price: 250000
},
{
    id: "SP8",
    name: "Váy cam",
    img: "https://g.lnwfile.com/6wt377.jpg",
    price: 250000
}
];
var productAdmin = function() {
var listproduct1 = "";
for (var i in product) {
    var data = JSON.parse(JSON.stringify(product[i]))
    var listproduct1 = '<tr>';
    listproduct1 += '<td>' + data.id + '</td>';
    listproduct1 += '<td>' + data.name + '</td>';
    listproduct1 += '<td><img src="' + data.img + '" alt="" style="width: 50px;"></td>';
    listproduct1 += '<td>' + data.price + '</td>';
    listproduct1 += '<td><button onclick="updateProduct(' + i + ')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
    listproduct1 += '<button onclick="deleteProduct(' + i + ')" class = "btn ml-1 btn-outline-warning"><i class="fas  fa-trash"></i></button></td>';
    listproduct1 += '</tr>';
    document.getElementById("product-admin").innerHTML += listproduct1;
}
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

var deleteProduct = function(i) {
product.splice(i, 1);
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

if (localStorage.getItem("listProduct") != null) {
load();
} else {
    localStorage.setItem('listProduct',JSON.stringify(product));
    load();
}