import { useState } from 'react'
import './index.css';

function App() {
  const [color, setColor] = useState("black")
  return (
    <div className="w-full h-screen duration:200"
	style={{backgroundColor: color}} >
    
	<div className="white fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
		test
	</div>
     </div>
  )
}

export default App
