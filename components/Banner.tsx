function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-6xl"> Jabbar's Blog </h1>

        <h2 className="mt-5 md:mt-5">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#F7AB0A]">
            Jabbar's special Blog
          </span>{" "}
          favourite Blog for everything information
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm ">
        lastest in spirituality | The latest in Technology | The weekly shows
        wekly health tips
      </p>
    </div>
  );
}

export default Banner;
