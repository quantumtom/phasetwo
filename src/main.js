(function () {

    function addScriptTag () {
        let src = "https://www.universe.com/embed2.js";
        let widgetType = "universe-ticket";
        let targetType = "Listing";
        let targetId = "catchy-title-tickets-santa-monica-M839PG";
        let state = "buttonColor=#3A66E5&buttonText=Get Tickets";

        let el = document.createElement('script');
        el.setAttribute('src', src);
        el.dataset.widgetType = widgetType;
        el.dataset.targetType = targetType;
        el.dataset.targetId = targetId;
        el.dataset.state = state;

        document.getElementById('main-content').appendChild(el);
    }

    function init() {
        addScriptTag();
    }

    init();

})();
