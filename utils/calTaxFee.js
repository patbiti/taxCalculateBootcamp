var calTaxFee = {
	/**
	对于不同的数据，也可以直接调用公式


	 **/
	formula : function(income, insurance, base, fee, mount){
		var tax = (income - insurance - base)*fee - mount;
		return tax;
	},
    cal : function(income, cfg){
		var tax = 0;
		for(var i=0; i < cfg.length; i++){
			var periodCfg = cfg[i];

			//如果小于最低额，则不需要缴纳
			if(income < cfg[0].period){
				break;
			}

			//判断在哪一个区间，最后一个区间特殊处理
			if(i === cfg.length -1){
				tax = this.formula(income, 0, 3500, periodCfg.fee, periodCfg.mount);
				break;
			}
			//其余区间的处理
			if(income > periodCfg.period && income <= cfg[i+1].period){
				tax = this.formula(income, 0, 3500, periodCfg.fee, periodCfg.mount);
				break;
			}
		}
		return tax;
    }
};
module.exports = calTaxFee;
