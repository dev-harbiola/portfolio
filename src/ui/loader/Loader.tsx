const Loader = () => {
  return (
    <div className="bg-zinc-900 h-screen w-screen flex items-center justify-center">
      <div className="flex justify-center items-center flex-col gap-y-5 ">
        <img
          src="/public/logo.png"
          alt="logo"
          width={68}
          className="animate-spin transition-all duration-500"
        />
        <span className="font-montalt text-zinc-200 text-2xl font-semibold">
          {" "}
            Abiola Fasanya
        </span>
      </div>
    </div>
  );
};

export default Loader;
