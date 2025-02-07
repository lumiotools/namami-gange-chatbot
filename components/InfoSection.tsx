"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Achievement = {
  title: string;
  content: string;
};

export default function InfoSection() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleItem = (index: number | null) => {
    setExpandedItem(index);
  };

  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6">
      <h2 className="text-xl mb-6">
        Key Achievements Of Namami Gange Programme
      </h2>
      <div className="space-y-2 bg-[#F8FDFB] rounded-xl border border-gray-100">
        {achievements.map((achievement, index) => (
          <div key={index} className="rounded-xl overflow-hidden border-b">
            <button
              onClick={() => toggleItem(expandedItem === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-[#E8F5F0] transition-colors"
            >
              <span className="text-gray-700">{achievement.title}</span>
              <ChevronDown
                className={`h-5 w-5 text-gray-400 transition-transform ${
                  expandedItem === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            {expandedItem === index && (
              <div className="px-4 py-3 bg-white/50">
                <p className="text-sm text-gray-600">{achievement.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const achievements: Achievement[] = [
  {
    title: "Sewerage Treatment Capacity",
    content:
      "200 sewerage infrastructure projects sanctioned at a total cost of Rs. 31,810 Crore. 116 projects completed and operational, with remaining projects under various stages of implementation.",
  },
  {
    title: "River-Front Development",
    content:
      "84 Ghats/Crematoria projects sanctioned for construction, modernization, and renovation of 286 Ghats/Crematoria and Kunds/Ponds.",
  },
  {
    title: "Bio-Diversity Conservation",
    content:
      "Projects to develop science-based aquatic species restoration plans, involving multiple stakeholders for conservation & restoration of aquatic biodiversity. Includes efforts by WII, CIFRI, and UP State Forest Department for species like Hilsa, Indian Major Carps, Mahseer, turtles, and Gharials.",
  },
  {
    title: "Afforestation",
    content:
      "Forestry interventions planned for 1,34,106 hectares in five Ganga river bank states at an estimated cost of Rs. 2293.73 Crores. Includes natural landscape, agriculture landscape, urban landscape, and conservation interventions.",
  },
  {
    title: "Industrial Effluent Monitoring",
    content:
      "Regular inspections of 1072 Grossly Polluting Industries (GPIs) for compliance verification. Out of 961 GPIs inspected in 2018, 636 are complying, 110 are non-complying, and 215 are self-closed. Online Continuous Effluent Monitoring Stations (OCEMS) established in 885 GPIs.",
  },
  {
    title: "Public Awareness",
    content:
      "Organized events, workshops, seminars, rallies, campaigns, exhibitions, and cleanliness drives. Utilized mass media including TV/Radio, print media, and social media platforms for wider publicity. Released Ganga Theme song to enhance programme visibility.",
  },
  {
    title: "Ganga Gram",
    content:
      "Identified 1674 Gram Panchayats along the Ganga in 5 states. Rs. 578 Crores released for toilet construction, with 8,53,397 toilets completed out of 15,27,105 targeted units. 65 villages adopted by 13 IITs to develop as model villages.",
  },
];
