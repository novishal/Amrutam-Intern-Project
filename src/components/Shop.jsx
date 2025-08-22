import TopBanner from "./Banner";
import Header from "./Header";
import Navbar from "./NavBar";
import BodyPartsSection from "./BodyParts";
import SummerCollection from "./SummerCollection";
import DownloadAppSection from "./AppSection";
import StoreSection from "./StoreSection";
import Footer from "./Footer";


export default function Shop() {
  return (
    <div className="bg-[#fff7e2] text-green-900 min-h-screen">
      {/* Top Banner */}
      <TopBanner />
      {/* Top Header */}
      <Header />
      {/* Navigation */}
      <Navbar />
      {/* Store Section */}
      <StoreSection />
      {/* Section for Bodyparts */}
      <BodyPartsSection onSelectConcern={(concern) => console.log("Selected concern:", concern)} />
      {/* Summer Collections */}
      <SummerCollection />
      <SummerCollection />
      {/* Download App Section */}
      <DownloadAppSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
