// function myFFunction1() {
// 	document.getElementById("demo1").innerHTML = "Đã bạn bè";
//    }
  
//    function myFFunction2() {
// 	  document.getElementById("demo2").innerHTML = "Đã gửi lời mời";
// 	 }










const url_api = "https://600f8aef6c21e1001704eda0.mockapi.io";

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
var addfriend;
var email = "Lexie.Keeling@yahoo.com";
var id_user;

function get_user() {
    callAPI("user", "GET", null).then(res => {
        user = res.data;
        for (var i in user) {
            if (user[i].email == email) { id_user = parseInt(i) + 1; break; }
        };
        callAPI(`user/${id_user}/addfriend`, "GET", null).then(res => {
            addfriend = res.data;
            console.log(addfriend);
        });
    });
}
get_user();



function add() {
    for (var i in addfriend) {
		// document.getElementById("ava").innerHTML += `<img src="${pesonal[i].img}" alt="">`;
		document.getElementById("ava").innerHTML += `

		<div class="m-4">
		<a href="#">
			<div class="mb-3 a">
					<div style=" width: 100px;"  >
						<img class="rounded-circle" src="${user[addfriend[i].id_add-1].avatar}" style="width:65%">
					</div>
					<div class=" text-bottom">
						<span class="">
							<p style="margin-bottom: 0px;"><b>${user[addfriend[i].id_add-1].name} </b></p>
							<p class="text-right" style="margin-bottom: 0px;">2 phút</p>
						</span> 
 

						<a type="button" id="demo1" onclick="myFFunction1()" class="btn btn-primary btn-sm d-inline-block"> Xác nhận</a>
						<a type="button" class="btn btn-secondary btn-sm d-inline-block" style="margin-top:0px;">Xóa</a>
					</div>
				</div>
		</a>
	</div>`;

    }
}
add();



function deleteTour(i) {
    callAPI(`cart/${i}`, "DELETE", null).then(response => {
        window.location.reload();
    });
}

	
  