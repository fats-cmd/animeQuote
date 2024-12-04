import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollProvider } from './components/context/ScrollContext';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import SearchResult from './pages/SearchResult';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <>
    {/* <Layout /> */}
      <BrowserRouter>
        <ScrollProvider>
          <Routes>
              <Route path='/' element={<HomePage />} /> 
              <Route path="/search" element={<SearchResult />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path='*' element={<NotFound />}/>
          </Routes>
        </ScrollProvider>
    </BrowserRouter>

    </>
  );
}

export default App;
