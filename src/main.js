import Blazy from 'blazy';

console.info('loading main.js');


(function () {
    /*document.write = function(input) {
        document.body.innerHTML += input;
    }*/

    /*var doit = function(src) {
        var script_tag = document.createElement('script');
        script_tag.type = 'text/javascript';
        script_tag.src= src;
        document.getElementById('main-content').appendChild(script_tag);
    }*/

    function blazy() {
        window.bLazy = new Blazy();
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function init() {
        blazy();

        var source = getParameterByName('source');
        var script = document.createElement('script');
        var iframe = '';
        var survey_src = '';

        if(source == 'newsletter'){
            iframe = '<iframe seamless id="survey" src="//www.surveygizmo.com/s3/4354610/newsletter?source=newsletter" frameborder="0"></iframe>';
        } else if (source == 'Facebook') {
            iframe = '<iframe seamless id="survey" src="//www.surveygizmo.com/s3/4354610/Facebook?source=Facebook" frameborder="0"></iframe>';
        } else {
            iframe = '<iframe seamless id="survey" src="//www.surveygizmo.com/s3/4354610/RedBull-com?source=RedBull-com" frameborder="0"></iframe>';
        }

        //console.log('IFRAME: ' + iframe);
        document.getElementById("iframe-wrapper").innerHTML = iframe;

        /*survey_src = 'http' + ( ("https:" == document.location.protocol) ? "s" : "") + '://www.surveygizmo.com/s3/4354610/newsletter?__output=embedjs&__ref=' + escape(document.location.origin + document.location.pathname);*/

        //document.head.appendChild(script);

        //doit(survey_src);

        //console.log(iframe.contentWindow.document.body.scrollHeight);
    }

    init();
})();


