import { HeroSection } from "@/app/components/hero-section"
import { TeamSection } from "@/app/components/team-section"
import FoodPost from "@/app/components/food-post"

const teamMembers = [
  {
    id: 1,
    name: "Bulbul Hassan",
    role: "Chef",
    imageUrl: "/images/Image 1.png",
  },
  {
    id: 2,
    name: "Tahmina Romi",
    role: "Chef",
    imageUrl: "/images/Image 2.png",
  },
  {
    id: 3,
    name: "Mark Henry",
    role: "Owner",
    imageUrl: "/images/Image 1.png",
  },
]

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <TeamSection members={teamMembers} />

      <FoodPost/>
    </main>
  )
}

