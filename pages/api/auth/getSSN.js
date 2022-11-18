import { Permit } from "permitio";

async function verifyAndFetchSSNNumber(req, res) {
	const GPGKey = "XXXX-XXX-7727";

	// Permit PDP instance.
	const permit = new Permit({
		pdp: "http://localhost:7766",
		// Permit SDK Key
		token: process.env.PERMIT_IO_KEY,
	});

	// Permit permission check.
	const permitted = await permit.check(
		"filip@permit.io",
		"view-ssn-number",
		"card"
	);

	if (permitted) {
		res.status(200).send({ ssn: SSNNumber });
	} else {
		res.status(403).send("Unauthorized");
	}
}

export default verifyAndFetchSSNNumber;
