import{useEffect, useState} from "react";
const FormPeserta = (OnSimpan, Cancel,pesertaEdit) =>{
    const[nama,setNama] = useState("");
    const[jurusan,setjurusan] = useState("");
    useEffect(() =>{
        if (pesertaEdit) {
            setNama(pesertaEdit.nama);
            setNama(pesertaEdit.jurusan);
        }else{
            setNama("");
            setjurusan("");
        }
    },[pesertaEdit])
    const handleSimpan = (e) =>{
        e.preventDefault();
        OnSimpan({
            id: pesertaEdit? pesertaEdit.id :+ Date.now(),
            nama,
            jurusan,
        });
        setNama("");
        setjurusan("");
    };
    return(
        <form onSubmit={handleSimpan} action="" method="post" style={{
             background: "#b3abab",
            padding: "16px",
            borderRadius: "8px",
            marginBottom: "20px",
        }}
        >
            <h3>tambah peserta</h3>
        
        <div style={{
            display:"flex",
            gap:"8px",
            flexWrap:"wrap",
        }}>
        <input type="text" placeholder="nama peserta" value={nama} onChange={(nama) =>setNama(nama.target.value)} />
        <input type="text" placeholder=" nama jurusan" value={jurusan}
        onChange={(jurusan) =>setjurusan(jurusan.target.value)} style={{
            padding:"8px",
        }} />
        <button type="submit" style={{
            background: "blue",
            color: "white",
            border:"none",
            borderRadius:"4px",
            cursor:"pointer",
        }}> simpan </button>
        </div>
        </form>
    );
};

export default FormPeserta;
