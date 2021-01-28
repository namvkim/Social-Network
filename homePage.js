$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

function change() {
    document.getElementById("inf").style.overflow = "visible";
    document.getElementById("inf").style.webkitLineClamp = "unset";
}

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

function add() {
    // for (var i in pesonal) {
    document.getElementById("ava").innerHTML += `
        <p>aaaaaa</p>
        `;
}
// }

function add2() {
    for (var i = 3; i > 0; i--) {
        document.getElementById("add").innerHTML += `
        <div style="border: 1px solid black; border-radius: 6px;" class="p-sm-3 bg-white col-sm-12 mt-md-3 mt-1">
        <div class="d-flex align-items-center">
            <img src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg" width="40px" height="40px" style="border-radius: 20px;" alt="">
            <div class="ml-2">
                <a style="text-decoration: none; color: black; font-weight: bold;" href="#">Son Nam</a>
                <div>20 năm trước</div>
            </div>
        </div>
        <hr>
        <div>
            <div class="col-12 pl-0" id="inf" data-toggle="collapse" data-target="#full">
                Năm 2015, Yoojung, Doyeon, Lua, Lucy, Elly và Yejin xuất hiện trong web drama "To be continued" của tiền bối cùng công ty Astro. Cuối năm 2015, đầu năm 2016, các thành viên Elly, Yoojung, Doyeon, Sei và Yejin được biết đến thông qua chương trình Produce
                101 mùa 1. Trong đó Yoojung và Doyeon nằm trong top 11 chung cuộc và được ra mắt với nhóm nhạc nữ dự án I.O.I.[2] Tháng 7 năm 2016, Yoojung xuất hiện trong MV "Breathless" của Astro và tháng 11 cùng năm, Sei góp mặt trong MV "Confession" của
                Astro. Cũng trong năm 2016, Yoojung và Doyeon cùng góp mặt trong Dramma cùng với tiền bối ASTRO trong Idol Fever của công ty chủ quản Fantagio gồm 10 tập đã hoàn thành. Trước khi Weki Meki ra mắt, thành viên Chu Ye-jin rời khỏi dự án và được
                thay thế bởi Ji Su Yeon. Vào ngày 6 tháng 7 năm 2017, Fantagio tiết lộ nhóm nhạc nữ mới của họ sẽ được gọi là Weki Meki. 2017-2018: Ra mắt với WEME, Lucky, và Kiss, Kicks Vào ngày 23 tháng 7 năm 2017, Fantagio đã tung ra ảnh teaser cá nhân
                của các thành viên. Weki Meki đã phát hành mini-album WEME vào ngày 8 tháng 8 năm 2017 với bài hát chủ đề "I Don't Like Your Girlfriend" do thành viên Yoojung tham gia viết lời.[3][4] Vào ngày 21 tháng 2 năm 2018, Weki Meki phát hành EP thứ
                hai có tựa đề Lucky. Album có tổng cộng sáu bài hát bao gồm đĩa đơn chính "La La La" và "Butterfly", bài sau là bản làm lại từ OST từ bộ phim Take Off năm 2009 mà nhóm phát hành để ủng hộ Thế vận hội mùa đông 2018. Weki Meki phát hành single
                album đầu tiên Kiss, Kicks vào ngày 11 tháng 10 năm 2018. Album có tổng cộng ba bài hát bao gồm đĩa đơn chính "Crush" với các phần rap trong album do thành viên Yoo-jung viết. 2019: Lock End LOL và Week End LOL Nhóm đã phát hành album đơn
                thứ hai Lock End LOL vào ngày 14 tháng 5 năm 2019, bao gồm cả đĩa đơn chính "Picky Picky". Vào ngày 8 tháng 8 năm 2019, nhóm đã phát hành Week End LOL, một phiên bản album tái bản trước của họ, có đĩa đơn chính "Tiki-Taka (99%)" cùng với cả
                ba bài hát từ album trước.
            </div>
            <div id="full" class="collapse">
                askjfdkjsd
            </div>
            <div id="img" class="mt-2 bg-info" data-toggle="modal" data-target="#exampleModal">
                <img width="100%" src="https://vcdn1-vnexpress.vnecdn.net/2019/09/29/2-1569755302.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=eIlnCLgSWVtioKgU4I4VzA" alt="">
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
    </div>
        `;
    };
}

add2();

function deleteTour(i) {
    callAPI(`cart/${i}`, "DELETE", null).then(response => {
        window.location.reload();
    });
}