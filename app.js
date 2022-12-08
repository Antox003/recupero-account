
//setCookie("data", "25/12/2021", 1);
//console.log(getCookie("data"))

function caricaCookie() {
  let cookie=document.cookie;
  if (/colore/.test(cookie)) {
    let cookieColore = document.cookie.split(';');
    for (const elem of cookieColore) { 
      if (/colore/.test(elem)) {
        cookieColore = document.cookie.split('='); 
      }
    } 
    document.body.style.backgroundColor = cookieColore[1];
  } else {
  
  let colore = prompt('Inserire un colore');
  let data = new Date();
  data.setTime(data.getTime() + (1000* 60 * 60 * 24 * 30));
  let scadenza = 'expires=' + data.toUTCString();
  document.cookie =`colore=${colore}; ${scadenza}; path=/`;
  location.reload();
  }
}
  
  
  function cancellaCookie() {
  
  document.cookie = 'colore=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
  location.reload();
  
  }