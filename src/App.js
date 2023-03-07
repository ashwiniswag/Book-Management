import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Component/Menubar';
import { useState } from 'react';
import TableComponent from './Component/TableComponent';
import ModalComponent from './Component/ModalComponent';

function App() {

  const [booksData, setBooksData] = useState([]);
  const [isVisible,setIsVisible] = useState(false);

  return (
    <div className="App">
      <Menubar 
        showModal={setIsVisible} />
      {booksData.length>0 ? <TableComponent
        booksData={booksData}
        setBooksData={setBooksData} /> : <p>No Books Issued</p>}
      <ModalComponent
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        booksData={booksData}
        setBooksData={setBooksData} />
    </div>
  );
}

export default App;
