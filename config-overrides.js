const {override, fixBabelImports, addWebpackAlias,addDecoratorsLegacy,useBabelRc} = require('customize-cra');


module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: 'css',
	}),
	addWebpackAlias({
		["@"]: require('path').resolve(__dirname, "src")
	}),//配置webpack alias
	addDecoratorsLegacy(),//配置@修饰符
	useBabelRc(),// 配置了 ?. optionalChaining ,其实就是设置读取babel配置 ；还要统一配置来源（去掉了package.json里的babel）
);
