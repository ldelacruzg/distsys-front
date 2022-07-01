import { Route, Routes } from "react-router-dom"
import { PostsProvider } from "./context/PostsContext"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import PostDetail from "./pages/PostDetail"
import Smarty from "./template/smarty/Smarty"
import "./index.css"

function App() {
  return (
    <Routes>
      <Route element={<Smarty />}>
        <Route path="/" element={<Home />} />
        <Route path="blog/posts" element={
          <PostsProvider>
            <Blog />
          </PostsProvider>
        } />
        <Route path="blog/posts/:postId" element={
          <PostsProvider>
            <PostDetail />
          </PostsProvider>
        } />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
