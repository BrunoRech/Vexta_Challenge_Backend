require('./database');

const express = require('express');
const cors = require('cors');
const routes = require('./Routes');
const validate = require('express-validation');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use(async (err, req, res, next) => {
    if (err instanceof validate.ValidationError) {
        console.log('aaaa', err.errors[0].messages)
       return res
       // .status(err.status)
        .json({ error: err.errors[0].messages[0] });
    }

    return res.status(err.status || 500).json({ error: 'Erro do Servidor' });
  });
app.listen(3333);