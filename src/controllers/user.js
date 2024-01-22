const pool = require("../connection");

const listSuppliers = async (req, res) => {
  try {
    const value = req.params.valor;
    const query = `SELECT * from fornecedores WHERE limite_minimo_de_kwh >= $1`;
    const values = [value];
    const nome = await pool.query(query, values);
    return res.json(nome.rows);
  } catch (error) {
    console.log(error);

    return res.status(401).json({ mensagem: "Fornecedor não encontrado." });
  }
};

module.exports = listSuppliers;
