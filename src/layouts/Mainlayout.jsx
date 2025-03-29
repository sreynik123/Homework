import { Outlet } from "react-router";
import AppNavbar from "../components/AppNavbar";
import Footer from "../components/Footer";
import CardRightSide from "../components/CardRightSide";

export default function AppMainlayout() {
  return (
    <>
      <AppNavbar />
      <div>
        <div>
          <Outlet />
        </div>
      </div>
      <div>
        <CardRightSide />
      </div>

      <Footer />
    </>
  );
}
