import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="app">
        <Header />
    {/*    Header   */}
        <div className="app__page">
            <Sidebar />
        {/*    Sidebar */}

            <MainContainer />
        </div>
    </div>
  );
}

export default App;
