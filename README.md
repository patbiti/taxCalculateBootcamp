##个人所得税计算器


###config目录 -配置文件目录
1. fee.json : 费率表，用于存放不同城市，不同国籍人员的费率
2. city.json : 存放支持的城市列表


##utils目录 存放工具类文件
1. readConfig.js: 读取配置文件类，没有直接用require主要考虑到require对json文件的要求过于严格，用eval来替代
2. calTaxFee.js： 计算类

###index.js  项目主文件


