import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-6 hidden-xs">
          <div className="error-404">
            404
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <h3 className="nomargin">Lo sentimos, <strong>la página solicitada no se encuentra!</strong></h3>
          <div className="divider nomargin-bottom">{/* divider */}</div>
          <NavLink className="size-16 font-lato" to="/"><i className="glyphicon glyphicon-menu-left margin-right-10 size-12" /> volver a la página Principal</NavLink>
        </div>
      </div>
    </div>
  )
}

export default NotFound