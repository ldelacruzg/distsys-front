import { Route, Routes } from "react-router-dom"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import PostDetail from "./pages/PostDetail"
import Smarty from "./template/smarty/Smarty"

function App() {
  return (
    <Routes>
      <Route element={<Smarty />}>
        <Route path="/" element={<Home />} />
        <Route path="blog/posts" element={<Blog />} />
        <Route path="blog/posts/:postId" element={<PostDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
