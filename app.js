Cookies.set("ieat", "true", { expires: 2});

var myCookie= Cookies.get("ieat");
var title =document.querySelector("h1");

if (myCookie) {
title.classList.add("cookie");
}

if (myCookie="false") {
title.classList.remove("cookie");
}