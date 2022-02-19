import './App.css';
import React, { useState } from 'react';
import Article from './components/article/Article';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

import { useFetch } from './utils/useFetch';

function App() {
  const [content, setContent] = useState('en');
  const { data } = useFetch({ language: content });

  const handleClick = (lang) => {
    console.log('language', lang);
    setContent(lang);
  };

  console.log('content', content);

  return (
    <>
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between">
            <div className="col-4">
              <a className="blog-header-logo text-dark" href="#">
                Air Quality
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a
                className="btn btn-sm btn-outline-secondary"
                onClick={() => handleClick('en')}
              >
                English
              </a>
              <a
                className="btn btn-sm btn-outline-secondary"
                onClick={() => handleClick('hi')}
              >
                Hindi
              </a>
            </div>
          </div>
        </header>

        <main>
          <Hero data={data} />
          <Article data={data} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
