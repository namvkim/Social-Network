
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
   var id_user;
   var email = document.getElementById('inputEmail').value;
   var password = document.getElementById('inputPassword').value;
        

   function login() {
       callAPI("user", "GET", null).then(res => {
           user = res.data;
           console.log(user);
           for (var i in user) {
           if (user[i].email === email) {
              //if(user[i].password == password) {
                   return window.location.href = 'http://127.0.0.1:5500/personalPage.html';
               //}
           }
           else {
               alert("không đúng");
              window.location.reload();
               }
       }
       });
   }






