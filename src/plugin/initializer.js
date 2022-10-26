if (!document.getElementById("campaign-app")) {
    var div = document.createElement("div");
    div.id = 'campaign-app';
    document.body.appendChild(div);
  } 


if(!window.campainrabbit){
  window.campainrabbit={
    app_id:1,
    domain:window.location.href
  }
}
  