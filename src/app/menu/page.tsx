import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">Our Menu</h1>
      
      <Tabs defaultValue="coffee" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="coffee">Coffee</TabsTrigger>
          <TabsTrigger value="pastries">Pastries</TabsTrigger>
          <TabsTrigger value="sandwiches">Sandwiches</TabsTrigger>
          <TabsTrigger value="desserts">Desserts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="coffee" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coffeeItems.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="pastries" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastryItems.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="sandwiches" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sandwichItems.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="desserts" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dessertItems.map((item, index) => (
              <MenuCard key={index} {...item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface MenuItemProps {
  name: string
  description: string
  price: string
  image: string
}

function MenuCard({ name, description, price, image }: MenuItemProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
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

const coffeeItems: MenuItemProps[] = [
  {
    name: "Espresso",
    description: "Strong and bold, perfect for a quick energy boost",
    price: "$2.50",
    image: "/images/espresso-cof.jpg"
  },
  {
    name: "Cappuccino",
    description: "Espresso with steamed milk and a layer of foam",
    price: "$3.50",
    image: "/images/cappuccino.jpg"
  },
  {
    name: "Latte",
    description: "Espresso with steamed milk and a light layer of foam",
    price: "$3.75",
    image: "/images/latte.jpg"
  },
  // Add more coffee items as needed
]

const pastryItems: MenuItemProps[] = [
  {
    name: "Croissant",
    description: "Flaky, buttery pastry perfect for breakfast",
    price: "$2.25",
    image: "/images/croissant.jpg"
  },
  {
    name: "Blueberry Muffin",
    description: "Moist muffin packed with fresh blueberries",
    price: "$2.75",
    image: "/images/muffins.jpg"
  },
  {
    name: "Cinnamon Roll",
    description: "Soft, gooey roll with cinnamon and cream cheese frosting",
    price: "$3.25",
    image: "/images/roll.jpg"
  },
  // Add more pastry items as needed
]

const sandwichItems: MenuItemProps[] = [
  {
    name: "Turkey Avocado",
    description: "Sliced turkey with fresh avocado and crisp lettuce",
    price: "$7.50",
    image: "/images/avocado.jpg"
  },
  {
    name: "Veggie Delight",
    description: "Assorted fresh vegetables with hummus spread",
    price: "$6.75",
    image: "/images/veggie.jpg"
  },
  {
    name: "Chicken Pesto",
    description: "Grilled chicken with homemade pesto and mozzarella",
    price: "$8.25",
    image: "/images/chicken.jpg"
  },
  // Add more sandwich items as needed
]

const dessertItems: MenuItemProps[] = [
  {
    name: "Chocolate Cake",
    description: "Rich, moist chocolate cake with ganache frosting",
    price: "$4.50",
    image: "/images/chocolate.jpg"
  },
  {
    name: "Cheesecake",
    description: "Creamy New York style cheesecake with graham cracker crust",
    price: "$5.25",
    image: "/images/cheesecake.jpg"
  },
  {
    name: "Apple Pie",
    description: "Classic apple pie with a flaky, buttery crust",
    price: "$4.75",
    image: "/images/apple.jpg"
  },
  // Add more dessert items as needed
]

