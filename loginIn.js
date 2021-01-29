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
    var email = "Turner_Skiles10@hotmail.com";
    email.toString();
    var password = parseInt(31032);
    // var email = document.getElementById('inputEmail');
    // var password = parseInt(document.getElementById('inputPassword'));
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
               login();
           });
       });
   }
get_user()
   function login() {
    console.log(user);
       console.log(email);
       console.log(password);
       for (var i in user) {
           var n = user[i].id - 1;
           if (user[n].email === email){
            if( user[n].password == password) {
              // alert("Đăng nhập thành công")
                   //  window.location.href = 'http://127.0.0.1:5500/personalPage.html';  
            }
            else{
              //  alert("Đăng nhập không thành công");
               //window.location.reload();
            }    
        }
       }
   }
    
    
    
    
    
   function deleteTour(i) {
       callAPI(`cart/${i}`, "DELETE", null).then(response => {
           window.location.reload();
       });
   }
    
    
    
    
      
    
    
    
    
    
    
    
    
     