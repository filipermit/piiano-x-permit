import { Permit } from "permitio";

class Access {
    constructor() {
        this.permit = new Permit({
            pdp: "http://host.docker.internal:7766",
            // Permit SDK Key
            token: process.env.PERMIT_IO_KEY,
        });
    }
    async isUserAllowed(req, action, resource) {
        const uid = this.getUser(req);
        const permitted = uid == "filip@permit.io" ? true : false;
        //const permitted = await this.permit.check(uid, action, resource);
        return permitted;
    }
    getUser(req) {
        return req.cookies.user.split(":")[1];
    }
}
export const access = new Access();