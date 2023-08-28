import './App.css';
import HLine from './components/HLine/HLine';
import LinkBar from './components/LinkBar';
import Screen from './pages/Screen';

function App() {
  return (
    <>
      <div className="crosshatch-container font-Pixel flex-col h-[calc(100vh-74px)] sm:md:lg:h-screen">
        <div className="flex flex-row w-full">
          <div className="w-2/6 md:w-4/6 lg:w-4/6">
            <HLine />
          </div>
          <div className="w-3/6 h-1/2 md:w-1/6 lg:w-1/6">
            <LinkBar />
          </div>
          <div className="w-1/6">
            <HLine />
          </div>
        </div>
        
        <div className="content center h-5/6 w-5/6 md:4/5 lg:4/5">
          <Screen />  
        </div>
      </div>
    </>
  );
}

export default App;
