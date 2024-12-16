import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const ResortDirectory = () => {
     return (
          <div> 
               <h1 className='pt-5 pl-2 text-xl font-bold text-[#0077BE]'>Resort Directory Regions</h1>
               <div className='py-5'>
               
               <Link to="login">
               <div className='border-t py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>USA</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>

               <Link to="resort-directory">
               <div className='border-t py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>Northern Africa</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>

               <Link>
               <div className='border-t py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>Southern Africa</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>

               <Link to="create-profile">
               <div className='border-t py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>Asia</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>

               <Link>
               <div className='border-y py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>Europe</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>

               <Link>
               <div className='border-y py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>Middle Est</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>

               <Link>
               <div className='border-y py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>South Pacific Islands</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>
               <Link>
               
               <div className='border-y py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>Caribbean, Mexico & Central America</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>

               <Link>
               <div className='border-y py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>Eastern Canada</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>

               <Link>
               <div className='border-y py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>South America</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>

               <Link>
               <div className='border-y py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>Australia & New Zealand</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>

               <Link>
               <div className='border-y py-2 px-3 hover:bg-slate-300 flex justify-between'> <p>Canada - Western & Canadian Rockies</p>
               <IoIosArrowForward className='font-bold text-xl text-orange-500' />
               </div>
               </Link>

          </div>
          </div>
     );
};

export default ResortDirectory;