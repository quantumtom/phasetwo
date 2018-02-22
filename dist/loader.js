define([], function () {
    return {
        start: function (options) {
            return new Promise(function (resolve) {
                System.import('https://addons.redbull.com/us/phasetwo/bundle.js?nothing').then(function () {
                    return System.import('https://addons.redbull.com/us/phasetwo/main.js')
                }).then(function (mod) {
                    resolve(mod.default.start({el: options.el, config: options.config, options: options.options}))
                });
            });
        }
    };
});
