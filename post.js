        




        function add1() {
             document.getElementById("dang").innerHTML += `
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
                
            `
            
        
        }
        add1();


        // var push_data = [
        //     {
        //         id: id,
        //         userId: userId,
        //         content: document.getElementById("textarea").value,
        //         img: document.getElementById("file-input").value,
        //         id_comment: id_comment,
        //         comment: comment
        //       },
        // ];
       
        // const url_api = "https://600a50de778d1a0017793a0a.mockapi.io/ai/";

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
        //     callAPI("user", "POST", null).then(res => {
        //         user = res.push_data;
        //         for (var i in user) {
        //             if (user[i].email == email) { id_user = parseInt(i) + 1; break; }
        //         };
        //         callAPI(`user/${id_user}/pesonal`, "GET", null).then(res => {
        //             pesonal = res.push_data;
        //             console.log(pesonal);
        //         });
        //     });
        // }
        // get_user();

        // function deleteTour(i) {
        //     callAPI(`cart/${i}`, "DELETE", null).then(response => {
        //         window.location.reload();
        //     });
        // }
