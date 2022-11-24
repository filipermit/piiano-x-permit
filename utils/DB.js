class DB {
	constructor() {
		this.objects = {}
		this.objects["ariel@piiano.com"] = {
			SSN: "123-12-1111",
			avatar: "ariel.jpg",
			name: "Ariel Shiftan",
			email: "ariel@piiano.com",
			job: "Co-Founder & CTO",
			title: "Ariel Shiftan 👋",
			description: "Co-Founder and CTO @ Piiano.com",
			country: "Israel",
			badges: [{ label: "Videography", emoji: "📹"} ]
		}

		this.objects["filip@permit.io"] = {
			SSN: "123-12-2222",
			avatar: "filip.jpg",
			name: "Filip Grebowski",
			email: "filip@permit.io",
			job: "Developer Advocate",
			title: "Filip Grebowski 👋",
			description: "YouTube Creator, Engineer & Developer Advocate @ Permit.io",
			country: "England",
			badges: [
				{ label: "Videography", emoji: "📹" },
				{ label: "Coding", emoji: "🤓" },
				{ label: "Photography", emoji: "📸" },
				{ label: "Fishing", emoji: "🎣" },
				{ label: "Snowboarding", emoji: "🏂" }, ]
		}
		
		
	}
  
	getInfo(uids, fields) {
		if (null == uids) uids = Object.keys(this.objects);
		var res = {};
		for (const uid of uids) {
			res[uid] = {};
			for (const field of fields) {
				res[uid][field] = this.objects[uid][field]
			}
		}
		return res;
	}
  }

const db = new DB();
export default db;