// const url_api = "https://600f8aef6c21e1001704eda0.mockapi.io";

// function callAPI(endpoint, method, body) {
//     return axios({
//         method: method,
//         url: `${url_api}/${endpoint}`,
//         data: body,
//     }).catch((err) => {
//         console.log(err);
//     });
// }

// var user;
// var pesonal;
// var email = "Lexie.Keeling@yahoo.com";
// var id_user;

// function get_user() {
//     callAPI("user", "GET", null).then(res => {
//         user = res.data;
//         for (var i in user) {
//             if (user[i].email == email) { id_user = parseInt(i) + 1; break; }
//         };
//         callAPI(`user/${id_user}/pesonal`, "GET", null).then(res => {
//             pesonal = res.data;
//             console.log(pesonal);
//         });
//     });
// }
// get_user();




function add1() {
    setTimeout(()=> document.getElementById("dang").innerHTML += `
    <div class="text-center " >
    <div class="mb-2 py-md-2 " style="width: 500px;">
        <div class="mb-2 text-left" >
            <div class="d-inline-block">
                <img class="rounded-circle" src="https://i.pinimg.com/originals/c2/9a/7d/c29a7d29348b1a3f502803ab9d8355cc.png" style="width:50px">
            </div>
            <div class="d-inline-block">
                <p id="name" style="margin-bottom: 0px;"><b>Sơn Tùng MTP</b> Vừa đăng 1 ảnh mới</p>
            </div>
        </div>
        <div >
            <p class="text-left">Hello mọi người</p>
            <img  src="https://giaitri.vn/wp-content/uploads/2019/12/toc-cua-son-tung-mtp.jpg" style="width:500px">
        </div>
    </div>
</div>
        
    `,2000)
       
  
}
add1();





// function deleteTour(i) {
//     callAPI(`cart/${i}`, "DELETE", null).then(response => {
//         window.location.reload();
//     });
// }
