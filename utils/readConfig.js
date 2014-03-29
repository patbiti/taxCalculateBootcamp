var fs = require('fs');
var readConfig = function(filePath){
    var jsonConfig = {};
    if(fs.existsSync(filePath)){
      //用这个替换require主要考虑到不规范的json数据格式
      jsonConfig = eval('(' + fs.readFileSync(filePath, 'utf-8') +')');
    }
    return jsonConfig;
};

module.exports = readConfig;
