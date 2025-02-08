import { Droplet, Leaf, Globe } from 'lucide-react'

export default function AboutSection() {
  return (
    <div id="about" className="text-center py-6">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#00875A]">About Namami Gange</h2>
      <p className="text-sm sm:text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
        Namami Gange Programme is an Integrated Conservation Mission, approved as a 'Flagship Programme' by the Union
        Government in June 2014 with a budget outlay of Rs.20,000 Crore to accomplish the twin objectives of effective
        abatement of pollution, conservation, and rejuvenation of the National River Ganga.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {objectives.map((objective, index) => (
          <div
            key={index}
            className="transform transition duration-300 hover:scale-105 bg-white p-6 rounded-xl shadow-md hover:shadow-xl"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#00875A] text-white rounded-full">
                {objective.icon}
              </div>
            </div>
            <h3 className="font-semibold text-md sm:text-xl md:text-2xl text-black mb-3">{objective.title}</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">{objective.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const objectives = [
  {
    title: "Pollution Abatement",
    description: "Addressing pollution from various sources and improving water quality.",
    icon: <Droplet size={24} />, // Lucide icon for water drop
  },
  {
    title: "Conservation",
    description: "Protecting and restoring the river's ecosystem and biodiversity.",
    icon: <Leaf size={24} />, // Lucide icon for leaf
  },
  {
    title: "Sustainable Development",
    description: "Promoting sustainable practices along the river basin.",
    icon: <Globe size={24} />, // Lucide icon for globe
  },
]
