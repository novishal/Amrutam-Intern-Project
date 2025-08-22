import { useState } from "react";
import { Search, Filter, X, Upload } from "lucide-react";
import TopBanner from "./Banner.jsx";
import Header from "./Header.jsx";
import Navbar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

export default function QA() {
  const [questions, setQuestions] = useState([
    {
      q: "How often should I use this hair spa?",
      a: "You can use 2–3 times a week depending on your hair condition.",
      askedBy: "Anonymous",
      profilePic: "https://i.pravatar.cc/40?img=1",
      answeredBy: "Dr. Ananya Sharma",
      answeredPic: "https://i.pravatar.cc/40?img=11",
      date: "Aug 20, 2025",
    },
  ]);

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [newQ, setNewQ] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [attachments, setAttachments] = useState([]);

  // Add Question Handler
  const handleAddQuestion = () => {
    if (newQ.trim() === "" || newQ.split(" ").length > 80) return;

    setQuestions([
      {
        q: newQ,
        a: "Awaiting answer...",
        askedBy: "Aditya Singh",
        profilePic: "https://i.pravatar.cc/40?img=5",
        answeredBy: "Dr. Aarav Verma",
        answeredPic: "https://i.pravatar.cc/40?img=15",
        date: new Date().toLocaleDateString(),
        description: newDesc,
        attachments,
      },
      ...questions,
    ]);

    // Reset form
    setNewQ("");
    setNewDesc("");
    setAttachments([]);
    setShowModal(false);
  };

  return (
    <div className="w-full bg-[#fff7e2] min-h-screen">
      {/* Top Banner */}
      <TopBanner />
      <Header />
      <Navbar />

      {/* Banner Section */}
      <section
        className="w-full mx-auto my-8 relative shadow-md flex items-center justify-center min-h-[200px] bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhpn2i7BmLyN6A0Cd-xbvK2HEuqAV4AC00126DSd1XF2Lu3hdChWsk3RY&s")`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-4xl font-bold">
            Find Discussion Related To Ayurveda Here
          </h2>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-6 py-8 bg-white rounded-xl shadow-lg">
        {/* Header Row */}
        <div className="flex items-center justify-between mb-6 border-b-2 border-green-600 pb-2">
          <h1 className="text-3xl font-bold text-green-800">Questions</h1>

          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
          >
            + Ask Question
          </button>
        </div>

        {/* Search & Sort Row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex w-full max-w-md bg-gray-100 rounded-lg overflow-hidden">
            <Search className="m-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search questions..."
              className="flex-grow px-2 py-2 bg-transparent focus:outline-none"
            />
          </div>

          <div className="flex items-center ml-4">
            <Filter className="mr-2 text-gray-600" />
            <select className="border rounded-lg px-3 py-2">
              <option>Recent</option>
              <option>Most Liked</option>
              <option>Most Commented</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {questions.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-green-50 border border-green-200 shadow"
            >
              {/* Question Info */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-2">
                  <img
                    src={item.profilePic}
                    alt="profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-700 font-medium">
                    {item.askedBy} • {item.date}
                  </span>
                </div>
                <button className="text-sm text-green-700 hover:underline">
                  Thoughts 💭
                </button>
              </div>

              {/* Question */}
              <h3 className="text-lg font-bold text-green-800">Q: {item.q}</h3>

              {/* Description */}
              {item.description && (
                <p className="text-gray-600 mt-1">{item.description}</p>
              )}

              {/* Attachments */}
              {item.attachments?.length > 0 && (
                <div className="mt-2 space-x-2">
                  {item.attachments.map((file, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-green-200 rounded"
                    >
                      📎 {file.name}
                    </span>
                  ))}
                </div>
              )}

              {/* Answer */}
              <div className="mt-4 flex items-center space-x-2">
                <img
                  src={item.answeredPic}
                  alt="doctor"
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-gray-800 font-medium">
                  {item.answeredBy}: <span className="text-gray-700">{item.a}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              <X size={20} />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://i.pravatar.cc/40?img=20"
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
              <h3 className="text-lg font-semibold">Aditya Singh</h3>
            </div>

            {/* Question */}
            <input
              type="text"
              placeholder="Write your question (max 80 words)"
              value={newQ}
              onChange={(e) => setNewQ(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg mb-3"
              maxLength={500} // 80 words roughly ~ 500 chars
              required
            />

            {/* Description */}
            <textarea
              placeholder="Add your description here (optional)"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg mb-3"
            />

            {/* Attachment */}
            <div className="mb-3">
              <label className="flex items-center space-x-2 cursor-pointer">
                <Upload size={18} />
                <span>Add Attachments (image, video, file)</span>
                <input
                  type="file"
                  className="hidden"
                  multiple
                  onChange={(e) => setAttachments([...e.target.files])}
                />
              </label>
            </div>

            {/* Submit */}
            <button
              onClick={handleAddQuestion}
              className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 w-full"
            >
              Submit Question
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
