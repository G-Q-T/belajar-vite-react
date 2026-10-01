import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import DataPeserta from './components/DataPeserta';
import {Siswa} from './components/Peserta';
import FormPeserta from './components/FormPeserta';

function App() {
  const [listPeserta, setListPeserta] = useState(Siswa);
  const [EditPeserta, setEditPeserta] = useState(null);
  
  const handleSubmit = (DataPeserta) =>{
    if (EditPeserta) {
      setListPeserta(listPeserta.map((item) => (item.id === DataPeserta.id ? DataPeserta:item)));
    setEditPeserta(null);
    }else{
      setListPeserta([...listPeserta,DataPeserta]);
    }
  };
  const handleHapus = (id) =>{
    setListPeserta(listPeserta.filter((item) => item.id !== id));
    if (id=== EditPeserta.id)  {
      setEditPeserta(null);
    }
  }
  return (
  <>
  {/* map : bisa buat looping */}

    <FormPeserta OnSimpan = {handleSubmit} pesertaEdit={EditPeserta}/>
    {/* callback */}
  {listPeserta.map((itemSiswa) => (
    <DataPeserta key={itemSiswa.id} peserta={itemSiswa} onEdit={setEditPeserta} onHapus={handleHapus}/>
  ))};
  {/* listPeserta.map({itemSiswa}) => [

  ]; */}

  {/* +- */}
  </>

)
};

export default App
