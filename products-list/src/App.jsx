import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Favorites from "./Favorites"
import Layout from "./Layout"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setFavorites } from "./store/slices/products"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');

    const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    dispatch(setFavorites(favorites));

}, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App