const DataPeserta = ({peserta,onHapus,onEdit})=>{

    return(
        <>
        
        <div 
        style={{
        border:"1px solid green" , 
        borderRadius:"8px", 
        padding:"16px" ,
        margin:"8px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        boxShadow:"0 2px 4px #000",
        }}

        
        >
        <div>
            <h4 style={{
                margin:"0 0 6px",
                fontSize: "18ox",

            }}>{peserta.nama}</h4>
            <p>Jurusan: {peserta.jurusan}</p>
        </div>
        </div>
        <div style={{
            display:"flex",
            gap:"8px",

        }}>
        <button onClick={()=> onEdit(peserta) } type="">Edit</button>
        <button onClick={() =>onHapus(peserta.id)} type="">Hapus</button>

        </div>
        </>
    )

};
export default DataPeserta;