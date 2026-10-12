import Nav from "@/components/Nav";
import { About, Approach, Contact, Credentials, Engineering, Footer, Hero, ProofStrip, Timeline, Work } from "@/components/Sections";
import { contact } from "@/data/profile";
import { SITE_URL } from "@/data/site";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: contact.name,
  jobTitle: "Full-Stack Developer",
  url: SITE_URL,
  image: `${SITE_URL}/images/profile-og.jpg`,
  email: `mailto:${contact.email}`,
  sameAs: [contact.github, contact.linkedin],
  knowsAbout: ["React", "Next.js", "Node.js", "Solidity", "AI application development", "Systems analysis"],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Universitas Gunadarma" },
  address: { "@type": "PostalAddress", addressLocality: "Karawang", addressRegion: "West Java", addressCountry: "ID" },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <ProofStrip />
        <Work />
        <Engineering />
        <Approach />
        <About />
        <Credentials />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
    </>
  );
}
