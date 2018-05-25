import Markup from './raw.html';
import './styles/main.css';
import './styles/text-shadow.css';
import './styles/transparent-header-panel.css';

let O = {
    start: function (options) {
        console.log('===================== INDEX START =====================');
        let el = options.el;

        el.innerHTML = Markup;

        return Promise.resolve({
            stop: function () {
                console.log('===================== INDEX STOP =====================');
                return Promise.resolve();
            }
        });
    }
};

export default O;
