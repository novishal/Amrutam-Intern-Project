import { Star } from "lucide-react";

export default function MeetOurExperts() {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center gap-10">
        {/* Expert Card */}
        <div className="bg-[#fff7e2] rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
          {/* Profile Image */}
          <img
            src="data:image/jpeg;base64,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    "
            alt="Doctor"
            className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-green-200"
          />

          {/* Name & Title */}
          <h3 className="text-xl font-bold text-green-900">Dr. Vaishali Sharma</h3>
          <p className="text-gray-700 text-sm mt-1">
            Ayurveda Practitioner (BAMS, MD)
          </p>

          {/* Rating */}
          <div className="flex justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>

          {/* Experience */}
          <p className="text-gray-600 text-sm mt-2">10+ Years of Experience</p>

          {/* Specialty */}
          <p className="text-green-700 font-medium mt-1">Skin Specialist</p>

          {/* CTA Button */}
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Book a Session
          </button>
        </div>
        {/* Duplicate */}
         <div className="bg-[#fff7e2] rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
          {/* Profile Image */}
          <img
            src="data:image/jpeg;base64,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    "
            alt="Doctor"
            className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-green-200"
          />

          {/* Name & Title */}
          <h3 className="text-xl font-bold text-green-900">Dr. Vaishali Sharma</h3>
          <p className="text-gray-700 text-sm mt-1">
            Ayurveda Practitioner (BAMS, MD)
          </p>

          {/* Rating */}
          <div className="flex justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>

          {/* Experience */}
          <p className="text-gray-600 text-sm mt-2">10+ Years of Experience</p>

          {/* Specialty */}
          <p className="text-green-700 font-medium mt-1">Skin Specialist</p>

          {/* CTA Button */}
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Book a Session
          </button>
        </div>
        {/* Another duplicate */}
         <div className="bg-[#fff7e2] rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
          {/* Profile Image */}
          <img
            src="data:image/jpeg;base64,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    "
            alt="Doctor"
            className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-green-200"
          />

          {/* Name & Title */}
          <h3 className="text-xl font-bold text-green-900">Dr. Vaishali Sharma</h3>
          <p className="text-gray-700 text-sm mt-1">
            Ayurveda Practitioner (BAMS, MD)
          </p>

          {/* Rating */}
          <div className="flex justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>

          {/* Experience */}
          <p className="text-gray-600 text-sm mt-2">10+ Years of Experience</p>

          {/* Specialty */}
          <p className="text-green-700 font-medium mt-1">Skin Specialist</p>

          {/* CTA Button */}
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Book a Session
          </button>
        </div>
      </div>
    </div>
  );
}
