    import React, { useState } from "react";
    import {
    Sparkles,
    Heart,
    Apple,
    Bone,
    Shield,
    LayoutGrid,
    Brain,
    Moon,
    BatteryFull,
    Activity,
    Eye,
    Wind,
    HeartPulse,
    Scale,
    Leaf,
    ChevronDown,
    ChevronUp,
    } from "lucide-react";

    export default function BodyPartsSection({ onSelectConcern }) {
    const mainConcerns = [
        { id: "all", label: "All", icon: LayoutGrid },
        { id: "hair", label: "Hair", icon: Sparkles },
        { id: "skin", label: "Skin", icon: Heart },
        { id: "digestion", label: "Digestion", icon: Apple },
        { id: "bones", label: "Bones", icon: Bone },
        { id: "immunity", label: "Immunity", icon: Shield },
    ];

    const extraConcerns = [
        { id: "stress", label: "Stress", icon: Brain },
        { id: "sleep", label: "Sleep", icon: Moon },
        { id: "energy", label: "Energy", icon: BatteryFull },
        { id: "joints", label: "Joints", icon: Activity },
        { id: "eyes", label: "Eyes", icon: Eye },
        { id: "respiratory", label: "Respiratory", icon: Wind },
        { id: "heart", label: "Heart", icon: HeartPulse },
        { id: "weight", label: "Weight", icon: Scale },
        { id: "detox", label: "Detox", icon: Leaf },
    ];

    const [showMore, setShowMore] = useState(false);

    const displayedConcerns = showMore
        ? [...mainConcerns, ...extraConcerns]
        : mainConcerns;

    return (
        <section className="w-full py-6 bg-[#fff7e2] flex justify-center">
        <div className="w-11/12 md:w-4/5">  
            {/* Auto-fit grid (no extra blank space) */}
            <div className="flex flex-wrap justify-center gap-5">
            {displayedConcerns.map(({ id, label, icon: Icon }) => (
                <div key={id} className="flex flex-col items-center">
                <button
                    onClick={() => onSelectConcern?.(id)}
                    className="w-20 h-20 flex items-center justify-center rounded-full shadow bg-white hover:bg-green-100 cursor-pointer transition"
                >
                    <Icon className="w-8 h-8 text-green-700" />
                </button>
                <span className="text-[15px] mt-1 font-medium text-green-900 text-center">
                    {label}
                </span>
                </div>
            ))}

            {/* Inline More button */}
            <div className="flex flex-col items-center">
                <button
                onClick={() => setShowMore(!showMore)}
                className="w-20 h-20 flex items-center justify-center rounded-full shadow bg-white hover:bg-green-100 cursor-pointer transition"
                >
                {showMore ? (
                    <ChevronUp className="w-6 h-6 text-green-700" />
                ) : (
                    <ChevronDown className="w-6 h-6 text-green-700" />
                )}
                </button>
                <span className="text-[15px] mt-1 font-medium text-green-900 text-center">
                {showMore ? "Less" : "More"}
                </span>
            </div>
            </div>
        </div>
        </section>
    );
    }
