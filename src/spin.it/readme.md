# Spin.it js

## All Available Functions:

 #### 1) getScript():
 ##### ***Description*** =>
 > Add any Javascript file to your website and use it. Here "file address" is the address of tje Javascript file.
 ><br><br>[I.P : Don't put ".js" extensions here. Every file you put in, ".js" will added to its back. Like "./js/script", So the actual file will be "./js/script.js"]
 ><br><br> (e.g: "getScript(["helper/util"], function(util) {});"  )
 ><br><br>This function is called when scripts /helper/util.js is loaded.
 <br><br>If util.js calls define(), then this function is not fired until util's dependencies have loaded, and the util argument will hold the module value for "helper/util".
 
 ##### ***syntax*** =>   
 > getScript(["file Address"], function(e){});

 #### 2) routePage():
 ##### ***Description*** =>
 > Render any html page in the selected tag. In the syntax "url" is the name you want to display in the url address bar and "file path"  is the address of your html file.
 > Add an "id" to a parent html tag like "div" and set its value to "route", so that, the html file will add into this tag.
 
 ##### ***syntax*** =>
 > routePage(url , file path); 
 
 #### 3) getFile():
 ##### ***Description*** =>
 > Get any file using a simple get or post request. In the syntax, "file path" is the addres of the file you want and "request" is the method (Type "GET" or "POST").
 
 ##### ***syntax*** =>
 > getFile(file path , request); 
 
 #### 4) include():
 ##### ***Description*** =>
 > include Spin It modules. Lists Of modules
 
 ##### ***syntax*** =>
 > include(name of the module);
 
 #### 5) addHtml():
 #####***Description*** =>
 > add HTML tags inside any parent tag.<br>Here "parent's id" is the id of the tag in which you want to push the html and "html" is the html code inside of an inverted comma
 
 ##### ***syntax*** =>
 > addHtml(parent's id, html tags);


