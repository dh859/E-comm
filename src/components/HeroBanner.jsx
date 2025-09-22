import transparent from "../assets/transparent-Photoroom (6).png";

const HeroBanner = () => {
  return (
    <section
      className="bg-blue-500 flex justify-between items-center px-10 overflow-hidden mb-6" 
      style={{ width: "1069px", height: "350px" }} // fixed banner size
    >
      {/* Left Content */}
      <div className="max-w-md text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Adidas Men Running <br /> Sneakers
        </h1>
        <p className="text-sm md:text-base mb-6 opacity-90">
          Performance and design. Taken right to the edge.
        </p>
        <button className="text-white font-semibold underline underline-offset-4 hover:text-gray-200 transition">
          SHOP NOW
        </button>
      </div>

      {/* Right Image */}
      <div className="flex justify-center items-center h-full w-1/2">
        <img
          src={transparent}
          alt="Sneaker"
          className="h-[300px] object-contain drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
