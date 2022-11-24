import { access } from "../../../../utils/access";
import db from "../../../../utils/DB";

async function verifyAndFetchDetails(req, res) {
	var uid = req.query.uid
    var allowed = await access.isUserAllowed(req, "view-personal-info", "card");
    var jwt_uid = access.getUser(req);
    if (allowed || jwt_uid == uid) {
        var info = db.getInfo([uid], ["title", "description", "country", "badges"])
        res.status(200).send({ details: info[uid] });
    } else {
		res.status(403).send("Unauthorized");
	}

}
export default verifyAndFetchDetails;
