import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Plans from "./pages/Plans";
import IndividualPlan from "./pages/IndividualPlan";

function App() {
  return (
    <>
      <Router>
        <div className="font-onest">
          <DynamicHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="plans" element={<Plans />} />
            <Route path="plans/retail" element={<IndividualPlan />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

const DynamicHeader: React.FC = () => {
  const location = useLocation();

  // Check if the current path is the home page
  const isHomePage = location.pathname === "/";

  return <Header isHomePage={isHomePage} />;
};

export default App;
