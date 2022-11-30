import { access } from "../../../../utils/access";
import vault from "../../../../utils/Vault";

async function verifyAndFetchSSNNumber(req, res) {
	var uid = req.query.uid;

	var reqUid = req.query.uid;
	const checkPublicSSN = await access.isUserAllowed(
		reqUid,
		"view-ssn-number",
		"card"
	);

	const checkPrivateSSN = await access.isUserAllowed(
		reqUid,
		"view-private-ssn",
		"card"
	);

	// If the uid of user card is the same as the current user that is logged in,
	// and the permission check for viewing private SSN passes OR user has ability to view
	// all SSN numbers - then fetch data from database.
	if ((checkPrivateSSN && reqUid == uid) || checkPublicSSN) {
		var data = await vault.searchObjects(
			{ email: uid },
			["ssn.idor_protected"],
			access.getUser(req)
		);
		res.status(200).send({ ssn: data.results[0]["ssn.idor_protected"] });
	} else {
		res.status(403).send("Unauthorized");
	}
}

export default verifyAndFetchSSNNumber;
