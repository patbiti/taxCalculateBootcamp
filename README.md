##个人所得税计算器


###config目录 -配置文件目录
1. fee.json : 费率表，用于存放不同城市，可以用于计算不同国籍的，本例子不实现不同国籍人员的费率
2. city.json : 存放支持的城市列表，项目只是例子。可扩展。


##utils目录 存放工具类文件
1. readConfig.js: 读取配置文件类，没有直接用require主要考虑到require对json文件的要求过于严格，用eval来替代
2. calTaxFee.js： 计算类

###index.js  项目主文件
1. npm install calTexFeeBC 
2. calTexFeeBc -income 纳税金额（扣除五险一金后的 -city 北京
###备注
1. 该算法依据的是公式，应纳税额= （输入值 - 速扣数） - 速算扣除数
2. 在fee.json中存储的包括税率和速算扣储值
3. 该公式还可以有另一种算法，这个也可以扩展，根据输入-速扣数来递归实现。

