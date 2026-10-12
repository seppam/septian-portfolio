import Link from "next/link";
import Nav from "@/components/Nav";
import { Footer } from "@/components/Sections";
import { contact } from "@/data/profile";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="wrap section min-h-[60vh]">
        <h1 className="text-[34px] md:text-[56px]">This page does not exist.</h1>
        <p className="mt-4 max-w-[60ch] muted">The link may be old. Try the work section or write to me.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link className="btn btn-primary" href="/">Back to home</Link>
          <a className="btn btn-secondary" href={`mailto:${contact.email}`}>Email me</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
