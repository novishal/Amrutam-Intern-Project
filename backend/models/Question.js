import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  q: { type: String, required: true },
  description: { type: String },
  attachments: [{ type: String }], // store file URLs
  askedBy: { type: String, default: "Anonymous" },
  profilePic: { type: String, default: "https://i.pravatar.cc/40?img=5" },
  a: { type: String, default: "Awaiting answer..." },
  answeredBy: { type: String, default: "Not answered yet" },
  answeredPic: { type: String, default: "https://i.pravatar.cc/40?img=15" },
  date: { type: Date, default: Date.now },
});

const Question = mongoose.model("Question", questionSchema);
export default Question;
