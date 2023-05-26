import React from 'react'
import "./Sidebar.css";

const Sidebar = ({onAddNote}) => {
  return (
    <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>ノート</h1>
            <button onClick={onAddNote}> 追加</button>
        </div>    
        <div className="app-sidebar-notes">
            <div className="app-sidebar-note">
                <div className="sidebar-note-title">
                    <strong>タイトル0</strong>
                    <button>削除</button>
                </div>    
            <p>ノートの内容です</p>
            <small>最後の修正日：xx/xxx</small>
            </div>

            <div className="app-sidebar-note">
                <div className="sidebar-note-title">
                    <strong>タイトル1</strong>
                    <button>削除</button>
                </div>    
            <p>ノートの内容です</p>
            <small>最後の修正日：xx/xxx</small>
            </div>

            <div className="app-sidebar-note">
                <div className="sidebar-note-title">
                    <strong>タイトル2</strong>
                    <button>削除</button>
                </div>    
            <p>ノートの内容です</p>
            <small>最後の修正日：xx/xxx</small>
            </div>

            <div className="app-sidebar-note">
                <div className="sidebar-note-title">
                    <strong>タイトル3</strong>
                    <button>削除</button>
                </div>    
            <p>ノートの内容です</p>
            <small>最後の修正日：xx/xxx</small>
            </div>

            <div className="app-sidebar-note">
                <div className="sidebar-note-title">
                    <strong>タイトル4</strong>
                    <button>削除</button>
                </div>    
            <p>ノートの内容です</p>
            <small>最後の修正日：xx/xxx</small>
            </div>

            <div className="app-sidebar-note">
                <div className="sidebar-note-title">
                    <strong>タイトル5</strong>
                    <button>削除</button>
                </div>    
            <p>ノートの内容です</p>
            <small>最後の修正日：xx/xxx</small>
            </div>

            <div className="app-sidebar-note">
                <div className="sidebar-note-title">
                    <strong>タイトル6</strong>
                    <button>削除</button>
                </div>    
            <p>ノートの内容です</p>
            <small>最後の修正日：xx/xxx</small>
            </div>

            <div className="app-sidebar-note">
                <div className="sidebar-note-title">
                    <strong>タイトル7</strong>
                    <button>削除</button>
                </div>    
            <p>ノートの内容です</p>
            <small>最後の修正日：xx/xxx</small>
            </div>

        </div>
    </div>
  );
}

export default Sidebar