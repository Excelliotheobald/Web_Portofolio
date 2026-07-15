export default function Navbar (){

  return(

<div className="p-5 ">
  <nav className="z-50 fixed top-3 left-1/2 -translate-x-1/2 w-150  bg-white shadow-[0_2px_15px_rgba(0,0,0,0.15)] rounded-4xl border border-white">
    <div className="flex items-center justify-between px-6 py-2">

      <h1 className="text-black font-semibold font-inter">
        Excellio
      </h1>

      <ul className="flex gap-8  text-black text-sm font-inter font-semibold">
        <li className="opacity-50 cursor-pointer hover:opacity-100 transition duration-300">Home</li>
        <li className="opacity-50 cursor-pointer hover:opacity-100 transition duration-300">About</li>
        <li className="opacity-50 cursor-pointer hover:opacity-100 transition duration-300">Project</li>
       
        
      </ul> 
          <div className="flex gap-8  text-white text-sm font-semibold font-inter hover:opacity-80 transition-opacity duration-300">
              <div className="cursor-pointer flex p-2 bg-black rounded-3xl w-fit">
                Contact Person
              </div>
          </div>
    </div>
  </nav>
</div>

  );

}