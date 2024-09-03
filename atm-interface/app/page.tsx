import Image from "next/image";
import ATM2Component from "../components/atm2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ATM2Component />
    </main>
  );
}
