const http = require("http")
const server = http.createServer((req, res) => {
    console.log("Pelo VSCode agora foi  com o yaml do google");
    res.end("Este é um teste enviado pelo vscode")
})

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Escutando 2'))
