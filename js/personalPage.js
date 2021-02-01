const url_api = "https://600a50de778d1a0017793a0a.mockapi.io/ai/";

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
        console.log(user);
        for (var i in user) {
            if (user[i].email == email) { id_user = parseInt(i) + 1; break; }
        };
        callAPI(`user/${id_user}/pesonal`, "GET", null).then(res => {
            pesonal = res.data;
            console.log(pesonal);
            add2();
            add_stt();
        });
    });
}
get_user();

function add2() {
    document.getElementById("pic").innerHTML = `    
  
<div class="sm-3">
<img src="${user[id_user-1].background}" class="img-fluid"
    id="background">
<div class="float-left px-4 align-items-center d-flex" style="position: absolute; top:160px">
    <div class="avatar">
        <img class="user-avatar img-thumbnail  mr-3 mt-sm-3"
            src="${user[id_user-1].avatar}"
            alt="User Avatar" id="avatar">
    </div>
    <div class=" text-white ">
        <h1>${user[id_user-1].name}</h1>
    </div>
</div>
<div class="float-left ">
    <label class="file-input1" ">
        <i class="fa fa-camera"></i>
        <input type="file" class="fileUpload" data-count="0" style="display: none;" id="imgAvatar">
    </label>
    </a>
</div>
<div class="float-right">
    <div>
        <label class="file-input2" ">
            <i class="fa fa-camera"></i>
            <large class="text-white"> Chỉnh sửa hình ảnh</large>
            <input type="file" accept="image/*" data-count="0" style="display: none;"
                onchange="loadFile(event)">
        </label>
    </div>
</div>
</div>
        
`;
}



