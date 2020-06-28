const axios = require('axios'),
	common = require('../common/common'),
	schoolWorker = require('../worker/school');

const RegisterNewSchool = async (req, res) => {
	let reqBody = req.body;

	// validates request body
	let validateParamResponse = common.ValidateParams(reqBody, ["name", "address", "operatedBy", "studentCount"]);
	if (!validateParamResponse.status) {
		res.status(400);
		res.send(common.Error("Required parameters empty or not found", validateParamResponse.list, 400));
		return;
	}

	// persistent school data
	try {
		let school = await schoolWorker.create(reqBody);
		res.send(common.Success("Successfully registered.", school, 201));
	} catch (error) {
		res.status(500);
		res.send(common.Error(error.message, undefined));
	}
}

const GetSchools = async (req, res) => {
	try {
		let schools = await schoolWorker.getAll();
    	res.send(common.Success("", schools));
  } catch (error) {
    	res.status(500);
		res.send(common.Error(error.message, undefined));
  }
}

module.exports = {
	RegisterNewSchool,
	GetSchools,
}