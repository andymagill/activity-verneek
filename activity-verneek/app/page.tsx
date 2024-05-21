import Image from "next/image";
import Feed from "./components/feed.js"
import "../public/styles/activity-feed.css";

export default function Home() {
  return (
    <main className="p-24">
      <Feed />
    </main>
  );
}
