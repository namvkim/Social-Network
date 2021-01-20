// var listFriendd = [
//     {
//         id: "SP1",
//         name: "AB ",
//         img: "https://znews-photo.zadn.vn/w660/Uploaded/kbd_pilk/2020_11_17/ava_1.jpg",
//         price: 120000
//     },
    
//     ];
// var Admin = function() {
// var post1 = "";
// for (var i in listFriendd) {
//     var data = JSON.parse(JSON.stringify(listFriendd[i]))
//     var post1 = '<tr>';
//     post1 += '<td>' + data.id + '</td>';
//     post1 += '<td>' + data.name + '</td>';
//     post1 += '<td><img src="' + data.img + '" alt="" style="width: 50px;"></td>';
//     post1 += '<td><button onclick="updatePhoto(' + i + ')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updatePhoto"><i class="fas fa-cogs"></i></button>';
//     post1 += '<button onclick="deletePost(' + i + ')" class = "btn ml-1 btn-outline-warning"><i class="fas  fa-trash"></i></button></td>';
//     post1 += '</tr>';
//     document.getElementById("product-admin").innerHTML += post1;
//     }
//     }

//     var Post = function() {
//     var List = {
//         id: "SP" + parseInt(listFriendd.length + 1),
//         name: document.getElementById("name").value,
//         img: document.getElementById("img").value,
//         price: document.getElementById("price").value
//     }
//     listFriendd.push(List);
//     localStorage.setItem('listFriends', JSON.stringify(listFriendd));
//     window.location.reload();
//     }
//     var deletePost = function(i) {
//     listFriendd.splice(i, 1);
//     localStorage.setItem('listFriends', JSON.stringify(listFriendd));
//     window.location.reload();
//     }
//     var updateProduct = function(i) {
//     var k = listFriendd[i];
//     //document.getElementById("idd").value = k.id;
//     document.getElementById("named").value = k.name;
//     document.getElementById("imgd").value = k.img;
//     //document.getElementById("idd").setAttribute("disabled", "disabled");
//     document.getElementById("submitUpdate").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate(' + i + ')">Đồng ý</button>';

//     }
//     var submitUpdate = function(i) {
//     var k = listFriendd[i];
//     // k.id = document.getElementById("idd").value;
//     k.name = document.getElementById("named").value;
//     k.img = document.getElementById("imgd").value;
    
//     //  document.getElementById("idd").setAttribute("disabled", "disabled");
//     localStorage.setItem('listFriends', JSON.stringify(listFriendd));
//     window.location.reload();

//     }
//     Product

//     function Save() {
//     localStorage.setItem('listFriends', JSON.stringify(listFriendd))
//     }

//     function load() {
//         listFriendd = JSON.parse(localStorage.getItem('listFriends'));
//         Admin();
//     }
//     if (localStorage.getItem("listFriends") != null) {
//     load();
//     }
    



      
        