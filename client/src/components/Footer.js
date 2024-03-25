import logo from "../assets/logo/Homsia.png";

const Footer = () => {
  return (
    <div className="footer bg-black text-white py-12 px-5 md:px-16 lg:px-20">
      <div className="upper flex flex-col lg:flex-row justify-between mb-10">
        <div className="col-1 lg:w-2/5 mb-5">
          <img
            className="logo h-10 w-24 min-w-[96px] mb-2"
            src={logo}
            alt="homesia"
          />
          <p className="tagline font-medium capitalize mb-3 font-merriweather">Your blueprint to better living.</p>
          <p className="text-gray-500" >
          At Homsia, sincerity defines our real estate excellence. Specializing in land development, apartment sales, and consultancy, we craft authentic, personalized experiences focused on sustainability and profitability. Welcome to a realm where sincerity shapes your journey.
          </p>
        </div>
        <div className="col-2 lg:w-1/5 flex lg:flex-col flex-wrap gap-2 mb-5">
          <h1 className="font-medium font-merriweather">Socials</h1>
          <a href="https://www.facebook.com/homsiapropertiesltd"><p className="cursor-pointer text-gray-500 hover:text-gray-300 w-fit">Facebook</p></a>
          <a href="https://www.instagram.com/explore/locations/100170635955437/homsia-properties-ltd/"><p className="cursor-pointer text-gray-500 hover:text-gray-300 w-fit">Instagram</p></a>
        </div>
        <div className="col-3 lg:w-1/5 flex flex-col gap-2">
          <h1 className="font-medium font-merriweather" >Contact</h1>
          <div className="contact-numbers flex flex-wrap gap-3">
            <a href="tel:01600322205"><p className="cursor-pointer text-gray-500 w-fit hover:text-gray-300">01600322205</p></a>
            <a href="tel:01717732465"><p className="cursor-pointer text-gray-500 w-fit hover:text-gray-300">01717732465</p></a>
            <a href="tel:01678175401"><p className="cursor-pointer text-gray-500 w-fit hover:text-gray-300">01678175401</p></a>
          </div>
          <p className="cursor-pointer text-gray-500 w-fit hover:text-gray-300">help@homsia.com FIX ME</p>
          <p className="cursor-pointer text-gray-500 w-fit hover:text-gray-300">A3, House 109, Mosjid Road, Banani DOHS, Dhaka</p>
        </div>
      </div>
      <hr className="border-gray-700"/>
      <div className="lower mt-10">
        <p className="text-center text-gray-500" >© 2023 Homsia Properties Ltd. Developed by <span className="cursor-pointer hover:text-gray-300">Proteron Digital</span></p>
      </div>
    </div>
  );
};

export default Footer;
