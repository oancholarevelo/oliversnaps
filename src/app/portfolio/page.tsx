import { client } from '../../../sanity/lib/client'
import { urlFor } from '../../../sanity/lib/image'
import Image from 'next/image'
import type { Image as SanityImage } from 'sanity'

// A simplified type for our portfolio images (no caption)
interface PortfolioImage {
  _id: string
  imageUrl: SanityImage
}

// Helper function to fetch images from Sanity for a specific category
async function getPortfolioImages(category: string): Promise<PortfolioImage[]> {
  const query = `*[_type == "portfolioImage" && category == "${category}"]`
  const data = await client.fetch(query)
  return data
}

export default async function Portfolio() {
  // Fetch images for both categories
  const [portraitImages, landscapeImages] = await Promise.all([
    getPortfolioImages('portraits'),
    getPortfolioImages('landscapes'),
  ])

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8 text-center">Portfolio</h1>

      {/* Portraits Section */}
      <section id="portraits" className="mb-16">
        <h2 className="text-3xl font-bold mt-12 mb-6">Portraits</h2>
        {portraitImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {portraitImages.map((image) => (
              <div key={image._id} className="overflow-hidden rounded-lg">
                <Image
                  src={urlFor(image.imageUrl).width(800).url()}
                  alt="Portrait image from portfolio" // Generic alt text
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <p>No portrait images have been uploaded yet.</p>
        )}
      </section>

      {/* Landscapes Section */}
      <section id="landscapes">
        <h2 className="text-3xl font-bold mt-12 mb-6">Landscapes</h2>
        {landscapeImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {landscapeImages.map((image) => (
              <div key={image._id} className="overflow-hidden rounded-lg">
                <Image
                  src={urlFor(image.imageUrl).width(800).url()}
                  alt="Landscape image from portfolio" // Generic alt text
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <p>No landscape images have been uploaded yet.</p>
        )}
      </section>
    </div>
  )
}