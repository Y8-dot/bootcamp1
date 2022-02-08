const userCtrl = {}

const User = require('../models/Users')

//GET
userCtrl.getUser = async(req, res) => {
    const users = await User.find()
    res.json(users)
}

//POST
userCtrl.createUser = async(req, res) => {
    const {name, lastname, mail, user, birthday} = req.body;
    const newUser = new User({
        name: name,
        lastname: lastname,
        mail: mail,
        user: user,
        birthday : birthday
    })
    await newUser.save();
    res.json({message: "el usuario se ha creado"})
}


userCtrl.getUsuario = async(req, res) => {
    const user = await User.findById(req.params.id)
    res.json(user)
}
//DELETE
userCtrl.deleteUser = async(req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({message: "Usuario ha sido eliminado"})
}

//PUT
userCtrl.updateUser = async(req, res) => {
    const {name, lastname, mail, user, birthday} = req.body;
    await User.findByIdAndUpdate(req.params.id,{
       name,
       lastname,
       mail,
       user,
       birthday
    })
    res.json({message: "Se ha actualizado el usuario"})
}

module.exports= userCtrl;