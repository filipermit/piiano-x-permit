import { access } from "../../../../utils/access";
import db from "../../../../utils/DB";

async function verifyAndFetchSSNNumber(req, res) {
	var reqUid = req.query.uid;

	const checkPublicSSN = await access.isUserAllowed(
		reqUid,
		"view-public-ssn",
		"card"
	);

	const checkPrivateSSN = await access.isUserAllowed(
		reqUid,
		"view-private-ssn",
		"card"
	);

	var uid = req.query.uid;

	// If the uid of user card is the same as the current user that is logged in,
	// and the permission check for viewing private SSN passes OR user has ability to view
	// all SSN numbers - then fetch data from database.
	if ((checkPrivateSSN && reqUid == uid) || checkPublicSSN) {
		var info = await db.query("SELECT ssn FROM users WHERE email=$1", [uid]);
		res.status(200).send(info[0]);
	} else {
		res.status(403).send("Unauthorized");
	}
}

export default verifyAndFetchSSNNumber;
