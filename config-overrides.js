const {override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy, useBabelRc, addLessLoader, addWebpackPlugin} = require( 'customize-cra' );

const AntdDayjsWebpackPlugin = require( 'antd-dayjs-webpack-plugin' );
module.exports = override(
	fixBabelImports( 'import', {
		libraryName : 'antd',
		libraryDirectory : 'es',
		style : true,
	} ),
	addWebpackAlias( {
		[ "@" ] : require( 'path' ).resolve( __dirname, "src" )
	} ),//配置webpack alias
	addDecoratorsLegacy(),//配置@修饰符
	useBabelRc(),// 配置了 ?. optionalChaining ,其实就是设置读取babel配置 ；还要统一配置来源（去掉了package.json里的babel）
	addLessLoader( {
		javascriptEnabled : true,
		modifyVars : {'@primary-color' : '#2da80e'}
	} ),
	addWebpackPlugin( new AntdDayjsWebpackPlugin() )
);
