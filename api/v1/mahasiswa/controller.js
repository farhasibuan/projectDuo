import mahasiswa from "./model.js";

const tampilMahasiswa = (req, res) => {
    res.render("mahasiswa/index", {
        data: mahasiswa,
        judul: "Daftar Mahasiswa"

    })
}

export { tampilMahasiswa }