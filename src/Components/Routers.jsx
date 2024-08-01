import { Routes, Route } from "react-router-dom";
import TVShows from "./TVShows.jsx";
import Movies from "./Movies.jsx";
import Home from "./Home.jsx";
import SearchPage from "./SearchPage.jsx";
import Pricing from "./Pricing.jsx";
import Contact from "./Contact.jsx";



function Routers() {
    return (
        <>
            
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/movies" element={<Movies />}></Route>
                    <Route path="/tvshows" element={<TVShows />}></Route>
                    <Route path="/pricing" element={<Pricing />}></Route>
                    <Route path="/contacts" element={<Contact />}></Route>
                    <Route path="/search" element={<SearchPage />}></Route>
                    
                </Routes>
            
        </>
    )
}
export default Routers;