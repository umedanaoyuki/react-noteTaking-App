import { useState } from 'react'
import './App.css'
import { Main } from './components/Main'
import Sidebar from './components/Sidebar'

function App() {

  //配列を用意してこの配列のノートを追加していく
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    console.log("新しくノートが追加されました");
    const newNote= {
      id: 1,
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now()
    };
    setNotes(newNote);
    console.log(notes);
  }

  return <div className="App">
    <Sidebar onAddNote={onAddNote}/>
    <Main />
  </div>
}

export default App
