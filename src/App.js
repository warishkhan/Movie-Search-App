import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import PopularPage from "./components/PopularPage";
import TopRatedPage from "./components/TopRatedPage";
import MovieDetailPage from "./components/MovieDetailPage";
import NotFoundPage from "./components/NotFoundPage";
import store from "./store";
import SearchPage from "./components/SearchPage";
import UpComingMovie from "./components/UpComingMovie";
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  return (
    <Provider store={store}>
      <Router>
      <Navbar setSearch={setSearch} search={search}/>
        <Routes>
          <Route path="/" element={<PopularPage />} />
          <Route path="/top-rated" element={<TopRatedPage />} />
          <Route path="/upcoming" element={<UpComingMovie/>} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/search" element={<SearchPage search={search} setSearch={setSearch}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
