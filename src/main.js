import Blazy from 'blazy';

// main.js Start HERE:
(function () {

    function blazy() {
        window.bLazy = new Blazy({
            error: function(ele, msg){
                if (msg === 'missing'){
                    // data-src is missing
                    console.error('Blazy data-src is missing');
                }
                else if (msg === 'invalid') {
                    // data-src is invalid
                    console.error('Blazy data-src is invalid');
                }
            }
        });
    }

    function modifyHeader() {
        let headerPanel = document.getElementsByClassName('header__panel')[0];

        if (headerPanel) {
            headerPanel.style.background = 'transparent';
        }
    }

    function init() {
        blazy();

        modifyHeader();

        window.onfocus = function() {
            blazy();
        };
    }

    init();

})();
