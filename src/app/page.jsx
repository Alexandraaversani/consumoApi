import HarryApi from "@/components/harryApi";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <HarryApi />
    </div>
  );
}
