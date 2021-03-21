const http = require("http")
const server = http.createServer((req, res) => {
    console.log("Pelo VSCode");
    res.end("Aqui não pode ter acento")
})

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Escutando 2'))
