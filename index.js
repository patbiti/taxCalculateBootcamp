var readCfg = require('./utils/readConfig.js'),
	calTaxFee = require('./utils/calTaxFee.js'),
	argsparser = require('argsparser'),
	feeCfg, cityCfg, input, incomeInput, cityInput, citys, tax;

feeCfg = readCfg(__dirname + '/config/fee.json');
cityCfg = readCfg(__dirname + '/config/city.json');
citys = (function(cityCfg){
	var citysArr = [];
	for(var x in cityCfg){
		citysArr.push(x);
	}
	return citysArr.join(',');
})(cityCfg);
//输入区
input = argsparser.parse();
//判断基本输入
if(process.argv.length === 2){
	console.error('#example: calTaxBC -income 8000 -city 北京');
	return ;
}
//判断城市和薪水输入
cityInput = input['-city'];
incomeInput = input['-income'];
if(!cityCfg[cityInput]){
	console.error('#很抱歉，暂时不支持您所选择的城市，目前支持的城市包括：' + citys);
	return ;
}
if(incomeInput === '' || incomeInput === null || isNaN(incomeInput)){
	console.error('请输入正确薪水值');
	return ;
}
tax = calTaxFee.cal(incomeInput, feeCfg[cityInput]);
console.log('您应该缴纳的个人所得税应为：' + tax.tax + ',基于' + tax.base + '的基准值。');
