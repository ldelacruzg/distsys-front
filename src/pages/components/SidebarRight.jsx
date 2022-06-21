import InlineSearch from "../../components/InlineSearch"
import Sidebar from "../../components/Sidebar"
import CustomTab from "./CustomTab"

const CustomSidebar = () => {
  return (
    <Sidebar>
      <InlineSearch />
      <hr />
      <CustomTab />
    </Sidebar>
  )
}

export default CustomSidebar