import InlineSearch from "../../components/InlineSearch"
import Sidebar from "../../components/Sidebar"
import CustomTab from "./CustomTab"
import Sidenav from "../../components/Sidenav"
import ListGroup from "../../components/ListGroup"
import ListItem from "../../components/ListGroup/ListItem"

const SidebarLeft = () => {
  return (
    <Sidebar>
      <InlineSearch />
      <hr />

      <Sidenav title="UNIDADES">
        <ListGroup>
          <ListItem
            title="Aplicaciones Distribuidas - Una visión global"
            num="0"
          />
          <ListItem title="El paradigma Cliente/Servidor" num="0" />
          <ListItem title="Sockets" num="0" />
          <ListItem title="Programación distribuida" num="0" />
          <ListItem title="Hilos" num="0" />
          <ListItem title="Arquitectura de aplicaciones" num="0" />
        </ListGroup>
      </Sidenav>

      <CustomTab />
    </Sidebar>
  )
}

export default SidebarLeft