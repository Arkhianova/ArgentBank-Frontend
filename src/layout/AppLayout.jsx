import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";


function AppLayout() {
  
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;