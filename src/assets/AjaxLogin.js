/*
ajax handel
 */
!function(e,t){"use strict";"function"==typeof define&&define.amd?define("ajax",t):"object"==typeof exports?exports=module.exports=t():e.ajax=t()}(this,function(){"use strict";function e(e){var r=["get","post","put","delete"];return e=e||{},e.baseUrl=e.baseUrl||"",e.method&&e.url?n(e.method,e.baseUrl+e.url,t(e.data),e):r.reduce(function(r,u){return r[u]=function(r,o){return n(u,e.baseUrl+r,t(o),e)},r},{})}function t(e){return e||null}function n(e,t,n,u){var c=["then","catch","always"],s=c.reduce(function(e,t){return e[t]=function(n){return e[t]=n,e},e},{}),i=new XMLHttpRequest;return i.open(e,t,!0),r(i,u.headers),i.addEventListener("readystatechange",o(s,i),!1),i.send(a(n)),s.abort=function(){return i.abort()},s}function r(e,t){t=t||{},u(t)||(t["Content-Type"]="application/x-www-form-urlencoded"),Object.keys(t).forEach(function(n){t[n]&&e.setRequestHeader(n,t[n])})}function u(e){return Object.keys(e).some(function(e){return"content-type"===e.toLowerCase()})}function o(e,t){return function n(){t.readyState===t.DONE&&(t.removeEventListener("readystatechange",n,!1),e.always.apply(e,c(t)),t.status>=200&&t.status<300?e.then.apply(e,c(t)):e["catch"].apply(e,c(t)))}}function c(e){var t;try{t=JSON.parse(e.responseText)}catch(n){t=e.responseText}return[t,e]}function a(e){return s(e)?i(e):e}function s(e){return"[object Object]"===Object.prototype.toString.call(e)}function i(e){return Object.keys(e).reduce(function(t,n){var r=t?t+"&":"";return r+f(n)+"="+f(e[n])},"")}function f(e){return encodeURIComponent(e)}return e});
/*
    toast handel
 */
"use strict";var iqwerty=iqwerty||{};iqwerty.toast=function(){function t(o,r,i){if(null!==e())t.prototype.toastQueue.push({text:o,options:r,transitions:i});else{t.prototype.Transitions=i||n;var a=r||{};a=t.prototype.mergeOptions(t.prototype.DEFAULT_SETTINGS,a),t.prototype.show(o,a),a=null}}function e(){return i}function o(t){i=t}var r=400,n={SHOW:{"-webkit-transition":"opacity "+r+"ms, -webkit-transform "+r+"ms",transition:"opacity "+r+"ms, transform "+r+"ms",opacity:"1","-webkit-transform":"translateY(-100%) translateZ(0)",transform:"translateY(-100%) translateZ(0)"},HIDE:{opacity:"0","-webkit-transform":"translateY(150%) translateZ(0)",transform:"translateY(150%) translateZ(0)"}},i=null;return t.prototype.DEFAULT_SETTINGS={style:{main:{background:"rgba(0, 0, 0, .85)","box-shadow":"0 0 10px rgba(0, 0, 0, .8)","border-radius":"3px","z-index":"99999",color:"rgba(255, 255, 255, .9)",padding:"10px 15px","max-width":"60%",width:"100%","word-break":"keep-all",margin:"0 auto","text-align":"center",position:"fixed",left:"0",right:"0",bottom:"0","-webkit-transform":"translateY(150%) translateZ(0)",transform:"translateY(150%) translateZ(0)","-webkit-filter":"blur(0)",opacity:"0"}},settings:{duration:4e3}},t.prototype.Transitions={},t.prototype.toastQueue=[],t.prototype.timeout=null,t.prototype.mergeOptions=function(e,o){var r=o;for(var n in e)r.hasOwnProperty(n)?null!==e[n]&&e[n].constructor===Object&&(r[n]=t.prototype.mergeOptions(e[n],r[n])):r[n]=e[n];return r},t.prototype.generate=function(r,n){var i=document.createElement("div");"string"==typeof r&&(r=document.createTextNode(r)),i.appendChild(r),o(i),i=null,t.prototype.stylize(e(),n)},t.prototype.stylize=function(t,e){Object.keys(e).forEach(function(o){t.style[o]=e[o]})},t.prototype.show=function(o,r){this.generate(o,r.style.main);var n=e();document.body.insertBefore(n,document.body.firstChild),n.offsetHeight,t.prototype.stylize(n,t.prototype.Transitions.SHOW),n=null,clearTimeout(t.prototype.timeout),t.prototype.timeout=setTimeout(t.prototype.hide,r.settings.duration)},t.prototype.hide=function(){var o=e();t.prototype.stylize(o,t.prototype.Transitions.HIDE),clearTimeout(t.prototype.timeout),o.addEventListener("transitionend",t.prototype.animationListener),o=null},t.prototype.animationListener=function(){e().removeEventListener("transitionend",t.prototype.animationListener),t.prototype.destroy.call(this)},t.prototype.destroy=function(){var r=e();if(document.body.removeChild(r),r=null,o(null),t.prototype.toastQueue.length>0){var n=t.prototype.toastQueue.shift();t(n.text,n.options,n.transitions),n=null}},{Toast:t}}(),"undefined"!=typeof module&&(module.exports=iqwerty.toast);
/*
    5dmat-web team
    laravel Ajax Login
    Coded By AbdEl Aziz Hassan
 */
