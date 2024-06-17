import HomeAppBar from "@/components/HomeAppBar";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <HomeAppBar />
      <div className="header" style={{ width: "100%" }}>
        <img
          src="/header2.png"
          alt="isabel macias"
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
        />
      </div>
      <div className="body">
      </div>
    </main>
  );
}
