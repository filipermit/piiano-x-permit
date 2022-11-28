import { PrismaClient } from "@prisma/client";
import { access } from "../../../../utils/access";
import db from "../../../../utils/DB";

const prisma = new PrismaClient();

async function verifyAndFetchSSNNumber(req, res) {
	var record;
	var uid = req.query.uid;

	const checkPublicSSN = await access.isUserAllowed(
		req,
		"view-ssn-number",
		"card"
	);
	const checkPrivateSSN = await access.isUserAllowed(
		req,
		"view-private-ssn",
		"card"
	);

	// If the uid of user card is the same as the current user that is logged in,
	// and the permission check for viewing private SSN passes OR user has ability to view
	// all SSN numbers - then fetch data from database.
	if ((checkPrivateSSN && access.getUser(req) == uid) || checkPublicSSN) {
		record = await prisma.piianousers.findMany({
			where: {
				email: uid,
			},
		});
	}

	if (record !== undefined) {
		res.status(200).send({ details: record });
	} else {
		res.status(403).send("Unauthorized");
	}
}

export default verifyAndFetchSSNNumber;
