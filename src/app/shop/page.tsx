import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">Our Shop</h1>
      
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Input 
          className="max-w-xs" 
          type="search" 
          placeholder="Search products..." 
        />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-low-high">Price: Low to High</SelectItem>
            <SelectItem value="price-high-low">Price: High to Low</SelectItem>
            <SelectItem value="name-a-z">Name: A to Z</SelectItem>
            <SelectItem value="name-z-a">Name: Z to A</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {shopItems.map((item, index) => (
          <ShopCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

interface ShopItemProps {
  name: string
  description: string
  price: string
  image: string
}

function ShopCard({ name, description, price, image }: ShopItemProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="mb-2">{name}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4">
        <span className="text-lg font-bold">{price}</span>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}

const shopItems: ShopItemProps[] = [
  {
    name: "Signature Blend Coffee Beans",
    description: "Our premium house blend, perfect for any brewing method",
    price: "$14.99",
    image: "/images/coffee-bean.jpg"
  },
  {
    name: "Ceramic Pour-Over Dripper",
    description: "Elegant ceramic dripper for the perfect pour-over coffee",
    price: "$24.99",
    image: "/images/ceramic.jpg"
  },
  {
    name: "Stainless Steel Travel Mug",
    description: "Keep your coffee hot for hours with our insulated mug",
    price: "$19.99",
    image: "/images/travel-mug.jpg"
  },
  {
    name: "Coffee Grinder",
    description: "Electric burr grinder for consistent, fresh ground coffee",
    price: "$49.99",
    image: "/images/coffee-grinder.jpg"
  },
  {
    name: "Espresso Machine",
    description: "Semi-automatic espresso machine for cafe-quality drinks at home",
    price: "$299.99",
    image: "/images/espresso.jpg"
  },
  {
    name: "Coffee Scoop and Clip",
    description: "Measure and seal your coffee with this 2-in-1 tool",
    price: "$9.99",
    image: "/images/scoop-clip.jpg"
  },
  {
    name: "Cold Brew Coffee Maker",
    description: "Make smooth, low-acid cold brew coffee at home",
    price: "$34.99",
    image: "/images/cold-brew.jpg"
  },
  {
    name: "Flavored Syrup Set",
    description: "Set of 3 gourmet flavored syrups for your coffee creations",
    price: "$29.99",
    image: "/images/syrup.jpg"
  },
  // Add more shop items as needed
]

