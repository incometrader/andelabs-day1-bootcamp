function dataTypes(argument){

	if (typeof argument === "object" || typeof argument === "undefined"){
		return "no value";
	}
	if (typeof argument === "string"){
		return argument.length;
	}
	if (typeof argument === "boolean"){
		return argument;
	}
}

module.exports = dataTypes;
