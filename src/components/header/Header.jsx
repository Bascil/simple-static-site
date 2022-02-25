import React, { useState } from 'react';
import { useFetch } from '../../utils/useFetch';

const Header = ({ setData }) => {
  const [content, setContent] = useState('en');
  const { data } = useFetch({ language: content });

  const handleClick = (lang) => {
    console.log('language', lang);
    setContent(lang);
    setData(data);
  };

  return (
    <div>
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
    </div>
  );
};

export default Header;
