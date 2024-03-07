const db = require('../utils/databasepg');
const queries = require('../utils/queries');

const getUsers = (req, res) => {
    db.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    db.query(queries.getUserById, [id],(error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const createUser = (req, res) => {
    const {name, email, phone, coordinates} = req.body;
    db.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length){
            res.status(400).send("Email já existente");
        }

        db.query(
            queries.createUser,
            [name, email, phone, coordinates],
            (error, results) => {
            if (error) throw error;
            res.status(201).send("Usuário criado com sucesso!");
        })
    })
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, phone, coordinates } = req.body;
    db.query(queries.getUserById, [id],(error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send('Usuário não existente no banco de dados')
        }

        db.query(queries.updateUser, [name, email, phone, coordinates, id],(error, results) => {
            if (error) throw error;
            res.status(200).send('Usuário atualizado com sucesso');
        })
    })
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    db.query(queries.getUserById, [id],(error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send('Usuário não existente no banco de dados')
        }

        db.query(queries.deleteUser, [id],(error, results) => {
            if (error) throw error;
            res.status(200).send('Usuário deletado com sucesso');
        })
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}