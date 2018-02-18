Inline Style Extension for the HTMLWebpackPlugin
========================================

This package extends the [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) functionality by inlining existing styles to HTML elements using [juice](https://github.com/Automattic/juice).

You might want to use this to automate email generation with webpack.

The following input provided by the HTMLWebpackPlugin:
```js
"<style>div{color:red;}</style><div/>"
```

will result in
```html
<div style="color: red;"></div>
```

To include your style source/link into your document as shown above, have a look at [html-webpack-inline-source-plugin](https://github.com/DustinJackson/html-webpack-inline-source-plugin)


Installation
------------
You must be running webpack on node 6.4 or higher

Install the plugin with npm:
```shell
$ npm install --save-dev html-webpack-inline-style-plugin
```

Install the plugin with yarn:
```shell
$ yarn add html-webpack-inline-style-plugin
```

Basic Usage
-----------
Require the plugin in your webpack config:

```javascript
var HtmlWebpackInlineStylePlugin = require('html-webpack-inline-style-plugin');
```

Add the plugin to your webpack config as follows:

```javascript
{
	...
	plugins: [
	  new HtmlWebpackPlugin(),
	  new HtmlWebpackInlineStylePlugin()
	]
	...
}
```
