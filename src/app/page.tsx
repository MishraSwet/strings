import Feed from "./components/Feed";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import NewPost from "./components/newPost";



export default function App() {
  return <Layout>
    <Navbar />
    <NewPost />
  </Layout>
}