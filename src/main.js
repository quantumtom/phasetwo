import Blazy from 'blazy';


function blazy() {
    window.bLazy = new Blazy({
        error: function(ele, msg){
            if (msg === 'missing'){
                console.log('data-src is missing');
                // data-src is missing
            }
            else if (msg === 'invalid') {
                console.log('data-src is invalid');
                // data-src is invalid
            }
        }
    });
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
    var iframe = '';

    if(source == 'newsletter'){
        iframe = '<!-- This embed code may be restricted to use on a single domain, see documentation at:https://help.surveygizmo.com/help/iframe-embed#limit-permitted-domains-for-embeds --><iframe src="http://www.surveygizmo.com/s3/4354610/newsletter?source=newsletter" frameborder="0" width="700" height="500" style="overflow:hidden"></iframe>';
    } else if (source == 'Facebook') {
        iframe = '<!-- This embed code may be restricted to use on a single domain, see documentation at:https://help.surveygizmo.com/help/iframe-embed#limit-permitted-domains-for-embeds --><iframe src="http://www.surveygizmo.com/s3/4354610/Facebook?source=Facebook" frameborder="0" width="700" height="500" style="overflow:hidden"></iframe>';
    } else {
        iframe = '<!-- This embed code may be restricted to use on a single domain, see documentation at:https://help.surveygizmo.com/help/iframe-embed#limit-permitted-domains-for-embeds --><iframe src="http://www.surveygizmo.com/s3/4354610/RedBull-com?source=RedBull-com" frameborder="0" width="700" height="500" style="overflow:hidden"></iframe>';
    }

    document.getElementById("iframe-wrapper").innerHTML = iframe;
}

init();

