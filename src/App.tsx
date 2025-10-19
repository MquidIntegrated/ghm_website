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
// import FullPlanDetails from "./pages/FullPlanDetails";
import StudentPlan from "./pages/StudentPlan";
import CorporatePlan from "./pages/CorporatePlan";
import Contact from "./pages/Contact";
import ProvidersList from "./pages/ProvidersList";
import PurchasePlan from "./pages/PurchasePlan";
import ScrollToTop from "./utils/ScrollToTop";
import {FamilyProvider} from "./contexts/FamilyContext";
import ConfirmPlanDetails from "./pages/ConfirmPlanDetails";
import Checkout from "./pages/Checkout";
import PaymentStatus from "./pages/PaymentStatus";
import JoinProviderNetwork from "./pages/JoinProviderNetwork";
import NotFoundPage from "./pages/NotFoundPage";
import FAQPage from "./pages/FAQPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import Whistleblowing from "./pages/Whistleblowing";

function App() {
  return (
    <>
      <FamilyProvider>
        <Router>
          <div className="font-onest">
            <DynamicHeader />
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="whistleblowing" element={<Whistleblowing />} />
                <Route path="providers-list" element={<ProvidersList />} />
                <Route
                  path="join-provider-network"
                  element={<JoinProviderNetwork />}
                />
                <Route path="plans" element={<Plans />} />
                <Route path="plans/retail" element={<IndividualPlan />} />
                {/* <Route
                  path="plans/retail/full-plan-details"
                  element={<FullPlanDetails />}
                /> */}
                <Route path="plans/student" element={<StudentPlan />} />
                <Route path="plans/corporate" element={<CorporatePlan />} />

                <Route path="purchase-plan" element={<PurchasePlan />} />
                <Route
                  path="confirm-plan-details"
                  element={<ConfirmPlanDetails />}
                />
                <Route path="checkout" element={<Checkout />} />
                <Route
                  path="terms-and-condition"
                  element={<TermsAndConditions />}
                />
                <Route path="payment-status" element={<PaymentStatus />} />
                <Route path="faqs" element={<FAQPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </ScrollToTop>
            <Footer />
          </div>
        </Router>
      </FamilyProvider>
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
