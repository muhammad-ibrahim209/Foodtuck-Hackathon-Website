import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">About Our Story</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Discover the passion and dedication behind our artisanal coffee and delectable pastries.
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Meet Our Team</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Team Member 1 */}
          <Card className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src="/images/head-chef.jpeg"
                alt="Chef"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="mb-2 text-xl font-semibold">Robert Duncan</h3>
              <p className="mb-4 text-sm text-muted-foreground">Head Chef</p>
              <p className="text-sm">
                With over 15 years of experience in crafting exquisite desserts and pastries.
              </p>
            </CardContent>
          </Card>

          {/* Team Member 2 */}
          <Card className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src="/images/barista.jpg"
                alt="Barista"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="mb-2 text-xl font-semibold">Sarah Porter</h3>
              <p className="mb-4 text-sm text-muted-foreground">Master Barista</p>
              <p className="text-sm">
                A coffee connoisseur dedicated to brewing the perfect cup every time.
              </p>
            </CardContent>
          </Card>

          {/* Team Member 3 */}
          <Card className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src="/images/pastry-chef.jpg"
                alt="Pastry Chef"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="mb-2 text-xl font-semibold">Mark Henry</h3>
              <p className="mb-4 text-sm text-muted-foreground">Pastry Chef</p>
              <p className="text-sm">
                Specializes in creating innovative and delightful pastry creations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid gap-8 md:grid-cols-3">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
          <h3 className="mb-2 text-xl font-semibold">High Quality Coffee</h3>
          <p className="text-sm text-muted-foreground">
            We source the finest coffee beans from sustainable farms worldwide.
          </p>
        </div>

        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
          </div>
          <h3 className="mb-2 text-xl font-semibold">Quality Materials</h3>
          <p className="text-sm text-muted-foreground">
            Only the finest ingredients go into our pastries and desserts.
          </p>
        </div>

        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <h3 className="mb-2 text-xl font-semibold">24/7 Service</h3>
          <p className="text-sm text-muted-foreground">
            Always ready to serve you with the best coffee and pastries.
          </p>
        </div>
      </div>
    </div>
  )
}

