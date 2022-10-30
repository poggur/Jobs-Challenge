import './App.css';
import Data from './data.json'

function App() {
  return (
    <>
      {
        Data.map((data, i) => {
          return (
            <div className="w-screen h-screen bg-[#effafa] flex items-center flex-col">
              <div className="bg-[#5ba4a4] w-screen h-[14%] 2xl:h-[9%] mb-10">
                <div className="bg-banner-desktop w-screen h-[100%] " />
              </div>

              <div className="w-[85%] h-[15%] bg-white mt-10 shadow-xl flex flex-row rounded-md">
                <div className="w-[12%] h-[100%] flex items-center justify-center ml-5">
                  <img src={require('./images/photosnap.svg').default} alt="photosnap" className='w-full h-[75%] m-10'></img>
                </div>

                <div className='flex flex-col justify-evenly ml-5 mt-5'>
                  <div className='flex flex-row ml-2'>
                    <p className='text-default mr-3 text-tag-text-col 2xl:text-default-large' key={i}>{data.company}</p>
                    <div className='bg-tag-text-col rounded-full mr-3 flex justify-center items-center'>
                      <p className='text-default mx-2 text-white 2xl:text-default-large'>NEW!</p>
                    </div>
                    <div className='bg-slate-800 rounded-full mr-3 flex justify-center items-center'>
                      <p className='text-default mx-2 text-white 2xl:text-default-large'>FEATURED</p>
                    </div>
                  </div>
                  <div>
                    <p className='text-title mx-2 text-black 2xl:text-title-large' key={i}>{data.position}</p>
                  </div>
                  <div className='flex flex-row ml-2'>
                    <p className='text-dark-grey-cyan mr-3 text-tag-text-col 2xl:text-default-large' key={i}>{data.postedAt}</p>
                    <p className='text-dark-grey-cyan mr-3 text-tag-text-col 2xl:text-default-large' key={i}>{data.contract}</p>
                    <p className='text-dark-grey-cyan mr-3 text-tag-text-col 2xl:text-default-large' key={i}>{data.location}</p>
                  </div>
                </div>

                <div className='h-[100%] w-[80%] flex items-center flex-row justify-end'>
                  {data.languages.map((lang, x) => {
                    return (
                      <div className='h-[20%] w-[10%] bg-filter-tablets rounded-sm flex items-center justify-center mr-3'>
                        <p className='text-default text-tag-text-col 2xl:text-default-large' key={x}>{lang}</p>
                      </div>
                    )
                  })}
                  {data.tools.map((tools, x) => {
                    return (
                      <div className='h-[20%] w-[10%] bg-filter-tablets rounded-sm flex items-center justify-center mr-3'>
                        <p className='text-default text-tag-text-col 2xl:text-default-large' key={x}>{tools}</p>
                      </div>
                    )
                  })}
                  <div className='h-[20%] w-[10%] bg-filter-tablets rounded-sm flex items-center justify-center mr-3'>
                    <p className='text-default text-tag-text-col 2xl:text-default-large' key={i}>{data.role}</p>
                  </div>
                  <div className='h-[20%] w-[10%] bg-filter-tablets rounded-sm flex items-center justify-center mr-3'>
                    <p className='text-default text-tag-text-col 2xl:text-default-large' key={i}>{data.level}</p>
                  </div>
                </div>
              </div>

            </div>
          )

        })
      };
    </>
    //Little note: Im currently fucking dying inside
  );
}

export default App;
