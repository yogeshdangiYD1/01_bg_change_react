import { useState } from 'react'
import './index.css';

function App() {
  const [color, setColor] = useState("skyblue");
  return (
    <div className="w-full h-screen duration:200"
	style={{backgroundColor: color}} >
    
<p className="h-screen flex justify-center text-white items-center text-center text-5xl">
This is {color} color.
</p>
	<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
		<div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-white rounded-3xl ">
		
<button className="px-4 py-1 outline-none rounded-xl" 
		style={{backgroundColor: "black"}}
		onClick={() => setColor("black")}>
		Black
		</button>


<button className="px-4 py-1 outline-none rounded-xl text-white"
                style={{backgroundColor: "red"}}
                onClick={() => setColor("red")}>
                Red
                </button>

<button className="px-4 py-1 outline-none rounded-xl text-center text-white"
                style={{backgroundColor: "green"}}
                onClick={() => setColor("green")}>
                Green
                </button>

<button className="px-4 py-1 outline-none rounded-xl text-white"
                style={{backgroundColor: "blue"}}
                onClick={() => setColor("blue")}>
                Blue
                </button>

<button className="px-4 py-1 outline-none rounded-xl text-white"
                style={{backgroundColor: "yellow"}}
                onClick={() => setColor("yellow")}>
                Yellow
                </button>

<button className="px-4 py-1 outline-none rounded-xl text-white"
                style={{backgroundColor: "pink"}}
                onClick={() => setColor("pink")}>
                Pink
                </button>

<button className="px-4 py-1 outline-none rounded-xl text-white"
                style={{backgroundColor: "orange"}}
                onClick={() => setColor("orange")}>
                Orange
                </button>

<button className="px-4 py-1 outline-none rounded-xl text-white"
                style={{backgroundColor: "olive"}}
                onClick={() => setColor("olive")}>
                Olive
                </button>
		</div>		  
	</div>
     </div>
  )
}

export default App
