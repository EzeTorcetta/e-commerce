//?----------------------------IMPORTS--------------------------------

const { User } = require("../db");

//?----------------------------CONTROLLERS------------------------------

//*-----------------GET USER---------------------
const getUser = async (password, email) => {
  if (!password) {
    throw new Error("No puede enviar una contraseña vacia");
  } else if (!email) {
    throw new Error("No puede enviar un email vacio");
  } else {
    const findUser = await User.findOne({ where: { email } });
    if (!findUser) {
      throw new Error("El usuario no existe");
    } else {
      const findUser2 = await User.findOne({
        where: { password, email },
        attributes: ["id", "username", "email"],
      });
      if (!findUser2) {
        throw new Error("Contraseña equivocada");
      }

      
      return findUser2;
    }
  }
};

//*---------------CREATE USER---------------------

const postUser = async ({ username, password, email }) => {
  if (!username || !password || !email) {
    throw new Error("Faltan datos");
  } else {
    const findUserByUsername = await User.findOne({ where: { username } });
    const findUserByEmail = await User.findOne({ where: { email } });

    if (findUserByUsername) {
      throw new Error("Ya existe el nombre de usuario");
    } else if (findUserByEmail) {
      throw new Error("Ya existe el email");
    } else {
      await User.create({
        username,
        password,
        email,
      });
      return;
    }
  }
};



//*---------------PUT PASSWORD USER---------------------
const putPasswordUser = async (email, password) => {
  const findUser = await User.findOne({where:{
    email
  }})

  if(!findUser){ throw new Error("El usuario no existe")}

  findUser.password = password

  findUser.save()

  return;
}





module.exports = {
  getUser,
  postUser,
  putPasswordUser,
};
