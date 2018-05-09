import Markup from './raw.html';
import './styles/fonts/MaisonNeue-Bold.woff2';
import './styles/pan-zoom.css';
import './styles/main.css';
import './styles/medium.css';
import './styles/small.css';
import './styles/overwrites.css';
import './styles/embed-container.css';

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
