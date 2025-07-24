import banner from '../assets/banner1.jpg';

const MidBanner = () => {
  return (
    <div className="bg-gray-100 h-[90vh] md:py-10">
      <div
        className="relative w-full mx-w-7xl mx-auto rounded-2xl mt-0 bg-cover bg-center h-full md:h-[600px] object-cover"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            height: '100%',
        }}
      >
        <div className="absolute inset-0 bg-black/60 rounded-2xl flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Next-Gen Electronics at Your Fingertips
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Discover the latest tech innovations with unbeatable prices and
              free shipping on all orders.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
