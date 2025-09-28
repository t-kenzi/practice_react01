import { useState } from 'react'

const Counter = () => {
  const [text, setText] = useState(" ") // 先に text を定義！
  const [count, setCount] = useState(0) // 初期値は 0 など明示するのが安全

  return (
    <>
      <p>現在の数字は{count}です</p>
      <button onClick={() => setCount(prev => prev + 1)}>+ 1</button>
      <button onClick={() => setCount(prev => prev - 1)}>- 1</button>

      <p>
        値を入力：
        <input value={text} onChange={(e) => setText(e.target.value)} />
        {text}
      </p>

      <button onClick={() => setCount(Number(text))}>入力値でカウントを更新</button>
      <button onClick={() => setCount(0)}>最初の数値に戻す</button>
    </>
  )
}

export default Counter