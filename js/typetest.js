/*
typetest.js
11.11.2014 - cmd.
*/
var overlay_css = "background-color: #fff;padding: 1em;box-shadow: 0 1px 12px #666;width: 210px;word-break: break-all;border-radius: 2px;";
var overlay = "<div style='"+ overlay_css +"'><b>typetest</b><br><input style='padding:4px;border:1px solid #d3d3d3;' type='text' id='font_url' placeholder='webfont url'> <button type='button' onclick='tt_loadFont()'>Load</button><div><code id='typetest_url'></code></div></div>";
var typetest_init = false;
var tt_visible = false;
function typetest(){
  if(typetest_init){
    tt_toggle();
  }
  else{
    var wrapper = document.createElement('div');
    wrapper.id = "typetest_wrapper";
    wrapper.style.position = "fixed";
    wrapper.style.top = 0;
    wrapper.style.right = 0;
    wrapper.style.zIndex = 999999;
    wrapper.style.fontFamily = "Lucida Bright,Georgia,serif";
    wrapper.innerHTML = overlay;
    document.body.insertBefore(wrapper, document.body.firstChild);
    var code = document.getElementById("typetest_url");
    code.innerHTML = "Font URL: none";
    typetest_init = true;
    tt_visible = true;
  }
}
function tt_toggle(){
  if(tt_visible){
    var wrapper = document.getElementById("typetest_wrapper");
    wrapper.style.display = 'none';
    tt_visible = false;
  }
  else{
    var wrapper = document.getElementById("typetest_wrapper");
    wrapper.style.display = '';
    tt_visible = true;
  }
}
function tt_loadFont(){
  var font_url = document.getElementById("font_url").value.trim();
  // reset text box
  document.getElementById("font_url").value = "";
  var new_link = document.createElement("link");
  new_link.href = font_url;
  new_link.id = "new_link";
  new_link.rel = "stylesheet";

  //Get probable font name
  var fontName = font_url.substr(font_url.indexOf('=')+1);
  fontName = fontName.replace(/\+/g, ' ');

  var new_style = document.createElement("style");
  new_style.id = "new_style";
  var injectClass = "body{font-family: '"+ fontName +"'}";
  new_style.innerHTML = injectClass;

  // Clean up
  var old_link = document.getElementById('new_link');
  var old_style = document.getElementById('new_style');

  if(old_link || old_style){
    old_link.outerHTML = "";
    old_style.outerHTML = "";
    delete old_link;
    delete old_style;
  }
  // Insert into DOM
  document.head.insertBefore(new_link, document.head.lastChild);
  document.head.insertBefore(new_style, document.head.lastChild);
  if(!font_url){
    font_url = "Font URL: none";
  }
  var typetest_url = document.getElementById('typetest_url');
  typetest_url.innerHTML = font_url;
}