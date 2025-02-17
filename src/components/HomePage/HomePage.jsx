import HomePageBanner from "./HomePageBanner/HomePageBanner";
import HomePageAboutUs from "./HomePageAboutUs/HomePageAboutUs";
import HomePageServiceBanner from "./HomePageBanner/HomePageServiceBanner";
import HomePageServiceSection from "./HomePageServiceSection/HomePageServiceSection";
import HomePageWhyChooseUSSection from "./HomePageWhyChooseUSSection/HomePageWhyChooseUSSection";
import HomePageServicesLstSection from "./HomePageServicesLstSection/HomePageServicesLstSection";
import HomePageContactUs from "./HomePageContactUs/HomePageContactUs";

const HomePage = () => {
  return (
    <main>
      <section className="flex flex-col gap-32 bg-[#f4f6f4]">
        <div id="banner">
          <HomePageBanner />
        </div>
        <div id="about-us">
          <HomePageAboutUs />
        </div>
        <div id="service-banner">
          <HomePageServiceBanner />
        </div>
        <div id="services">
          <HomePageServiceSection />
        </div>
        <div id="why-choose-us">
          <HomePageWhyChooseUSSection />
        </div>
        <div id="services-list">
          <HomePageServicesLstSection />
        </div>
        <div id="contact-us">
          <HomePageContactUs />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
