import Image from "next/image"
import Link from "next/link"

// interface HeroSectionProps {
// //     breadcrumb: {
// //     home: string
// //     current: string
// //   }
// //   imageUrl: string
// }
// {breadcrumb }: HeroSectionProps

export function HeroSection() {
    return (
        <div className="relative h-[250px] md:h-[350px] w-full">
            {/* Background Image */}
            <Image
                src="/images/hero-image.png"
                alt="Hero-Section Image"
                fill
                className="object-cover "
                priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center h-full text-white space-y-4">
                    <div className=" text-center font-bold text-5xl font-[Helvetica]">
                        <h1 className="">Our Shop</h1>
                    </div>

                    <div className="justify-center flex space-x-2">
                        <Link href="/" className="text-center hover:text-orange-400 transition-colors">
                            <h2>Home</h2>
                        </Link>
                        <h2 className="items-center before:content-['>'] before:mx-3">
                            Shop
                        </h2>
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">

                </h1>
            </div>
        </div>
        // </div>
    )
}

