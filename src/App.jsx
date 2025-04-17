import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Layout
import RootLayout from "./layouts/root-layout";

// Pages
import LandingPage from "./pages/landing-page";
import AboutPage from "./pages/about-page";
import ImagesPage from "./pages/images-page";
import DashboardPage from "./pages/dashboard-page";
import SignUp from "./pages/sign-up-page";
import Login from "./pages/log-in-page";

// create router for routing pages on frontend
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/image" element={<ImagesPage />} />
      </Route>
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/log-in" element={<Login/>} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
