const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const checkEmailExists = "SELECT u FROM users u WHERE u.email = $1";
const createUser = "INSERT INTO users (name, email, phone, coordinates) VALUES ($1, $2, $3, $4)";
const updateUser = "UPDATE users SET name = $1, email = $2, phone = $3, coordinates = $4 WHERE id = $5";
const deleteUser = "DELETE FROM users WHERE id = $1";

module.exports = {
    getUsers,
    getUserById,
    checkEmailExists,
    createUser,
    updateUser,
    deleteUser
}