export default function StoreSection() {
  return (
    <section
      className="w-full mx-auto my-12 relative shadow-md flex items-center justify-center min-h-[250px] bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://storage.pixteller.com/designs/designs-images/2019-03-27/05/simple-background-backgrounds-passion-simple-1-5c9b95d2d9f93.png")`,
        backgroundSize: "100% 100%",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-16 text-center text-green-900">
        <h2 className="text-3xl font-bold mb-6">Store</h2>
        <div className="flex w-full max-w-lg bg-white rounded-full overflow-hidden shadow-md">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button className="px-6 py-2 bg-green-700 text-white font-medium hover:bg-green-800">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
