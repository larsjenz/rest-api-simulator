// API handlers for V-ZUG interface

exports.getModel = function( req, res ) {
	res.send("MSLQ");
}

exports.getModelDescription = function(req, res) {
	res.send("Combi-Steam MSLQ");
}

exports.getMachineType = function(req,res){
	res.send("ST");
}

exports.getSerialNumber = function(req,res){
	res.send("811858972432");
}

exports.isActive = function(req, res){
	res.send ("true");
}

exports.getCurrentStatus = function(req,res){
	res.send("Program selected: Regenerate - Temperature: 110° Celsius");
}

exports.getDeviceName = function(req,res){
	res.send("Stanley Steamer");
}

exports.setDeviceName = function(req,res){
	var name = req.body;
}
