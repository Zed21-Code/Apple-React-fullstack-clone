import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function HeaderLink(props) {
  return (
    <li className="nav-item">
            <Link className="nav-link js-scroll-trigger ps-5 pe-4" style={{ color: "white" }} to={props.linkurl}>
                {props.linkName}
            </Link>
    </li>
  )
}

export default HeaderLink




