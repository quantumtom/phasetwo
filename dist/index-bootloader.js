define("phasetwo", [], function () {
    return {
        start: function (options) {
            return new Promise(function (resolve) {
                System.import("https://addons.redbull.com/us/phasetwo/dist/bundle-e4329fd6aa0bffe0e70c.js").then(function (mod) {
                    resolve(mod.default.start({el: options.el, config: options.config}))
                });
            });
        }
    };
});
