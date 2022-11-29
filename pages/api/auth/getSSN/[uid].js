import { access } from "../../../../utils/access";
import db from "../../../../utils/DB";

async function verifyAndFetchSSNNumber(req, res) {
	var uid = req.query.uid;
	var result = null;

	var reqUid = req.query.uid;
	const checkPublicSSN = await access.isUserAllowed(reqUid, "view-ssn-number", "card");

	// If the uid of user card is the same as the current user that is logged in,
	// and the permission check for viewing private SSN passes OR user has ability to view
	// all SSN numbers - then fetch data from database.
	if (checkPublicSSN || reqUid == uid) {
		if (req.query.save != undefined) {
			const {e,d,r} = await (new Promise(resolve => {
			db.vaultObjs().searchObjects("users", "AppFunctionality", { match: { "email": uid } }, { props: ["ssn.mask"] }, (e, d, r) => resolve({e,d,r}))
			}));
			result = { details: {ssn: d.results[0]["ssn.mask"] }};
		} else { 
			var info = await db.query('SELECT ssn FROM users WHERE email=$1', [uid]);
			result = { details: info[0]};
		}
		res.status(200).send(result);
	} else {
		res.status(403).send("Unauthorized");
	}
}

export default verifyAndFetchSSNNumber;
