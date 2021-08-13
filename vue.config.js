module.exports = {
	chainWebpack: config => {   //修改webpack打包的入口文件。需要在根目录建两个对应入口js文件
		config.entry('app').clear().add('./example/main.js')
	},
}