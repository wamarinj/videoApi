const express = require('express');
const app = express();
const sequelize = require('./src/utils/database');
const initModels = require('./src/models/initModels');
const Users = require('./src/models/users.models');

const videoRoutes = require("./src/routes/videos.routes");
app.use(express.json());

sequelize.authenticate()
.then(() => console.log("Todo bien")) 
.catch((error) => console.log(error));


initModels()
app.use("/api", videoRoutes);

sequelize.sync({force: false }).then(() => 
    console.log("todo ok")
).catch((error)=> console.log(error))

app.listen(3000, () =>{
    console.log(`Hola ${3000}`);
});


// app.get('/api/v1/users', async (req, res) => {
//     try {
//         const result = await Users.findAll();
//         res.status(200).json(result);
//     } catch (error) {
//         console.log(error);
//     }
// });

// app.get("/api/v1/users/:email", async (req, res) => {
//     try{
//         const {email} = req.params;
//         const result = await Users.findOne({
//             where: {email},
//             attributes: ["id", "first_name", "email"],
//         });
//         res.status(200).json(result);
//     } catch (error) {
//         console.log(error);
//     }
// });

//find all quitando datos
app.get("/api/v1/users", async (req, res) => {
    try{
        const result = await Users.findAll({
            attributes: {
            exclude: ["createdAt", "updatedAt"],
            },
        });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

// app.get ("/api/v1/users/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const result = await Users.findByPk(id, {
//             attributes: ["id", "first_name", "email"],
//         });
//         res.status(200).json(result);
//     } catch (error) {
//         console.log (error);
//     }
// });
//nuevo usuario metodo post
app.post('/api/v1/users', async (req, res) => {
    try {
        const newUser = req.body;
        const result = await Users.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        console.log (error);
    }
});

//actualizar usuarios

app.put("/api/v1/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data  = req.body;
        const result = await Users.update(data, {
            where: {id}, 
        });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});


//borrar ususario

app.delete("/api/v1/users/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Users.destroy({
            where: {id},
        });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});