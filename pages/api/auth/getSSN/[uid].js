import { access } from "../../../../utils/access";
import db from "../../../../utils/DB";

async function verifyAndFetchSSNNumber(req, res) {
    var uid = req.query.uid
    var info = db.getInfo([uid], ["SSN"])

    if (req.query.safe !== undefined) {
        if (access.getUser(req) != uid && 
            !(await access.isUserAllowed(req, "view-ssn-number", "card"))) {
            info = null;
        }
    }
    
    if (info) res.status(200).send({ details: info[uid] });    
    else res.status(403).send("Unauthorized");
    
}

export default verifyAndFetchSSNNumber;
