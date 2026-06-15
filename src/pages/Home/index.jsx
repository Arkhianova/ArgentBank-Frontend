import styles from "./Home.module.scss";
import Hero from "../../components/Hero";
import ServiceItem from "../../components/ServiceItem";

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <ServiceItem />
    </div>
  );
}
