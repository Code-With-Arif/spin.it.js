console.log("routerJs is Started...")
const routingElement = document.querySelector('#route');
var Elements = [];
var nowGotFile = "";
//console.log(routingElement);
function unique(list) {
    //if(list.length != 1){
      const unique_list = [...new Set(list)];
      return unique_list;
    //}
}
function getFile(addr, req){
    if(addr){
        const xhttp = new XMLHttpRequest();
        xhttp.open(req, addr, true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4){
                if(this.status == 200){
                    nowFile = this.responseText;
                    console.log("file recieved");
                }
                if(this.status == 404){
                    console.error("🗒File not found")
                }
            }
        }
    }
}
function changeHtml(parent, file){
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {document.getElementById(parent).innerHTML = this.responseText;}
          if (this.status == 404) {
              document.getElementById(parent).innerHTML = "<p style='"+"border:2px solid black;padding:20px;"+"'>🗒Page not found.</p>";
          }
          /* Remove the attribute, and call this function once more: */
          //elmnt.removeAttribute("path");
        }
      }
      xhttp.open("POST", file, true);
      xhttp.send();
    }
}
function routeDom(file){
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {routingElement.innerHTML = this.responseText;}
          if (this.status == 404) {
              routingElement.innerHTML = "<p style='"+"border:2px solid black;padding:20px;"+"'>🗒Page not found.</p>";
          }
          /* Remove the attribute, and call this function once more: */
          //elmnt.removeAttribute("path");
        }
      }
      xhttp.open("POST", file, true);
      xhttp.send();
    }
}
function routeUrl(url){
    console.log("Window is rendering to url: "+window.location.host+url);
    window.history.pushState({"pageTitle":url},"", url);
    console.log("Window is rendered to url: "+window.location.href);
}
function routePage(url, addr){
    routeUrl(url);
    routeDom(addr);
    Elements.push({"Url":url,"Addr":addr});
    //console.log(unique(Elements));
}
function addHtmlOnId(parent, file){
    nowHtml = document.getElementById(parent);
    if(nowHtml){
        nowHtml.innerHTML = nowHtml.innerHTML + file;
    }else{
        console.error("id '"+parent+"' is not defined");
    }
}
function addHtmlOnClass(parent, file){
    nowHtml = document.getElementsByClassName(parent);
    if(nowHtml.length!==0){
        for(let i=0;i<nowHtml.length;i++){
            nowHtml[i].innerHTML = nowHtml[i].innerHTML + file;
        }
    }else{
        console.error("class '"+parent+"' is not defined");
    }
}

window.onpopstate = function(e){
    if(e.state){
        //console.log(e.state.pageTitle);
        var i;
        for(i=0;i<Elements.length;i++){
            if(Elements[i].Url === e.state.pageTitle){
                routeDom(Elements[i].Addr);
            }
        }
    }
};



