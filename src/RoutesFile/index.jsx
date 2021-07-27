import {
  BrowserRouter as Router,
  RouteProps,
  Route,
  Switch,
  Link,
  Routes,
  component
} from 'react-router-dom';
import About from '../pages/About/index';
import Navbar from '../Navbar/index';
import HomePage from '../pages/HomePage/index'
import SeeMore from '../pages/User/SeeMore/index'
const index = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AboutForm" element={<AboutForm />} />
        <Route path="SeeMore" element={<Seemore />} />
      </Routes>
    </Router>
  );
}
function Home() {
  return (
    <HomePage />
  )
}
function Seemore() {
  return (
    <SeeMore />
  )
}
function AboutForm() {
  return (
    <About />
  )
}
export default index;
