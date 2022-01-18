import { executeQuery} from '../../../lib/db.js';

const handler = async (req, res) => {
    const { memberID } = req.body;
    try {
        if (!memberID) {
            return res
                .status(400)
                .json({ message: '`memberID` is required' });
        }
        const results = await executeQuery('delete from member where  memberID = ?', [memberID]);
        return res.json(results);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default handler;