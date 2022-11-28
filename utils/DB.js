class DB {
	constructor() {
		this.objects = {};
		this.objects["ariel@piiano.com"] = {
			avatar: "ariel.jpg",
			name: "Ariel Shiftan",
			email: "ariel@piiano.com",
			job: "Co-Founder & CTO",
			title: "Ariel Shiftan 👋",
			description: "Co-Founder and CTO @ Piiano.com",
			country: "Israel",
			badges: [
				{ label: "Coding", emoji: "🤓" },
				{ label: "Snowboarding", emoji: "🏂" },
			],
		};

		this.objects["filip@permit.io"] = {
			avatar: "filip.jpg",
			name: "Filip Grebowski",
			email: "filip@permit.io",
			job: "Developer Advocate",
			title: "Filip Grebowski 👋",
			description: "YouTube Creator, Engineer & Developer Advocate @ Permit.io",
			country: "England",
			badges: [
				{ label: "Coding", emoji: "🤓" },
				{ label: "Videography", emoji: "📹" },
			],
		};
	}

	getInfo(uids, fields) {
		if (null == uids) uids = Object.keys(this.objects);
		var res = {};
		for (const uid of uids) {
			res[uid] = {};
			for (const field of fields) {
				res[uid][field] = this.objects[uid][field];
			}
		}
		return res;
	}
}

const db = new DB();
export default db;
