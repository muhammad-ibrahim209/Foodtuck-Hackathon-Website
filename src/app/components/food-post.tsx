import Image from "next/image"
import { Heart, MessageCircle, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function FoodPost() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Post 1 */}
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="p-4">
                        <div className="text-sm text-muted-foreground">12h ago</div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src="/images/foodpost1.png"
                                alt="Chocolate Cake"
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="mb-2 text-lg font-semibold">Chocolate Truffle Cake With Honey Flavor</h3>
                            <p className="text-sm text-muted-foreground">
                                Indulge in our signature chocolate truffle cake, made with premium dark chocolate and fresh cream.
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
                        <Button variant="secondary" size="sm" className="transition-colors hover:bg-primary hover:text-primary-foreground">
                            Read More
                        </Button>
                    </CardFooter>
                </Card>

                {/* Post 2 */}
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="p-4">
                        <div className="text-sm text-muted-foreground">1d ago</div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src="/images/foodpost2.png"
                                alt="Coffee"
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="mb-2 text-lg font-semibold">Artisan Coffee</h3>
                            <p className="text-sm text-muted-foreground">
                                Start your day with our perfectly brewed artisan coffee, sourced from premium coffee beans.
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
                        <Button variant="secondary" size="sm" className="transition-colors hover:bg-primary hover:text-primary-foreground">
                            Read More
                        </Button>
                    </CardFooter>
                </Card>

                {/* Post 3 */}
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="p-4">
                        <div className="text-sm text-muted-foreground">2d ago</div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src="/images/foodpost1.png"
                                alt="Pastry"
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="mb-2 text-lg font-semibold">Fresh Pastries</h3>
                            <p className="text-sm text-muted-foreground">
                                Discover our selection of freshly baked pastries, made daily with the finest ingredients.
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
                        <Button variant="secondary" size="sm" className="transition-colors hover:bg-primary hover:text-primary-foreground">
                            Read More
                        </Button>
                    </CardFooter>
                </Card>

                {/* Post 4 */}
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="p-4">
                        <div className="text-sm text-muted-foreground">1d ago</div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src="/images/foodpost2.png"
                                alt="Coffee"
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="mb-2 text-lg font-semibold">Artisan Coffee</h3>
                            <p className="text-sm text-muted-foreground">
                                Start your day with our perfectly brewed artisan coffee, sourced from premium coffee beans.
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
                        <Button variant="secondary" size="sm" className="transition-colors hover:bg-primary hover:text-primary-foreground">
                            Read More
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

