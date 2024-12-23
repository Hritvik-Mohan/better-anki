import Navbar from "@/components/landing_page_components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div>
        {/* <Link href="/dashboard" className="flex justify-center">Go to dashboard</Link> */}
      </div>
    </div>
  );
}
