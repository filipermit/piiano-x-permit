const PvaultSdk = require('../pvault-sdk');

class Vault {
	constructor() {
		this.vault = new PvaultSdk.ApiClient(process.env.PVAULT_BASE_PATH);
		this.vault.authentications['bearerAuth'].accessToken = process.env.PVAULT_API_KEY;	
		this.objApis = new PvaultSdk.ObjectsApi(this.vault);	
	}

    async searchObjects(match, props) {
        const { error, data, response } = await new Promise((resolve) => {
			this.objApis.searchObjects(
				"users",
				"AppFunctionality",
				{ match },
				{ props },
				(error, data, response ) => resolve({ error, data, response  })
			);
		});
        return data;
    }

  }

const vault = new Vault();
export default vault;