import Image from "./Image";
import InfoSection from "./InfoSection";
function Home() {
  return (
    <section className="items-center gap-x-6 md:flex md:px-24 xl:gap-x-16 xl:px-64">
      <Image />
      <InfoSection />
    </section>
  );
}

export default Home;
