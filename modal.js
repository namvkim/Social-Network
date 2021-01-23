var image = [{
        img: "https: //scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/140181024_120652886576667_8053329220062311513_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_ohc=QbyOCX-JDX4AX9vJZkd&_nc_ht=scontent.fsgn5-2.fna&oh=48ddcfba55fe25bfa3e7c1bd01c71dbd&oe=602FE93C",
    },
    {
        img: "https: //scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/140181024_120652886576667_8053329220062311513_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_ohc=QbyOCX-JDX4AX9vJZkd&_nc_ht=scontent.fsgn5-2.fna&oh=48ddcfba55fe25bfa3e7c1bd01c71dbd&oe=602FE93C",
    },
    {
        img: "https: //scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/140181024_120652886576667_8053329220062311513_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_ohc=QbyOCX-JDX4AX9vJZkd&_nc_ht=scontent.fsgn5-2.fna&oh=48ddcfba55fe25bfa3e7c1bd01c71dbd&oe=602FE93C",
    }
];

// var add = function() {
//     document.getElementById("content").innerHTML += `<div class="carousel-item active bg-info" id="content">
//     <img id="img_modal" class="d-block" src="${image[0].img}"
//         alt="First slide">
// </div>`;
// };

function add() {

    var link = image[0].img;
    document.getElementById("content").innerHTML += `
    <img
    src="${link}"
    width="200px";
    height="200px";
    />
 
  
   
    `;
}