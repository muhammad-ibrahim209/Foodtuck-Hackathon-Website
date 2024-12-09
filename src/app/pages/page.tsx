import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee, ShoppingBag, Newspaper, Users, Phone, FileText } from 'lucide-react'

export default function PagesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">Site Pages</h1>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((page, index) => (
          <Link key={index} href={page.href} className="transition-transform hover:scale-105">
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <CardTitle className="text-xl">{page.title}</CardTitle>
                <div className="ml-auto rounded-full bg-primary/10 p-2">
                  {page.icon}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{page.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

const pages = [
  {
    title: "Menu",
    description: "Explore our delicious offerings of coffee, pastries, and more.",
    href: "/menu",
    icon: <Coffee className="h-6 w-6 text-primary" />,
  },
  {
    title: "Shop",
    description: "Browse and purchase our premium coffee beans and equipment.",
    href: "/shop",
    icon: <ShoppingBag className="h-6 w-6 text-primary" />,
  },
  {
    title: "Blog",
    description: "Read the latest news, recipes, and stories from our coffee shop.",
    href: "/blog",
    icon: <Newspaper className="h-6 w-6 text-primary" />,
  },
  {
    title: "About",
    description: "Learn about our story, our team, and our passion for great coffee.",
    href: "/about",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    title: "Contact",
    description: "Get in touch with us for inquiries, feedback, or support.",
    href: "/contact",
    icon: <Phone className="h-6 w-6 text-primary" />,
  },
  {
    title: "Home",
    description: "Return to our main page to start your journey.",
    href: "/",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
]

