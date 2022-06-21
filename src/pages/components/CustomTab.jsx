import Tabs from "../../components/Tabs"
import TabItem from "../../components/Tabs/TabItem"
import TabPane from "../../components/Tabs/TabPane"
import { tabsHeader } from "../../data"

const CustomTab = () => {
  return (
    <Tabs values={tabsHeader}>
      <TabPane id={1}>
        <TabItem
          title="Curabitur pellentesque neque eget diam"
          date="June 29 2022"
        />
        <TabItem title="Lorem, ipsum dolor." date="June 29 2022" />
        <TabItem
          title="Lorem ipsum dolor sit amet."
          date="June 31 2022"
        />
      </TabPane>
    </Tabs>
  )
}

export default CustomTab