import Blazy from 'blazy';
import $ from 'jquery';

(function () {
    $(document).ready(function() {

        /**
         * Put your jQuery code in here.
         */



    });

    /**
     * Add a script tag
     */

    var my_awesome_script = document.createElement('script');

    my_awesome_script.setAttribute('src','http://example.com/site.js');

    document.head.appendChild(my_awesome_script);

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
