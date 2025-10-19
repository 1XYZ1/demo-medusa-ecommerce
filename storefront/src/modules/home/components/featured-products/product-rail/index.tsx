import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPreview from "@modules/products/components/product-preview"

export default function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-24">
      <div className="text-center mb-12">
        <Text className="text-4xl md:text-5xl font-light tracking-wide text-ui-fg-base mb-2">
          {collection.title}
        </Text>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 gap-4 small:gap-6">
        {products &&
          products
            .slice(0, 4) // Mostrar máximo 6 productos (2x3 grid)
            .map((product) => (
              <li key={product.id} className="block small:hidden">
                {" "}
                {/* Solo visible en móvil */}
                {/* @ts-ignore */}
                <ProductPreview product={product} region={region} isFeatured />
              </li>
            ))}
        {products &&
          products
            .slice(0, 3) // Mostrar máximo 6 productos (2x3 grid)
            .map((product) => (
              <li key={`desktop-${product.id}`} className="hidden small:block">
                {" "}
                {/* Solo visible en desktop */}
                {/* @ts-ignore */}
                <ProductPreview product={product} region={region} isFeatured />
              </li>
            ))}
      </ul>
      <div className="flex justify-center mt-12">
        <LocalizedClientLink href={`/collections/${collection.handle}`}>
          <div className="px-8 py-4 bg-ui-bg-subtle hover:bg-ui-bg-subtle-hover border border-ui-border-base hover:border-ui-border-interactive rounded-lg transition-all duration-200 min-w-[200px] text-center">
            <span className="text-lg font-medium text-ui-fg-base">
              Ver Colección
            </span>

            <Text className="txt-small text-ui-fg-muted">
              {collection.title}
            </Text>
          </div>
        </LocalizedClientLink>
      </div>
    </div>
  )
}
