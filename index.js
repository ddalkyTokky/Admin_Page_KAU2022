const express = require("express");
const cors = require('cors');
const router = express.Router();
const bcrypt = require('bcrypt');
const util = require('util');
const jwt = require('./modules/jwt');
var requestIp = require('request-ip');
const authUtil = require('./middlewares/auth_and_send').checkToken

const hostip = '0.0.0.0';
const port = 3001
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json())
app.use(express.urlencoded({ extends: true }))

app.use(cors());

var server = app.listen(port, hostip, function () {
  const time = new Date();
  console.log("=================");
  console.log("server on");
  console.log(time.toLocaleString('ko-kr'));
  console.log("=================");
})

app.get('/', async function (req, res) {
  //res.json(users);
  const time = new Date();
  console.log("=================");
  console.log("get");
  console.log(String(req.headers.request_type));
  console.log(time.toLocaleString('ko-kr'));
  console.log(requestIp.getClientIp(req));
  console.log("=================");
  //console.log(req.headers);
  authUtil(req, res);
});

//router.get('/', authUtil);

app.post('/', async function (req, res) {
  const time = new Date();
  console.log("=================");
  console.log("post");
  console.log(time.toLocaleString('ko-kr'));
  console.log(requestIp.getClientIp(req));
  console.log("=================");
  //res.send("Post data reached");
  const id_field = req.body.id_field;

  const return_code = await login_check(id_field, req.body.pw_field);

  if (return_code == 'success') {
    const jwtToken = await jwt.sign(String(id_field));
    //console.log(jwtToken);

    res.send(
      {
        message: 'success',
        token: jwtToken.token
      }
    )
  }
  else if (return_code == 'fail') {
    res.send(
      { message: 'fail' }
    )
  }
});

module.exports = router;

//====================================================================

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function login_check(input_id, input_pw) {

  /*
  console.log(String(input_pw));

  const encrypted = String(bcrypt.hashSync(String(input_pw), 10));

  await prisma.$executeRaw`INSERT INTO Users VALUES (${String(input_id)}, ${encrypted})`;
  */

  const pwFromDB = await prisma.$queryRaw`SELECT pw FROM Users WHERE id = ${input_id}`;

  if (pwFromDB.length) {
    if (bcrypt.compareSync(String(input_pw), String(pwFromDB[0].pw))) {
      return 'success'
    }
  }

  return 'fail'
}

login_check()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
