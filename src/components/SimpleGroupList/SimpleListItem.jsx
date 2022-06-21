import { useState } from "react";
import { Link } from "react-router-dom";

const SimpleListItem = ({ title = "property title", href = "#" }) => {
  const [active, setActive] = useState(false);

  const customActive = {
    color: "white",
    backgroundColor: "#8ab933",
    borderColor: "#8ab933"
  }

  return (
    <Link
      to={href}
      style={active ? customActive : {}}
      className={`list-group-item`}
      onMouseEnter={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      {title}
    </Link>
  )
}

export default SimpleListItem