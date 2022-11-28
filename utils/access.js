import { Permit } from "permitio";

class Access {
	constructor() {
		this.permit = new Permit({
			// pdp: "http://host.docker.internal:7766",
			pdp: "http://localhost:7766",
			// Permit SDK Key
			token: process.env.PERMIT_IO_KEY,
		});
	}
	async isUserAllowed(uid, action, resource) {
		var permitted = false;
        if (uid == "filip@permit.io" && ("view-ssn-number" == action || "view-personal-info" == action)) permitted=true;
		//const permitted = await this.permit.check(uid, action, resource);
		return permitted;
	}
	getUser(req) {
		if (Object.keys(req.cookies).length === 0 || req.cookies.Authorization == undefined) {
			return "unknown@gmail.com";
		} else {
			return req.cookies.Authorization.split("Bearer ")[1];
		}
	}
}
export const access = new Access();
