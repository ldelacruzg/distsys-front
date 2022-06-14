import React from 'react'
import InlineSearch from '../components/InlineSearch';
import ListGroup from '../components/ListGroup';
import ListItem from '../components/ListGroup/ListItem';
import PostItem from '../components/PostItem'
import Sidebar from '../components/Sidebar';
import Sidenav from '../components/Sidenav';
import Tabs from '../components/Tabs';
import TabItem from '../components/Tabs/TabItem';
import TabPane from '../components/Tabs/TabPane';
import { posts } from '../data';

const Blog = () => {
  return (
    <div className="container">
      <div className="row">
        {/* LEFT */}
        <Sidebar>
          <InlineSearch />
          <hr />
          <Sidenav title="UNIDADES">
            <ListGroup>
              <ListItem title="Unidad 1" num="2" />
              <ListItem title="Unidad 2" num="4" />
            </ListGroup>
          </Sidenav>
          <Tabs nameTags={[["Populares", 1], ["Recientes", 2]]} activeTag={2}>
            <TabPane id={1}>
              <TabItem title="Curabitur pellentesque neque eget diam" date="June 29 2022" />
            </TabPane>
            <TabPane id={2}> {/* quedo por definir el active del tag */}
              <TabItem title="Maecenas metus nulla" date="June 01 2022" />
            </TabPane>
          </Tabs>
        </Sidebar>
        {/* RIGHT */}
        <div className="col-md-9 col-sm-9">
          <div className="row">
            {posts.map(({ id, date, title, description, weekNumber, content, image }) => (
              <PostItem
                key={id}
                id={id}
                date={date}
                title={title}
                description={description}
                weekNumber={weekNumber}
                urlImage={image ? image : null}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog