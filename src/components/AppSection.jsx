  import { MessageCircle } from "lucide-react"; 

  export default function DownloadAppSection() {
    return (
      <section className="w-full min-h-screen bg-[#fdf6e3] flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full">
          {/* Left Side - Text */}
          <div className="flex flex-col justify-start h-full space-y-6 md:pl-8">
            <h1 className="text-5xl font-extrabold text-green-900 leading-tight">
              Download Amrutam Ayurveda App Now
            </h1>
            <h3 className="text-2xl text-gray-700 max-w-lg">
              The Amrutam Ayurveda App is your one-stop app for all things
              Ayurveda! Apart from mimicking the website's features, it also
              offers exclusive app-only discounts and deals. Download now to
              explore a world of Ayurvedic health and wellness at your fingertips.
            </h3>

            {/* Benefits Section */}
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="flex items-center gap-3 border border-green-700 text-green-700 rounded-2xl px-6 py-4">
                <MessageCircle className="w-7 h-7" />
                <span className="text-lg font-medium">Exclusive Discounts</span>
              </div>
              <div className="flex items-center gap-3 border border-green-700 text-green-700 rounded-2xl px-6 py-4">
                <MessageCircle className="w-7 h-7" />
                <span className="text-lg font-medium">Easy Consultations</span>
              </div>
              <div className="flex items-center gap-3 border border-green-700 text-green-700 rounded-2xl px-6 py-4">
                <MessageCircle className="w-7 h-7" />
                <span className="text-lg font-medium">Ayurvedic Remedies</span>
              </div>
              <div className="flex items-center gap-3 border border-green-700 text-green-700 rounded-2xl px-6 py-4">
                <MessageCircle className="w-7 h-7" />
                <span className="text-lg font-medium">24/7 Support</span>
              </div>
            </div>

            {/* Store Images */}
            <div className="flex gap-4 mt-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-16 cursor-pointer"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-16 cursor-pointer"
              />
            </div>
          </div>

          {/* App Image */}
          <div className="flex justify-center">
            <div className="w-[280px] h-[550px] bg-gray-200 rounded-2xl shadow-md flex items-center justify-center text-gray-500 text-xl">
              <img
                src="./AmrutumAppImage.png"
                alt="App Image"
                className="w-[250px] h-[500px] object-cover rounded-2xl "
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
