import express  from "express"
import expressEjsLayouts from "express-ejs-layouts"
//konfigurasi pertama untuk template adminLTE yang berada di dalam direktori public
import routerMahasiswa from "./api/v1/mahasiswa/router.js"
import routerDosen from "./api/v1/dosen/router.js"
import path from "path"
import { fileURLToPath } from "url"

//cek path direktori saat ini
const _dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
app.set("view engine", "ejs")
app.use(expressEjsLayouts)
app.set("layout", "template/app")
app.use(express.static(path.join(_dirname, "public")))

app.use('/mahasiswa', routerMahasiswa)
app.use('/dosen', routerDosen)

app.listen(3000, () => {
    console.log("Server berjalan")
})