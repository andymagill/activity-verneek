import Image from "next/image";
import Feed from "./components/feed.js"
import "../public/styles/activity-feed.css";

export default function Home() {
  return (
    <main className="px-6 py-12">
      <Feed />
    </main>
  );
}
