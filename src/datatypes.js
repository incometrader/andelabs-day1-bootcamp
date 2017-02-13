function dataTypes(argument){
	if (Array.isArray(argument)){
		return argument[2];
	}
	if (typeof argument === "object" || typeof argument === "undefined"){
		return "no value";
	}
	if (typeof argument === "string"){
		return argument.length;
	}
	if (typeof argument === "boolean"){
		return argument;
	}
	if (typeof argument === "number"){
		if (argument > 100){
			return "more than 100";
		} else if (argument < 100){
			return "less than 100";
		} else if (argument === 100){
			return "equal to 100";
		}
	}
	if (typeof argument === "function"){
		return argument(true);
	}
}

module.exports = dataTypes;
