import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Index from './components/Index'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import User from './components/User'
import PageNotFound from './components/PageNotFound'
import Tab1 from './components/Tab1'
import Tab2 from './components/Tab2'
import SidebarApp from './components/SidebarApp'
import Category from './components/Category'
import CategorySidebar from './components/CategorySidebar'
import Item from './components/Item'

const routes = (
<Route path="/" component={App}>
  <IndexRoute component={Index} />
  <Route path='page1' component={Page1}>
    <Route path="tab1" component={Tab1} />
    <Route path="tab2" component={Tab2} />
  </Route>
  <Route path='page2' component={Page2}>
    <Route path="tab1" component={Tab1} />
    <Route path="tab2" component={Tab2} />
  </Route>
  <Route path='user/:userid' component={User} />
  <Route path='sidebar' component={SidebarApp}>
    <Route path='category/:category' components={{content: Category, sidebar: CategorySidebar}}>
      <Route path=':item' component={Item} />
    </Route>
  </Route>
  <Route path='*' component={PageNotFound} />
</Route>
)

export default routes
