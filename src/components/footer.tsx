import Facebook from "../icons/facebook.tsx";
import IconNavbar from "../icons/icon-navbar.tsx";
import Instagram from "../icons/instagram.tsx";
import LinkedIn from "../icons/linkedin.tsx";
import Logo from "../icons/logo.tsx";
import Twitter from "../icons/twitter.tsx";

const linkStyleLogo = "text-xl leading-6 font-jost text-primary-100 font-bold p-0.5";

const Footer = () => {
  return (
    <footer className="border border-gray-300 w-full">
      <div className="w-full max-w-[1200px] px-12 xl:px-0 mx-auto py-[60px] grid grid-cols-3 lg:grid-cols-4 gap-4">
        {/* start */}
        <div className="col-span-3 lg:col-span-2">
          <img src="/logo_pss.png" alt="Prestige Stand Solutions" className="h-11" />
          <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray pt-[18px] pb-[33px]">
            Transforming Spaces, Captivating Audiences
          </p>

        </div>
        <div className="col-span-3 lg:col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Pages
          </h5>
          <div className="flex flex-col gap-6">
            <a
              href="/about"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              About Us
            </a>
            <a
              href="/services"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Services
            </a>
            <a
              href="/contact"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1 flex flex-col gap-4">
          <h5 className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Contact
          </h5>
          <div className="flex flex-col gap-6">
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              www.prestigestandsolutions.com
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              contact@prestigestandsolutions.com
            </p>
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              +34 645 559 047
            </p>
          </div>
        </div>

        {/* End */}
      </div>
    </footer>
  );
};

export default Footer;
