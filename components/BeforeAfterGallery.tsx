export default function BeforeAfterGallery() {
  const pairs = [1, 2, 3, 4];
  return (
    <section className="section-pad bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-primary-900">
            Before & After
          </h2>
          <p className="text-primary-700/70 mt-4 max-w-lg mx-auto">
            Real jobs. Real results. See the difference a professional makes.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pairs.map((i) => (
            <div key={i} className="space-y-2">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-primary-100 flex items-center justify-center">
                <span className="text-primary-400 text-xs font-medium">
                  Before {i}
                </span>
                <span className="absolute top-2 left-2 bg-primary-900/80 text-white text-xs px-2 py-0.5 rounded-full">
                  Before
                </span>
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-accent-50 flex items-center justify-center">
                <span className="text-accent-400 text-xs font-medium">
                  After {i}
                </span>
                <span className="absolute top-2 left-2 bg-accent-500 text-white text-xs px-2 py-0.5 rounded-full">
                  After
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-primary-400 text-sm mt-8">
          Photos of completed work — updated regularly
        </p>
      </div>
    </section>
  );
}
