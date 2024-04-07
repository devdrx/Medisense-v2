export default function Button1({ text }) {
  return (
    <>
      <a
        href="#_"
        className="relative rounded min-w-32 px-5 py-2.5 overflow-hidden group bg-[#4876ee] hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
      >
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease pointer-events-none"></span>
        <span className="relative">{text}</span>
      </a>
    </>
  );
}
