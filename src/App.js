import './App.css';
import Screen from './pages/Screen';

function App() {
  return (
    <div className="crosshatch-container font-Pixel flex-col">
      <hr className="p-2 line1 w-full"/>
      <hr className="p-2 line2 w-full"/>
      <div className="content center">
        <Screen />  
      </div>
    </div>
  );
}

export default App;
