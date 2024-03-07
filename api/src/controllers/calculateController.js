const calculate = require('../utils/calculaRota');
const db = require('../utils/databasepg');

const calculateRoute = async (req, res) => {
    const { users } = req.body;
    const ids = await calculate(users);

    const orderByCases = ids.map((id, index) => `WHEN ${id} THEN ${index + 1}`).join(' ');

    const query = {
      text: `
        SELECT * 
        FROM users 
        WHERE id IN (${ids.join(', ')}) 
        ORDER BY 
          CASE id
            ${orderByCases}
          END;
      `,
    };

    db.query(query, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports ={
    calculateRoute
}