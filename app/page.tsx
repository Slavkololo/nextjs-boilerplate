import Image from "next/image";

import nadya from "../public/nadya.jpg";

export default function Home() {
  return (
    <div>
      <main style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: 20, margin: "24px auto" }}>
          Надія Світланівна, заспокойтесь!
        </h2>
        <Image
          src={nadya}
          alt="Nadya"
          style={{ margin: "0 auto", borderRadius: 24 }}
        />
      </main>
    </div>
  );
}
