var friends = [{
        id: "1",
        name: "",
        img: 'XZ2.png',
        price: 3190000 + '₫'
    },
    {
        id: "SP2",
        name: "SONY XZ1",
        img: 'XZ1.png',
        price: 2190000 + '₫'
    },
    {
        id: "SP3",
        name: "SONY Xperia 1",
        img: 'xperia1.jpg',
        price: 11190000 + '₫'
    }
]

function save() {
    localStorage.setItem('listProAdmin', JSON.stringify(proAdmin))
}

function load() {
    proAdmin = JSON.parse(localStorage.getItem('listProAdmin'))
}

if (localStorage.getItem('listProAdmin') != null) {
    load();
}

function updatePro(i) {
    var d = proAdmin[i];
    document.getElementById("id").value = d.id;
    document.getElementById("named").value = d.name;
    document.getElementById("imgd").value = d.img;
    document.getElementById("priced").value = d.price;
}

function submitUpdate() {
    var id1 = document.getElementById("id").value;
    for (var i in proAdmin)
        if (id1 === proAdmin[i].id) {
            var d = proAdmin[i];
            d.name = document.getElementById("named").value;
            d.img = document.getElementById("imgd").value;
            d.price = document.getElementById("priced").value;
            localStorage.setItem('listProAdmin', JSON.stringify(proAdmin));
            window.location.reload();
            break;
        }
}


function show() {
    var listProduct = '';
    for (i in proAdmin) {
        var data = JSON.parse(JSON.stringify(proAdmin[i]))
        var n = i;
        n++;
        listProduct += "<tr>";
        listProduct += "<td>" + "TD-" + n + "</td>";
        listProduct += "<td>" + data.name + "</td>";
        listProduct += "<td>" + '<img class = "card-img-top" src = "./img/' + data.img + '" style="width: 50px">' + "</td>";
        listProduct += "<td>" + data.price + "</td>";
        listProduct += "<td>" + '<button class = "btn btn-danger" data-toggle = "modal"data-target = "#updateProduct" onclick="updatePro(' + i + ')">';
        listProduct += '<a href="#"> <i class="fa fa-cogs"> </i> </a>' + '</button>';
        listProduct += '<button class = "btn btn-warning" onclick = "deletePro(' + i + ')"> <a href="#"> <i class="fa fa-trash"> </i>  </a> </button>' + "</td>";
        listProduct += "</tr>";
    }
    document.getElementById("product-admin").innerHTML = listProduct;
    save();
}