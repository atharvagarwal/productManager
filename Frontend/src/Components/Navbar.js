import React,{useState} from 'react'


const Navbar = () => {
    const [toggle,setToggle]=useState('hidden lg:visible')
    const [align,setAlign] = useState('flex-row-reverse')
    const[disp,setDisp]=useState(false)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white px-12">
  <div className="flex items-center flex-shrink-0 text-black md:mr-6  ">
   <a href="/" ><span><img src="logo1.png" className="w-64 md:w-[27%] mr-10 p-4"></img></span></a>
  </div>
  <div className="block lg:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-black hover:border-white" onClick={(e)=>{
        if(disp===false){
        setToggle('block lg:visible');setDisp(true);
        setAlign('justify-center items-center')
    }
        else{
         setToggle('hidden lg:visible')
         setAlign('flex-row-reverse')
         setDisp(false);
        }
    }}>
     <img src="hamburg.png"></img>
    </button>
  </div>
  <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${toggle}`}>
    <div className={`text-lg lg:flex-grow flex gap-6 ${align} text-black font-medium lg:px-12`}>
    <span className=''>
      </span>
      <span>
      <a href="/catalogue" className="inline mt-4 text-xl lg:text-2xl  lg:mt-0  hover:underline">
      Catalogue
      </a>
      </span>
      <span>
      <a href="/product" className="inline mt-4 text-xl lg:text-2xl  lg:mt-0  hover:underline">
      Add Products
      </a>
      </span>
      <span>
      <a href="/category" className="inline mt-4 text-xl lg:text-2xl  lg:mt-0  hover:underline">
      Add Category
      </a>
      </span>
    </div>
   
  </div>
</nav>
  )
}

export default Navbar