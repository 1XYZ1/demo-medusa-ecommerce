import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center w-full h-full text-small-regular max-w-[1440px] mx-auto px-4 small:px-8">
          {/* Mobile hamburger menu */}
          <div className="h-full flex items-center small:hidden">
            <SideMenu regions={regions} />
          </div>

          {/* Logo - different behavior for mobile vs desktop */}
          <div className="flex items-center h-full flex-1 justify-center small:flex-none small:justify-start">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              Lentes de Sol
            </LocalizedClientLink>
          </div>

          {/* Desktop navigation links - Centered */}
          <div className="hidden small:flex items-center gap-x-16 h-full flex-1 justify-center">
            <LocalizedClientLink
              className="hover:text-ui-fg-base transition-colors duration-200 text-base font-medium"
              href="/"
              data-testid="nav-home-link"
            >
              Home
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-base transition-colors duration-200 text-base font-medium"
              href="/store"
              data-testid="nav-store-link"
            >
              Tienda
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-base transition-colors duration-200 text-base font-medium"
              href="/search"
              scroll={false}
              data-testid="nav-search-link"
            >
              Buscador
            </LocalizedClientLink>
          </div>

          {/* Right side - Account and Cart */}
          <div className="flex items-center gap-x-4 small:gap-x-12 h-full">
            <div className="hidden small:flex items-center gap-x-12 h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base transition-colors duration-200 text-base font-medium"
                href="/account"
                data-testid="nav-account-link"
              >
                Cuenta
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Carrito (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
