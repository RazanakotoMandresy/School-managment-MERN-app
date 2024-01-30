const bcryptjs = require("bcryptjs");
const Auth = require("../models/Auth");
const { sign } = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password, salt);
    const body = { name, email, password: hash };
    const user = await Auth.create(body);
    const token = await sign(
      { userId: user._id, userName: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.json({ user, token });
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json(`veillez remplire correctement le champ svp`);
    }
    const user = await Auth.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json(`aucun utilisateur avec l'email ${email} n'as ete trouve`);
    }
    const correctPassword = await bcryptjs.compare(password, user.password);
    if (!correctPassword) {
      return res.status(400).json(`veillez ressayer le mot de passe svp `);
    }
    const token = await sign(
      { userId: user._id, userName: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );
    res.status(200).json({ user, token });
  } catch (error) {
    res.json(error);
  }
};
const whoIsConnected = async (req, res) => {
  try {
    res.status(200).json({ userId: req.user.userId, name: req.user.userName });
    } catch (error) {
    res.status(500).json({ msg: `${error}` });
  }
};
module.exports = { register, login, whoIsConnected };
