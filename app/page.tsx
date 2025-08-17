import Image from "next/image";

import german from "../../public/german.webp";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>Герман поки ти на ґаматетію дрочиш я вже майже пік пройшов</h2>
        <Image
          src={german}
          alt="German lox"
          style={{ margin: "0 auto", borderRadius: 24 }}
        />
      </main>
    </div>
  );
}
