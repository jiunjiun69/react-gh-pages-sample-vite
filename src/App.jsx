import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [str, setStr] = useState('林修同87'); // 新增一個狀態 str，初始為 '林修同87'

  const handleButtonClick = () => {
    // 按鈕點擊時，將 '87' 字串連接在一起
    setStr((prevStr) => prevStr + '87');
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          {/* 顯示連接後的字串 */}
          87 string: {str}
        </p>
        <button onClick={handleButtonClick}>Concatenate '87'</button> {/* 新增的按鈕 */}

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
