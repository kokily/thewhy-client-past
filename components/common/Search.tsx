import React from 'react';

interface SearchProps {
  mode: string;
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.MouseEvent) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function Search({ mode, search, onChange, onSearch, onKeyPress }: SearchProps) {
  return (
    <div className="search-with-select">
      <a href="#" className="mobile-search-toggle-btn mr-2" data-porto-toggle-class="open">
        <i className="icons icon-magnifier text-color-dark text-color-hover-primary" />
      </a>

      <div className="search-form-wrapper input-group">
        <input
          className="form-control text-1"
          type="text"
          name="search"
          value={search}
          onChange={onChange}
          placeholder={`${mode} 검색`}
        />
        <span className="input-group-append">
          <button className="btn" onClick={onSearch}>
            <i className="icons icon-magnifier header-nav-top-icon text-color-dark" />
          </button>
        </span>
      </div>
    </div>
  );
}

export default Search;
