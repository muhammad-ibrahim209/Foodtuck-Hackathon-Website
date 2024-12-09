import Image from "next/image"
import { Coffee } from 'lucide-react'

interface TeamMember {
    id: number
    name: string
    role: string
    imageUrl: string
}

interface TeamSectionProps {
    members: TeamMember[]
}

const teamMembers = [
    {
        id: 1,
        name: "Bistro Master",
        role: "Chef",
        imageUrl: "/placeholder.svg?height=400&width=400",
    },
    {
        id: 2,
        name: "Technical Roast",
        role: "Chef",
        imageUrl: "/placeholder.svg?height=400&width=400",
    },
    {
        id: 3,
        name: "Mark Henry",
        role: "Chef",
        imageUrl: "/placeholder.svg?height=400&width=400",
    },
]

export function TeamSection({ members }: TeamSectionProps) {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member) => (
                        <div
                            key={member.id}
                            className="flex flex-col items-center space-y-4 p-6 rounded-lg transition-transform hover:scale-105"
                        >
                            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                                <Image
                                    src={member.imageUrl}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                {member.name}
                            </h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>


                    {/* Feature Card */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
                        <div  className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-gray-50">
                                <div className=" w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                                    <Coffee className="w-8 h-8 text-orange-600" />
                                </div>
                                
                                <h3 className=" text-xl font-semibold text-gray-900">
                                    High quality coffee
                                </h3>
                                <p className=" text-gray-600 text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                                </p>
                            </div>

                            <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-gray-50">
                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                                    <img src="/images/Factory.png" alt="Factory" className="w-8 h-8 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Quality Maintain
                                </h3>

                            </div>

                            <div className="flex flex-col items-center space-y-4 p-6 rounded-lg bg-gray-50">
                                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                                <img src="/images/Timer.png" alt="Factory" className="w-8 h-8 text-orange-600" />

                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    24/7 Services
                                </h3>
                                {/* <p className="text-gray-600 text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                                </p> */}
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}

