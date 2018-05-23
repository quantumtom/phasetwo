import Markup from './raw.html';
import './styles/pan-zoom.css';
import './styles/main.css';
import './styles/medium.css';
import './styles/small.css';

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
