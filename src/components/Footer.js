import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link, scroller } from "react-scroll";

const Footer = () => {
  const scrollToSearch = () => {
    scroller.scrollTo("searchScroll", {
      smooth: true,
      duration: 1000,
      offset: -100,
    });
  };

  return (
    <footer className="text-white py-20 bg_gradient ">
      <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
        <div className="flex">
          <p className="font-bold text-center">
            Flavors of the <span className="text-green-500 text-xl">Feast</span>
          </p>
        </div>
        <div>
          <ul className="md:flex text-white gap-6">
            <li>
              <a href="/">Home</a>
            </li>
            <Link
              onClick={scrollToSearch}
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Search
            </Link>
            <li>
              <a href="/favorites">Favorites</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <p>SOCIAL MEDIA</p>
          <div className="flex mt-4 gap-3">
            <a
              href="/"
              className="bg-blue-600 p-1.5 rounded-full text-white hover:text-gray-500 hover:scale-110"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="/"
              className="bg-pink-600 p-1.5 rounded-full text-white hover:text-gray-500 hover:scale-110"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="/"
              className="bg-blue-600 p-1.5 rounded-full text-white hover:text-gray-500 hover:scale-110"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="/"
              className="bg-red-600 p-1.5 rounded-full text-white hover:scale-110"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-10">
        <span className="text-gray-400 leading-10">Copyright &copy; 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
