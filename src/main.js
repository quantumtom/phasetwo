import Blazy from 'blazy';

// main.js Start HERE:
(function () {
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

    function init() {
        blazy();
    }

    init();

})();
