var
port = 6932,
expressInsatance = require('./express'),
express = expressInsatance.express,
app = expressInsatance.app;

// 加载notebook模块
require('./controller/notebook');

app

// 资源路径
.use('/resources', express.static('resources'))

// jade模板引擎
.set('view engine', 'pug')

// 设置模板路径
.set('views', './views')

// 404
.use(function(req, res) {

	res.status(404).send();
})

// 服务
.listen(port, function (req, res) {

	console.log('app is running at port ' + port);
});