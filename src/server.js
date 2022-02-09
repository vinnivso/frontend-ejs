const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", function(req, res) {
  const items = [
    {
      title: "D",
      message: "esenvolvedor WEB"
    },
    {
      title: "E",
      message: "JS usa Javascript para renderizar HTML"
    },
    {
      title: "M",
      message: "oderavelmente prático para aplicações"
    },
    {
      title: "A",
      message: "plicação de fácil vínculo com BACKEND"
    },
    {
      title: "I",
      message: "nstalar o EJS"
    },
    {
      title: "S",
      message: "intaxe simples"
    }
  ]

  const subtitle = "Uma linguagem de modelagem para criação de página HTML"
  // Passando o array items para o INDEX
  res.render("pages/index", {
    qualities: items,
    subtitle: subtitle
  })
})

app.get("/about", function(req, res) {
  res.render("pages/about")
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is running on port ${port}`))