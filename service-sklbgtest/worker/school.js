const axios = require('axios');
const common = require('../common/common');

const SCHOOL_API_URL = `https://${process.env.RESTDB_HOST}/rest/schools`;

const create = (data) => {
	return new Promise( async (resolve, reject) => {
		try {
			const response = await axios({
				method: 'POST',
				url: SCHOOL_API_URL,
				headers: { "x-apikey": `${process.env.RESTDB_ACCESS_KEY}` },
				data
			});

			if (response && response.status === 201) {
				resolve(response.data);
			} else {
				reject(new Error("Error occurred during school registration."));
			}
			
		} catch (error) {
			reject(error);
		}
	});
}

const getAll = () => {
	return new Promise( async (resolve, reject) => {
		try {
			const response = await axios({
				method: 'GET',
				url: SCHOOL_API_URL,
				headers: { "x-apikey": `${process.env.RESTDB_ACCESS_KEY}` }
			});

			if (response && response.status === 200) {
				resolve(response.data);
			} else {
				reject(new Error("Error occurred during school records retrieval."));
			}
			
		} catch (error) {
			reject(error);
		}
	})
}

const search = (context) => {
	
	return new Promise( async (resolve, reject) => {
		try {
			let schools = await getAll();
			let filteredSchools = common.Filter(schools, context);

			resolve(filteredSchools);
		} catch (error) {
			reject(error);
		}
	});
}

module.exports = {
	create,
	getAll,
	search
}