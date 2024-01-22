const express = require("express");

const router = express();

const listarFornecedores = require("./controllers/user");

router.get("/listarfornecedores/:valor", listarFornecedores);

module.exports = router;
