import { useState } from 'react'
import './App.css'
import { Main } from './components/Main'
import Sidebar from './components/Sidebar'

function App() {

  //配列を用意してこの配列のノートを追加していく
  //notesが複数のノートの情報を持っている。それをProｐsで渡す
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    console.log("新しくノートが追加されました");
    const newNote= {
      id: 1,
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now()
    };
    //スプレッド構文
    //...以前のノート　それにnewNoteを追加していく
    setNotes([...notes, newNote]);
    console.log(notes);
  }

  return <div className="App">
    <Sidebar onAddNote={onAddNote} notes={notes}/>
    <Main />
  </div>
}

export default App
