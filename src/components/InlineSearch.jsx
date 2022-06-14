import React from 'react'

const InlineSearch = () => {
  return (
    <div className="inline-search clearfix margin-bottom-30">
      <form method="get" className="widget_search">
        <input
          type="search"
          placeholder="Buscar..."
          id="s"
          name="s"
          className="serch-input"
        />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  )
}

export default InlineSearch