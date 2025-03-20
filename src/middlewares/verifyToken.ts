import jwt from 'jsonwebtoken';

export const verifyToken = (req: any, res: any, next: any) => {
    const headers = req.headers.authorization
    const accesstoken = headers ? headers.split(' ')[1] : ''
    try {
        if (!accesstoken) {
            throw new Error("Permission denied.");
        }

        const verify: any = jwt.verify(accesstoken, process.env.SECRET_KEY as string);

        if (!verify) {
            throw new Error("Invalid token");
        }
        
        req._id = verify._id;
        next();
    } catch (error: any) {
        res.status(401).json({ error: error.message });
    }
};