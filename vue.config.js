module.exports = {

	devServer: {
		disableHostCheck: true,
	}, 

	runtimeCompiler: true,

	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'Skyle 보호자 포털'
				return args
			})
	}
}
