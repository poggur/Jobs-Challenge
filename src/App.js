import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="w-screen h-screen bg-[#effafa] flex items-center flex-col">
      <div className="bg-[#5ba4a4] w-screen h-[15%] mb-10">
        <div className="bg-banner-desktop w-screen h-[100%] "/>
      </div>

      <div className="w-[85%] h-[15%] bg-white mt-10 shadow-xl flex flex-row rounded-md">
        <div className="w-[7.5%] h-[100%] flex items-center justify-center">
          <img src={require('./images/photosnap.svg').default} alt="photosnap" className='w-full h-[75%] m-10'></img>
        </div>
        <div className='flex flex-col'>
          <div className=''>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
