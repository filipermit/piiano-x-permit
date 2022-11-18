import { Permit } from "permitio";

// Verify that a user is authenticated by checking the session.
async function permissionCheck(req, res) {
	const { action, resource } = req.body;

	// Permit PDP instance.
	const permit = new Permit({
		pdp: "http://localhost:7766",
		// Permit SDK Key
		token: process.env.PERMIT_IO_KEY,
	});

	// Permit check for correct permissions for a specific role.

	const userId = "filip@permit.io";

	const permitted = await permit.check(userId, action, resource);

	if (permitted) {
		console.log(`${userId} is PERMITTED to ${action} on ${resource}.`);
		res.status(200).send(`${userId} is PERMITTED to ${action} on ${resource}`);
	} else {
		console.log(`${userId} is NOT PERMITTED to ${action} on ${resource}`);
		res
			.status(403)
			.send(`${userId} is NOT PERMITTED to ${action} on ${resource}`);
	}

	return permitted;
}

export default permissionCheck;
