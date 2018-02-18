'use strict';

const juice = require('juice');

function HtmlWebpackInlinerPlugin (options) {
    // Initialize
}

HtmlWebpackInlinerPlugin.prototype.apply = compiler => {
	compiler.plugin('compilation', compilation => {
		compilation.plugin('html-webpack-plugin-after-html-processing', (htmlPluginData, callback) => {
			htmlPluginData.html = juice(htmlPluginData.html);
			callback(null, htmlPluginData);
		});
	});
};

module.exports = HtmlWebpackInlinerPlugin;