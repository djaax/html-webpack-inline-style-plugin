'use strict';

const juice = require('juice');

class HtmlWebpackInlinerPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('HtmlWebpackInlinerPlugin', compilation => {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(
        'HtmlWebpackInlinerPlugin',
        data => {
          data.html = juice(data.html);
        }
      );
    });
  }
}

module.exports = HtmlWebpackInlinerPlugin;
