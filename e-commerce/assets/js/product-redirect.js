const getId = window.location.href;
var url = new URL(getId);
var idProd = url.searchParams.get("id-prod");
var idTitle = url.searchParams.get("id-title");
var idPrice = url.searchParams.get("id-price");
var idImg = url.searchParams.get("id-img");
var id = idProd;
var id = idTitle;
var id = idPrice;
var id = idImg;



document.getElementById("prod-title").innerHTML = idTitle;
document.getElementById("prod-price").innerHTML = idPrice;
document.getElementById("prod-img").src=idImg;


