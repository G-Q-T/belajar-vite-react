import { useEffect, useState } from "react";

const FormPeserta = ({ OnSimpan, Cancel, pesertaEdit }) => {
    const [nama, setNama] = useState("");
    const [jurusan, setjurusan] = useState("");

    useEffect(() => {
        if (pesertaEdit) {
            setNama(pesertaEdit.nama);
            setjurusan(pesertaEdit.jurusan);
        } else {
            setNama("");
            setjurusan("");
        }
    }, [pesertaEdit]);

    const handleSimpan = (e) => {
        e.preventDefault();
        if (!nama.trim() || !jurusan.trim()) {
            alert("Mohon isi data terlebih dahulu");
            return;
        }
        OnSimpan({
            id: pesertaEdit ? pesertaEdit.id : Date.now(),
            nama,
            jurusan,
        });
        setNama("");
        setjurusan("");
    };

    return (
        <form onSubmit={handleSimpan} action="" method="post" style={{
            background: "#b3abab",
            padding: "16px",
            borderRadius: "8px",
            marginBottom: "20px",
        }}>
            <h3>{pesertaEdit ? "Edit Peserta" : "Tambah Peserta"}</h3>

            <div style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
            }}>
                <input 
                    type="text" 
                    placeholder="nama peserta" 
                    value={nama} 
                    onChange={(e) => setNama(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="nama jurusan" 
                    value={jurusan}
                    onChange={(e) => setjurusan(e.target.value)} 
                    style={{
                        padding: "8px",
                    }} 
                />
                <button type="submit" style={{
                    background: "blue",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}> 
                    {pesertaEdit ? "Update" : "Simpan"} 
                </button>
            </div>
        </form>
    );
};

export default FormPeserta;
