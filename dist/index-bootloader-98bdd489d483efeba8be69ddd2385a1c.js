define("phasetwo", [], function () {
    return {
        start: function (options) {
            return new Promise(function (resolve) {
                System.import("https://addons.redbull.com/us/phasetwo/dist/index-3d8374ae68a0f0d2febf.js").then(function () {
                    return System.import("https://addons.redbull.com/us/phasetwo/dist/main-3d8374ae68a0f0d2febf.js")
                }).then(function (mod) {
                    resolve(mod.default.start({el: options.el, config: options.config}))
                });
            });
        }
    };
});
