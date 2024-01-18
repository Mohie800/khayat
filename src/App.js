import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./components/order/Order";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import Payment from "./components/footerpages/Payment";
import Terms from "./components/footerpages/Terms";
import Delivery from "./components/footerpages/Delivery";
import ReturnPolicy from "./components/footerpages/ReturnPolicy";
import AdminLayout from "./admin/layaout/AdminLayout";
import Register from "./admin/register/Register";
import Cities from "./admin/cities/Cities";
import Login from "./admin/Login";
import Services from "./admin/services/Services";
import AdminOrders from "./admin/orders/AdminOrders";
import NewOrders from "./admin/orders/NewOrder";
import PendingOrder from "./admin/orders/PendingOrder";
import TaxRecord from "./admin/taxRecord/TaxRecord";
import Logo from "./admin/logo/Logo";
import Complains from "./components/complains/Complains";
import Employee from "./components/employee/Employee";
import Employment from "./admin/employment/employment";
import NewEmployee from "./admin/employment/NewEmployee";
import EmployeeShow from "./admin/employment/EmployeeShow";
import Support from "./admin/support/Support";
import NewSupport from "./admin/support/NewSupport";
import PendingSupport from "./admin/support/PendingSupport";
import SupportShow from "./admin/support/SupportShow";
import TermsAndConditions from "./components/footerpages/TermsAndConditions";
import TaxCertificate from "./components/footerpages/TaxCertificate";
import AuthCertificate from "./components/footerpages/AuthCertificate";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout el={<Home />} />} />
          <Route path="/order" element={<Layout el={<Order />} />} />
          <Route path="/complains" element={<Layout el={<Complains />} />} />
          <Route path="/employment" element={<Layout el={<Employee />} />} />
          <Route path="/payment" element={<Layout el={<Payment />} />} />
          <Route path="/terms" element={<Layout el={<Terms />} />} />
          <Route
            path="/delivery-policy"
            element={<Layout el={<Delivery />} />}
          />
          <Route
            path="/return-policy"
            element={<Layout el={<ReturnPolicy />} />}
          />
          <Route
            path="/terms-and-conditions"
            element={<Layout el={<TermsAndConditions />} />}
          />
          <Route
            path="/tax-certificate"
            element={<Layout el={<TaxCertificate />} />}
          />
          <Route path="/contacts" element={<Layout el={<Contacts />} />} />
          <Route
            path="/authentication-certificate"
            element={<Layout el={<AuthCertificate />} />}
          />
          <Route path="/admin" element={<Login />} />
          <Route
            path="/admin/home"
            element={<AdminLayout el={<AdminOrders />} />}
          />
          <Route
            path="/admin/register"
            element={<AdminLayout el={<Register />} />}
          />
          <Route path="/admin/city" element={<AdminLayout el={<Cities />} />} />
          <Route
            path="/admin/services"
            element={<AdminLayout el={<Services />} />}
          />
          <Route
            path="/admin/tax"
            element={<AdminLayout el={<TaxRecord />} />}
          />
          <Route
            path="/admin/orders"
            element={<AdminLayout el={<AdminOrders />} />}
          />
          <Route
            path="/admin/orders/New"
            element={<AdminLayout el={<NewOrders />} />}
          />
          <Route
            path="/admin/orders/pending"
            element={<AdminLayout el={<PendingOrder />} />}
          />
          <Route
            path="/admin/employment"
            element={<AdminLayout el={<Employment />} />}
          />
          <Route
            path="/admin/employment/new"
            element={<AdminLayout el={<NewEmployee />} />}
          />
          <Route
            path="/admin/employment/show"
            element={<AdminLayout el={<EmployeeShow />} />}
          />
          <Route
            path="/admin/support"
            element={<AdminLayout el={<Support />} />}
          />
          <Route
            path="/admin/support/new"
            element={<AdminLayout el={<NewSupport />} />}
          />
          <Route
            path="/admin/support/pending"
            element={<AdminLayout el={<PendingSupport />} />}
          />
          <Route
            path="/admin/support/show"
            element={<AdminLayout el={<SupportShow />} />}
          />
          <Route path="/admin/logo" element={<AdminLayout el={<Logo />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
