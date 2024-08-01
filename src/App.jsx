
import NavBar from "./Components/NavBar";
import TopBar from "./Components/TopBar";
import Routers from "./Components/Routers.jsx";
import MovieProvider from "./Components/ContextApi/MovieProvider.jsx";




function App() {
  return (
    <>

      <MovieProvider>
        <TopBar />
        
      <div className="flex">
        <NavBar className="mb-0" />

        <Routers className="mb-0" />
      </div>

      </MovieProvider>


    </>
  )
}

export default App;
