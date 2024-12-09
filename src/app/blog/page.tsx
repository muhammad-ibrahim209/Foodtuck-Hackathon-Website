import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Heart, MessageCircle, Share2 } from 'lucide-react'

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Our Blog</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Discover the latest news, recipes, and stories from our coffee shop.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Blog Post 1 */}
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
          <CardHeader className="p-4">
            <div className="text-sm text-muted-foreground">December 9, 2023</div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/images/foodpost2.png"
                alt="Coffee Brewing"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">The Art of Coffee Brewing</h3>
              <p className="text-sm text-muted-foreground">
                Learn the secrets of brewing the perfect cup of coffee with our expert baristas.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between p-4">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="secondary" size="sm">Read More</Button>
          </CardFooter>
        </Card>

        {/* Blog Post 2 */}
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
          <CardHeader className="p-4">
            <div className="text-sm text-muted-foreground">December 8, 2023</div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/images/foodpost1.png"
                alt="Pastry Making"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">Behind Our Pastries</h3>
              <p className="text-sm text-muted-foreground">
                Discover the craftsmanship and dedication that goes into making our delicious pastries.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between p-4">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="secondary" size="sm">Read More</Button>
          </CardFooter>
        </Card>

        {/* Blog Post 3 */}
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
          <CardHeader className="p-4">
            <div className="text-sm text-muted-foreground">December 7, 2023</div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/images/foodpost2.png"
                alt="Coffee Beans"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-lg font-semibold">Sourcing Our Coffee</h3>
              <p className="text-sm text-muted-foreground">
                Take a journey with us as we explore the origins of our premium coffee beans.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between p-4">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="secondary" size="sm">Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

