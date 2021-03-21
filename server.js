const http = require("http")
const server = http.createServer((req, res) => {
    console.log("New Conneciont");
    res.end("É nozes")
})

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Escutando'))
