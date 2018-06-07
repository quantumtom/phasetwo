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

    let tag = document.createElement('script');

    tag.setAttribute('src','http://example.com/site.js');
    tag.setAttribute('async','async');

    document.head.appendChild(tag);

    function blazy() {
        window.bLazy = new Blazy();
    }

    function init() {
        blazy();
    }

    init();

})();
