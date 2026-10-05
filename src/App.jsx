import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import DataPeserta from './components/DataPeserta';
import {Siswa} from './components/Peserta';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Pages/Login.jsx';
import {BrowserRouter,Routes,Route,Navigate, replace} from "react-router-dom";
import { Form } from 'react-bootstrap'
import Dashboard from './Pages/Dashboard.jsx';
import MainLayout from './Pages/MainLayout.jsx';
import ListUser from './User/List.jsx';

function App() {
<<<<<<< HEADgit add src/App.jsx src/components/FormPeserta.jsx
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
    if (EditPeserta && id === EditPeserta.id)  {
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
  ))}
  {/* listPeserta.map({itemSiswa}) => [
=======
  return(
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to="/Login" replace/>}></Route>
      <Route element={<MainLayout/>}>
>>>>>>> fc4d58b (eror ni)

      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/User' element={<ListUser/>}></Route>
      </Route>
      <Route path='/Login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>

  </>

  )
};

export default App;
// const [listPeserta, setListPeserta] = useState(Siswa);
  // const [EditPeserta, setEditPeserta] = useState(null);
  
  // const handleSubmit = (DataPeserta) =>{
  //   if (EditPeserta) {
  //     setListPeserta(listPeserta.map((item) => (item.id === DataPeserta.id ? DataPeserta:item)));
  //   setEditPeserta(null);
  //   }else{
  //     setListPeserta([...listPeserta,DataPeserta]);
  //   }
  // };
  // const handleHapus = (id) =>{
  //   setListPeserta(listPeserta.filter((item) => item.id !== id));
  //   if (id=== EditPeserta.id)  {
  //     setEditPeserta(null);
  //   }
  // }
  // return (
  // <>
  // {/* map : bisa buat looping */}

  //   <FormPeserta OnSimpan = {handleSubmit} pesertaEdit={EditPeserta}/>
  //   {/* callback */}
  // {listPeserta.map((itemSiswa) => (
  //   <DataPeserta key={itemSiswa.id} peserta={itemSiswa} onEdit={setEditPeserta} onHapus={handleHapus}/>
  // ))};
  // {/* listPeserta.map({itemSiswa}) => [

  // ]; */}

  // {/* +- */}

