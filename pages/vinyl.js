import dynamic from "next/dynamic";

const Discogs = dynamic(() => import("../components/discogs"));

export default function Vinyl() {
  return (
    <main>
      <h1>Vinyl</h1>

      <Discogs />

      <style jsx>{`
        h1 {
          margin-bottom: 1rem;
        }
      `}</style>
    </main>
  );
}
