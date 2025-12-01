export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-[#d9c4b8] text-gray-1500"> 
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/cat_logo.jpg')", opacity: 0.08 }} 
        />

        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 text-center w-full px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-semibold text-[#2b1f17] drop-shadow-sm">
            Premium Coffee.
            <br /> Crafted With Passion.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#3a2b24] max-w-2xl mx-auto">
            Experience artisan-crafted coffee made from fresh, ethically sourced beans.
          </p>

        
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#f6efe8]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold">Specialty Coffee</h3>
            <p className="text-gray-600 mt-2">Roasted in small batches for rich, premium flavor.</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold">Handcrafted Drinks</h3>
            <p className="text-gray-600 mt-2">Expertly brewed by our passionate baristas.</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold">Warm Atmosphere</h3>
            <p className="text-gray-600 mt-2">Designed for comfort, connection, and creativity.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
