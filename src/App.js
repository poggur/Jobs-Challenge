import './App.css';
import Data from './data.json'
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="w-screen h-screen bg-[#effafa] flex items-center flex-col">
      <div className="bg-[#5ba4a4] w-screen h-[14%] mb-10">
        <div className="bg-banner-desktop w-screen h-[100%] "/>
      </div>

      <div className="w-[85%] h-[15%] bg-white mt-10 shadow-xl flex flex-row rounded-md">
        <div className="w-[10%] h-[100%] flex items-center justify-center ml-5">
          <img src={require('./images/photosnap.svg').default} alt="photosnap" className='w-full h-[75%] m-10'></img>
        </div>

        <div className='flex flex-col justify-evenly ml-5 mt-5'>
          <div className='flex flex-row ml-2'>
            <p className='text-default mr-3 text-tag-text-col'>{Data[0].company}</p>
            <div className='bg-tag-text-col rounded-full mr-3 flex justify-center items-center'>
              <p className='text-default mx-2 text-white'>NEW!</p>
            </div>
            <div className='bg-slate-800 rounded-full mr-3 flex justify-center items-center'>
              <p className='text-default mx-2 text-white'>FEATURED</p>
            </div>
          </div>
          <div>
            <p className='text-title mx-2 text-black'>{Data[0].position}</p>
          </div>
          <div className='flex flex-row ml-2'>
            <p className='text-dark-grey-cyan mr-3 text-tag-text-col'>{Data[0].postedAt}</p>
            <p className='text-dark-grey-cyan mr-3 text-tag-text-col'>{Data[0].contract}</p>
            <p className='text-dark-grey-cyan mr-3 text-tag-text-col'>{Data[0].location}</p>
          </div>
        </div>

        <div className='h-[100%] w-[80%] flex items-center flex-row'>
          <div className='h-[20%] w-[10%] bg-filter-tablets rounded-sm flex items-center justify-center mr-3'>
            <p className='text-default text-tag-text-col'>{Data[0].languages[0]}</p>
          </div>
          <div className='h-[20%] w-[10%] bg-filter-tablets rounded-sm flex items-center justify-center mr-3'>
            <p className='text-default text-tag-text-col'>{Data[0].languages[1]}</p>
          </div>
          <div className='h-[20%] w-[10%] bg-filter-tablets rounded-sm flex items-center justify-center mr-3'>
            <p className='text-default text-tag-text-col'>{Data[0].languages[2]}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