var Login = (function(){
    function Login(info){
        this.email = info.email;
        this.password = info.password;
        this.btn = info.btn;
        this.url = info.url;
        this.successUrl = info.successUrl;
        this.mode = info.mode;
        this.init();
    }
    Login.prototype.urlDef = "/login";
    Login.prototype.urlAfterLogin = "/home";
    Login.prototype.modeDef = "toast";

    Login.prototype.init = function(){
        if(this.checkProperty(this.email) && this.checkProperty(this.password) && this.checkProperty(this.btn))
            this.doLogin(this);
        else
            console.log("Login Ajax miss one prams ...");
    };
    Login.prototype.doLogin = function (thisClass) {
        thisClass.addEventListener(thisClass.btn , 'click' , function(){
            if(thisClass.empty(thisClass.getVal(thisClass.email)) === true && thisClass.empty(thisClass.getVal(thisClass.password)) === true){
                thisClass.ajax(thisClass);
            }else{
                thisClass.showErrors('Please fill all fields');
            }
        });
    };
    Login.prototype.ajax = function(thisClass){
        ajax().post(this.getUrl() , this.info()).then(function(response){
            if(response === true){
                thisClass.doneLogin();
            }else{
                thisClass.errorLogin(response);
            }
        } , function(response){
            thisClass.showErrors('There is server Error refresh the page ..');
        });
    };
    Login.prototype.doneLogin = function(){
        return window.location = this.urlAfterLogin;
    };
    Login.prototype.errorLogin = function(response){
        var password = this.checkProperty(response.password) ? response.password : "";
        var email = this.checkProperty(response.email) ? response.email : ' ' ;
        this.showErrors(email+password);
    };
    Login.prototype.addEventListener = function(id , action , callback){
        this.getById(id).addEventListener(action , function(e){
            e.preventDefault();
            callback();
        });
    };
    Login.prototype.info = function(){
        return  {
            email : this.getVal(this.email),
            password : this.getVal(this.password),
            _token: this.getToken(),
            remember:this.getByName('remember')[0].value
        };
    };
    Login.prototype.getById = function(id){
        return document.getElementById(id);
    };
    Login.prototype.getVal = function(id){
        return this.getById(id).value;
    };
    Login.prototype.setVal = function(id , value){
        return this.getById(id).value = value;
    };
    Login.prototype.checkProperty = function(property){
        return property === undefined || property == null ? false : true;
    };
    Login.prototype.empty = function(property){
        return property == "" ? false : true;
    };
    Login.prototype.getUrl  = function(){
        return  this.checkProperty(this.url) ? this.url : this.urlDef;
    };
    Login.prototype.getMode  = function(){
        return  this.checkProperty(this.mode) ? this.mode : this.modeDef;
    };
    Login.prototype.getToken = function () {
        return this.getByName('_token')[0].value;
    };
    Login.prototype.getByName = function (name) {
        return document.getElementsByName(name);
    };
    Login.prototype.showToast = function(message){
        new iqwerty.toast.Toast(message);
    };
    Login.prototype.showErrors = function (message) {
        if(this.getMode() == 'toast')
            this.showToast(message);
        else
            alert(message);
    };
    return Login;
})();
