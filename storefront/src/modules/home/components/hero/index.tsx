import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={process.env.NEXT_PUBLIC_HERO_VIDEO_URL} type="video/mp4" />
        {/* Fallback para navegadores que no soportan video */}
        Tu navegador no soporta el elemento video.
      </video>
      <div className="hero-gradient absolute inset-0" />

      {/* Contenido principal */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Título principal */}
          <Heading
            level="h1"
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight"
          >
            Descubre Tu
            <span className="block gradient-text bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Estilo Bajo el Sol
            </span>
          </Heading>
        </div>
      </div>

      {/* Sección inferior con texto y botón */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <div className="space-y-3">
          {/* Texto principal */}
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
            Filtro UV400 + diseño ligero
          </h2>

          {/* Subtítulo */}
          <p className="text-sm md:text-base text-white font-light">
            Envío gratis sobre $35,000. Devolución 30 días
          </p>

          {/* Botón */}
          <div className="pt-1">
            <LocalizedClientLink href="/store">
              <Button
                size="large"
                className="bg-white text-black font-bold text-xs md:text-sm px-6 py-2 uppercase tracking-wide hover:bg-white/70 transition-colors duration-200 rounded-none"
              >
                VER COLECCIÓN
              </Button>
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
