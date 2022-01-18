import { executeQuery} from '../../../lib/db.js';

const handler = async (req, res) => {
    const { memberID, memberName, phone, email, gender, staffID } = req.body;

    try {
        if (!memberID || !memberName || !phone || !gender) {
            return res
                .status(400)
                .json({ message: '`memberID`, `memberName`, `phone` and `gender` all are required' });
        }
        const results = await executeQuery('select * from member', [memberID, memberName, phone, email, gender, staffID]);
        return res.json(results);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default handler;