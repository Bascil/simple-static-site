import React from 'react';

const Header = ({ data }) => {
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
            <a className="link-secondary" href="#" aria-label="Search"></a>
            <a className="btn btn-sm btn-outline-secondary" href="#">
              English
            </a>
            <a className="btn btn-sm btn-outline-secondary" href="#">
              Hindi
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
