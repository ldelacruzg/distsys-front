import React, { useState } from 'react'
import { posts } from '../data';
import SimpleGroupList from './SimpleGroupList';
import SimpleListItem from './SimpleGroupList/SimpleListItem';

const InlineSearch = () => {
  const [search, setSearch] = useState("");
  const [filterPosts, setFilterPosts] = useState([]);

  const handleOnChange = (e) => {
    const getValue = e.target.value;
    setSearch(getValue);
    if (getValue === "") {
      setFilterPosts([]);
    }
  }

  const handleOnClick = (e) => {
    /**
     * 1. Buscar coincidecias en los posts 
     * 2. Mostrar una lista de las coincidencias
     * 3. Al presionar un item te mande al detalle del post
     */
    if (search !== "") {
      const result = posts.filter(({ title }) =>
        title.toLowerCase().includes(search.toLowerCase())
      );
      setFilterPosts(result);
    } else {
      setFilterPosts([]);
    }
  }

  return (
    <>
      <div className="inline-search clearfix">
        <form className="widget_search">
          <input
            type="search"
            placeholder="Buscar..."
            id="search"
            name="search"
            className="serch-input"
            value={search}
            onChange={handleOnChange}
            autoComplete={"off"}
          />
          <button type="button" onClick={handleOnClick}>
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      {filterPosts.length > 0 ? (
        <SimpleGroupList>
          {filterPosts.map(({ title, id }, index) => (
            <SimpleListItem
              key={index}
              title={title}
              href={`/blog/posts/${id}`}
            />
          ))}
        </SimpleGroupList>
      ) : (
        ""
      )}
    </>
  );
}

export default InlineSearch