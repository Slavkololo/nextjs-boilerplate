import Image from "next/image";

import german from "../public/german.webp";

export default function Home() {
  return (
    <div>
      <main style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: 20, margin: "24px auto" }}>
          Герман поки ти на ґаматетію дрочиш я вже майже пік пройшов
        </h2>
        <Image
          src={german}
          alt="German lox"
          style={{ margin: "0 auto", borderRadius: 24 }}
        />
      </main>
    </div>
  );
}
