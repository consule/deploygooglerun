const http = require("http")
const server = http.createServer((req, res) => {
    console.log("Pelo VSCode agora foi");
    res.end("Aqui nao pode ter acento")
})

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Escutando 2'))
