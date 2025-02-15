import User from "../model/user.model.js";

const Login = async (req, res) => {
    const { email, password } = req.body;
    try {

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = await user.generateAuthToken();
        res.status(200).json({ token });
        res.cookie("jwtoken", token);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' });
    }


}