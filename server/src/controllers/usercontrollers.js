import User from "../model/user.model.js";

export const Login = async (req, res) => {
    const { email, password } = req.body;
    try {

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        res.status(200).json({
            success: true,
            message: 'Login successful',
            user
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' });
    }


}

export const Register = async (req, res) => {
    console.log(req.body)
    const { name, email, password, phoneNumber } = req.body;

    try {
        if (!name || !email || !password || !phoneNumber) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const newUser = new User({ name, email, password, phoneNumber });
        await newUser.save();

        res.status(200).json({
            success: true,
            message: 'User created successfully',
            user: newUser
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
}

export const logout = async (req, res) => {
    try{
        req.logout((err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Something went wrong' });
            }
            res.status(200).json({ message: 'Logout successful' });
        });
    }catch(error){
        console.log(error)
        return res.status(500).json({ error: 'Something went wrong' });
    }
}
