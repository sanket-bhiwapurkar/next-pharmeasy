import ClickToScroll from "./components/clickToScroll";
import MetaSection from "./components/metaSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1>Home</h1>
      <ClickToScroll />
      <MetaSection />
    </main>
  );
}
