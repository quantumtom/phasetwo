import Blazy from 'blazy';

(function () {

    function blazy() {
        window.bLazy = new Blazy({
            error: function(ele, msg){
                if (msg === 'missing'){
                    console.error('Blazy data-src is missing');
                    // data-src is missing
                }
                else if (msg === 'invalid') {
                    console.error('Blazy data-src is invalid');
                    // data-src is invalid
                }
            }
        });
    }

    function init() {
        blazy();

        window.onfocus = function() {
            blazy();
        };
    }

    init();

})();
