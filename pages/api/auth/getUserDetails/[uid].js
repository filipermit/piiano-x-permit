import { access } from "../../../../utils/access";
import db from "../../../../utils/DB";

async function verifyAndFetchDetails(req, res) {
	var uid = req.query.uid;

	var reqUid = access.getUser(req);
	var checkPersonalInfo = await access.isUserAllowed(
		reqUid,
		"view-personal-info",
		"card"
	);

	// If the uid of user card is the same as the current user that is logged in,
	// OR user has ability to view all info - then fetch data from database.
	if (checkPersonalInfo || reqUid == uid) {
		var info = await db.query(
			"SELECT title,description,country,badges FROM users JOIN \
		(SELECT user_email,json_agg(json_build_object('label', label, 'emoji', emoji)) as badges FROM badges GROUP BY user_email) as aa \
		ON email=user_email WHERE email=$1",
			[uid]
		);
		res.status(200).send({ details: info[0] });
	} else {
		res.status(403).send("Unauthorized");
	}
}
export default verifyAndFetchDetails;
