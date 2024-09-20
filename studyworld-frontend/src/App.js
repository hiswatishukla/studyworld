import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Search from './pages/Search';
import Instructors from './pages/Instructors';
import Courses from './pages/Courses';
import Enrollments from './pages/Enrollments';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/enrollments" element={<Enrollments />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
