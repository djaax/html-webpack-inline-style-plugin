'use strict';

const juice = require('juice');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let juiceOptions;

const pluginName = 'html-webpack-inline-style-plugin';

function HtmlWebpackInlinerPlugin(options) {
    // Initialize
    juiceOptions = options && options.juiceOptions || {};
}

HtmlWebpackInlinerPlugin.prototype.apply = compiler => {

    const handleCompilation = (compiler, callback) => compiler.hooks
        ? compiler.hooks.compilation.tap(pluginName, callback)
        : compiler.plugin('compilation', callback);

    const handleAfterHtmlProcess = (compilation, callback) => {
        if (compilation.hooks) {
            // Fix HtmlWebpackPlugin >= 4
            const afterHtmlProcessHook =
                compilation.hooks.htmlWebpackPluginAfterHtmlProcessing ||
                HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution
            afterHtmlProcessHook.tapAsync(pluginName, callback)
        } else {
           compilation.plugin('html-webpack-plugin-after-html-processing', callback);
        }
    }

    handleCompilation(compiler, compilation => handleAfterHtmlProcess(compilation, (htmlPluginData, callback) => {
        htmlPluginData.html = juice(htmlPluginData.html, juiceOptions);
        callback(null, htmlPluginData);
    }));
};

module.exports = HtmlWebpackInlinerPlugin;
