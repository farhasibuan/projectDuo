import dosen from "./model.js";

const tampilDosen = (req, res) => {
    res.render("dosen/index", {
        data: dosen,
        judul: "Daftar Dosen"
    })
};

export { tampilDosen };