var loadFile = function(event) {
    var output = document.getElementById('background');
    output.src = URL.createObjectURL(event.target.files[0]);
};

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById('avatar').setAttribute('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

// document.getElementById('imgAvatar').onchange = function() { //set up a common class
//     readURL(this);
// };








var loadFile = function(event) {
    var output = document.getElementById('background');
    output.src = URL.createObjectURL(event.target.files[0]);
};

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById('avatar').setAttribute('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

// document.getElementById('imgAvatar').onchange == function() { //set up a common class
//     readURL(this);
// };


// function add() {
//     for (var i in pesonal) {
//         document.getElementById("ava").innerHTML += `<img src="${pesonal[i].img}" alt="">`;
//     }
// }




function deleteTour(i) {
    callAPI(`cart/${i}`, "DELETE", null).then(response => {
        window.location.reload();
    });
}









function add_stt() {
    for (var i in pesonal) {
        document.getElementById("menu").innerHTML += `
        <div style="border: 1px solid black; border-radius: 6px;" class="p-sm-3 bg-white col-sm-12 mt-md-3 mt-1">
        <div class="d-flex align-items-center">
            <img src="${user[id_user-1].avatar}" width="40px" height="40px" style="border-radius: 20px;" alt="">
            <div class="ml-2">
                <a style="text-decoration: none; color: black; font-weight: bold;" href="#">${user[id_user-1].name}</a>
                <div>19 năm trước</div>
            </div>
        </div>
        <hr>
        <div>
            <div class="col-12 pl-0" id="inf" onclick="change()">
                <p class="pl-2">${pesonal[i].content}</p>
            </div>
            <div id="img" class="mt-2 bg-info" data-toggle="modal" data-target="#exampleModal">
                <img width="100%" src="${pesonal[i].img}" alt="">
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLable1" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal_image">
                            <div id="carouselExampleIndicators" class="carousel slide w-100" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner bg-dark" style="height: 100%;" id="content">
                                    <div class="carousel-item active" id="content">
                                        <img id="img_modal" class="d-block" src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/140181024_120652886576667_8053329220062311513_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_ohc=QbyOCX-JDX4AX9vJZkd&_nc_ht=scontent.fsgn5-2.fna&oh=48ddcfba55fe25bfa3e7c1bd01c71dbd&oe=602FE93C"
                                            alt="First slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img id="img_modal" class="d-block" src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/140181024_120652886576667_8053329220062311513_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_ohc=QbyOCX-JDX4AX9vJZkd&_nc_ht=scontent.fsgn5-2.fna&oh=48ddcfba55fe25bfa3e7c1bd01c71dbd&oe=602FE93C"
                                            alt="Second slide">
                                    </div>
                                    <div class="carousel-item">
                                        <img id="img_modal" class="d-block" src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/140181024_120652886576667_8053329220062311513_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_ohc=QbyOCX-JDX4AX9vJZkd&_nc_ht=scontent.fsgn5-2.fna&oh=48ddcfba55fe25bfa3e7c1bd01c71dbd&oe=602FE93C"
                                            alt="Second slide">
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span aria-hidden="true"><i class="fas fa-caret-left fa-2x"></i></span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span aria-hidden="true"><i class="fas fa-caret-right fa-2x"></i></span>
                                </a>
                            </div>
                        </div>
                        <div class="modal_comment bg-light">
                            <div class="d-flex align-items-center m-md-2">
                                <img src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg" width="40px" height="40px" style="border-radius: 20px;" alt="">
                                <div class="ml-2">
                                    <a style="text-decoration: none; color: black; font-weight: bold;" href="#">Son Nam</a>
                                    <div>20 năm trước</div>
                                </div>
                                <button type="button" class="btn btn-secondary ml-auto" data-dismiss="modal">Exit</button>
                            </div>
                            <div class="d-flex mt-md-5 text-secondary p-md-2" style="text-align: center; border-top: 1px solid rgb(212, 218, 228); border-bottom: 1px solid rgb(212, 218, 228);">
                                <div class="py-md-1 img_like">
                                    <i class="far fa-thumbs-up mr-md-1"></i>Thích
                                </div>
                                <div class="py-md-1 img_like">
                                    <i class="far fa-comment-alt mr-md-1"></i>Bình luận
                                </div>
                                <div class="py-md-1 img_like">
                                    <i class="far fa-share-square mr-md-1"></i>Chia sẽ
                                </div>
                            </div>
                            <div class="d-flex align-items-center m-md-2 mt-md-5">
                                <img src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg" width="40px" height="40px" style="border-radius: 20px;" alt="">
                                <div class="comment_img p-1 bg-light rounded rounded-pill w-100">
                                    <div class="input-group rounded-pill" style="background-color:rgb(240, 242, 245);">
                                        <input type="search" placeholder="Viết bình luận..." aria-describedby="button-addon1" class="form-control rounded-pill border-0" style="background-color: rgb(240, 242, 245);">
                                        <div class="input-group-append">
                                            <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i
                                                class="far fa-paper-plane"></i></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="d-flex mt-md-5 text-secondary p-md-2" style="text-align: center; border-top: 1px solid rgb(212, 218, 228); border-bottom: 1px solid rgb(212, 218, 228);">
                <div class="py-md-1 img_like">
                    <i class="far fa-thumbs-up mr-md-1"></i>Thích
                </div>
                <div class="py-md-1 img_like">
                    <i class="far fa-comment-alt mr-md-1"></i>Bình luận
                </div>
                <div class="py-md-1 img_like">
                    <i class="far fa-share-square mr-md-1"></i>Chia sẽ
                </div>
            </div>
            <div class="d-flex align-items-center m-md-2">
                <img src="${user[id_user].avatar}" width="40px" height="40px" style="border-radius: 20px;" alt="">
                <div class="comment_img p-1 bg-light rounded rounded-pill w-100">
                    <div class="input-group rounded-pill" style="background-color:rgb(240, 242, 245);">
                        <input type="search" placeholder="Viết bình luận..." aria-describedby="button-addon1" class="form-control rounded-pill border-0" style="background-color: rgb(240, 242, 245);">
                        <div class="input-group-append">
                            <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i
                                class="far fa-paper-plane"></i></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex m-md-2">
                <img src="${user[pesonal[i].id_comment-1].avatar}" width="40px" height="40px" style="border-radius: 20px;" alt="">
                <div class="ml-2" style="background-color: rgb(240, 242, 245); padding: 5px; border-radius: 5px;">
                    <a style="text-decoration: none; color: black; font-weight: bold;" href="#">${user[pesonal[i].id_comment-1].name}</a>
                    <div style="word-break: break-word;">${pesonal[i].comment}</div>
                </div>
            </div>
        </div>
    </div>
        `;
    };
}


function deleteTour(i) {
    callAPI(`cart/${i}`, "DELETE", null).then(response => {
        window.location.reload();
    });
}