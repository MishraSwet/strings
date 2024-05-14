import Feed from "./components/Feed";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";



export default function App() {
  return <Layout>
    <Navbar />
    <Feed />
    <Sidebar/>
  </Layout>
}