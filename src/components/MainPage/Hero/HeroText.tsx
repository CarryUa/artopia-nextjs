export default function MainPageText() {
  return (
    <div className="flex z-10 flex-col justify-between max-w-[580px] md:max-w-[400px]">
      <h2 className="text-5xl lg:text-7xl font-semibold ">
        Buy and Sell Digital Arts
      </h2>
      <p className="text-white text-[20px] ">
        The world’s largest online marketplace of online digital art
      </p>
      <p className="text-white text-[20px] font-bold">Explore</p>
      <div className="flex justify-center gap-12 sm:justify-between">
        <div className="flex flex-col">
          <p className="text-white text-[32px] font-semibold">999,000</p>
          <p className="text-white">Digital art file</p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-white text-[32px] font-semibold">2,000</p>
          <p className="text-white">Art Seller</p>
        </div>
        <div className="flex flex-col">
          <p className="text-white text-[32px] font-semibold">10,000</p>
          <p className="text-white">Buyer</p>
        </div>
      </div>
    </div>
  );
}
