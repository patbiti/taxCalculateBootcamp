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
		var base = cfg.base;
		var periods = cfg.periods;
		var insurance = 0;//暂时不考虑四险一金。
		for(var i=0; i < periods.length; i++){
			var periodCfg = periods[i];

			//如果小于最低额，则不需要缴纳
			if(income < periods[0].period){
				break;
			}

			//判断在哪一个区间，最后一个区间特殊处理
			if(i === periods.length -1){
				tax = this.formula(income, insurance, base, periodCfg.fee, periodCfg.mount);
				break;
			}
			//其余区间的处理
			if(income > periodCfg.period && income <= periods[i+1].period){
				tax = this.formula(income, insurance, base, periodCfg.fee, periodCfg.mount);
				break;
			}
		}
		return {
			"base" : base,
			"tax" : tax
		}
    }
};
module.exports = calTaxFee;
