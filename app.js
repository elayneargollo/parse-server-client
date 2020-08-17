/* Declaração das variáveis */
const express = require("express"),
  app = express();

app.use(express.static("public"));

/* Requisicao para a página inicial */
app.get("/", function(req, res) {
  res.sendFile("/index.html");
 
});

app.listen(5501, () => {
  console.log(`App listening at http://127.0.0.1:5501/index.html`)

})