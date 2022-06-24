import InlineSearch from "../../components/InlineSearch"
import Sidebar from "../../components/Sidebar"
import CustomTab from "./CustomTab"
import Sidenav from "../../components/Sidenav"
import ListGroup from "../../components/ListGroup"
import ListItem from "../../components/ListGroup/ListItem"
import { useEffect, useState } from "react"
import { posts, units } from "../../data"

const SidebarLeft = () => {
  const [unitsCustom, setUnitsCustom] = useState([]);

  useEffect(() => {
    setUnitsCustom(units.map(({ id, name }) => {
      const post = posts.filter(({ unitsNumber }) => unitsNumber === id);
      return { unitId: id, name, num: post.length }
    }));
  }, []);

  return (
    <Sidebar>
      <InlineSearch />
      <hr />

      <Sidenav title="UNIDADES">
        <ListGroup>
          {unitsCustom.map(({ name, num, unitId }, index) =>
            <ListItem
              key={index}
              title={name}
              num={num}
              unitId={unitId}
            />
          )}
        </ListGroup>
      </Sidenav>

      <CustomTab />
    </Sidebar>
  )
}

export default SidebarLeft