const {
  getUser,
  postUser,
  putPasswordUser,
} = require("../controllers/userControllers");

//* Handler que verifica en la DB si existe el User
const getUserHandler = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await getUser(password, email);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//* Handler que postea el user en la DB
const postUserHandler = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    await postUser({ username, password, email });
    res.status(200).json("Usuario agregado con exito");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//* Handler que modifica la password del usuario
const putPasswordUserHandler = async (req,res) => {
  const {email,password} =req.body
  try {
    await putPasswordUser(email,password)
    res.status(200).json("Contraseña cambiada con exito")
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


module.exports = {
  getUserHandler,
  postUserHandler,
  putPasswordUserHandler,
};
