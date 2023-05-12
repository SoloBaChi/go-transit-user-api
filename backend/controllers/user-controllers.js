const User = require("../models/user-model.js");
const bcrypt = require("bcrypt");

const signup = async (req, res, next) => {
  const { name, email, password,confirmPassword} = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({ message: "User Exists! Login Instead!" });
  }
  const saltRounds = 10;
  const saltRound2 = 10;
  const salt1 = bcrypt.genSaltSync(saltRounds);
  const salt2 = bcrypt.genSaltSync(saltRound2);
  const hashedPassword = bcrypt.hashSync(password, salt1);
  const hashedConfirmedPassword = bcrypt.hashSync(confirmPassword, salt2);

  const user = new User({
    email,
    password: hashedPassword,
    confirmPassword:hashedConfirmedPassword,
    name,
  });
  try {
    if(password !== confirmPassword){
      return res.status(404).json({message:"Password does not match"})
    }
    await user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ user });
};
const userDetails = async (req, res) => {
  try {
    const allUsers = await User.find({})
    res.status(200).json({ data: allUsers })
  } catch (e) {
    console.log(e.message)
    res.status(400).end
  }
}

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "No User With That Email" });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Incorrect Password" });
  }
  return res.status(200).json({ message: "Login Successful." });
};

module.exports = { signup, login, userDetails };
