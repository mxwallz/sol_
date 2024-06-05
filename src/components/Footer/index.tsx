import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp relative z-10 pt-20 "
      style={{ background:'linear-gradient(90deg, rgba(108,114,217,1) 50%, rgba(39,242,168,1) 100%)'}}
      data-wow-delay=".15s"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 inline-block max-w-[160px]">
                
                <Image
                  src="/images/logo/logo_v2.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className="max-w-full"
                />
              </Link>
              <p className="mb-8 max-w-[270px] text-base text-gray-7">
                We create digital experiences for brands and companies by using
                technology.
              </p>
              <div className="-mx-3 flex items-center">
              <a
                  aria-label="social link"
                  href="/#"
                  className="px-3 text-gray-7 hover:color-blue-300"
                >
                <svg fill="#ffffff" width="28" height="28" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M20.3 57.3996C43.9 57.3996 56.7 37.8996 56.7 20.9996C56.7 20.5996 56.7 19.8996 56.6 19.2996C59.1 17.4996 61.3 15.1996 63 12.6996C60.6 13.7996 58.2 14.3996 55.7 14.6996C58.4 13.0996 60.4 10.5996 61.3 7.59961C58.8 8.99961 56.2 10.0996 53.1 10.6996C50.7 8.19961 47.5 6.59961 43.8 6.59961C36.7 6.59961 30.9 12.3996 30.9 19.4996C30.9 20.4996 31 21.4996 31.2 22.4996C20.9 21.7996 11.5 16.6996 5.1 8.99961C4 10.9996 3.4 13.0996 3.4 15.3996C3.4 19.8996 5.7 23.6996 9.2 25.9996C7.1 25.8996 5.1 25.2996 3.4 24.3996C3.4 24.4996 3.4 24.4996 3.4 24.4996C3.4 30.5996 7.8 35.8996 13.6 37.0996C12.5 37.3996 11.3 37.4996 10.4 37.4996C9.6 37.4996 8.7 37.3996 8 37.1996C9.7 42.2996 14.4 45.9996 20 46.0996C15.6 49.4996 10.1 51.5996 4.2 51.5996C3 51.7996 2 51.5996 1 51.4996C6.4 55.2996 13.1 57.3996 20.3 57.3996Z"/></svg>
                </a>
                <a
                  aria-label="social link"
                  href="/#"
                  className="px-3 text-gray-7 hover:color-blue-300"
                >
               <svg fill="#ffffff" width="28" height="28" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M53.8 10.2C48.1 4.2 40.3 1 32 1C23.7 1 15.9 4.2 10.2 10.2C4.5 16.2 1 23.7 1 32C1 40.3 4.2 48.1 10.2 53.8C16.2 59.5 23.7 63 32 63C40.3 63 48.1 59.8 53.8 53.8C59.5 47.8 63 40.3 63 32C63 23.7 59.8 15.9 53.8 10.2ZM32 60C16.5 60 4 47.5 4 32C4 16.5 16.5 4 32 4C47.5 4 60 16.7 60 32C60 47.3 47.5 60 32 60Z"/><path d="M46.6999 17.5997C45.5999 16.8997 43.9999 17.4997 43.5999 17.6997L13.9999 29.2997C12.8999 29.6997 11.6999 30.5997 11.9999 31.9997C12.0999 33.5997 13.7999 34.0997 13.9999 34.2997L20.8999 36.6997C21.3999 38.6997 22.0999 40.6997 22.6999 42.6997C22.8999 43.3997 23.1999 44.0997 23.3999 44.7997C23.5999 45.3997 23.6999 45.9997 24.0999 46.4997C24.2999 46.6997 24.4999 46.8997 24.6999 46.9997C25.0999 47.0997 25.4999 47.1997 25.8999 47.1997C26.1999 47.1997 26.6999 47.0997 26.8999 46.7997L30.7999 43.0997L37.3999 48.1997C37.4999 48.2997 37.4999 48.2997 37.6999 48.2997C38.2999 48.5997 38.7999 48.5997 39.0999 48.5997C39.3999 48.5997 39.8999 48.4997 40.1999 48.4997C41.2999 48.0997 41.8999 46.9997 41.8999 46.7997C41.8999 46.6997 41.9999 46.6997 41.9999 46.6997L47.3999 19.7997C47.3999 19.6997 47.3999 19.6997 47.3999 19.6997C47.4999 18.2997 46.8999 17.8997 46.6999 17.5997ZM26.5999 43.5997L26.9999 39.8997L28.9999 41.2997L26.5999 43.5997ZM39.8999 45.6997C39.7999 45.9997 39.5999 46.1997 39.2999 46.1997C39.0999 46.1997 38.9999 46.0997 38.7999 45.9997C35.0999 43.0997 31.4999 40.2997 27.7999 37.3997C31.9999 33.7997 36.0999 30.0997 40.1999 26.2997C40.6999 25.8997 41.0999 25.4997 41.3999 24.8997C41.6999 24.2997 41.6999 23.5997 41.2999 23.1997C40.8999 22.7997 40.2999 22.5997 39.6999 22.7997C39.0999 22.8997 38.5999 23.1997 38.0999 23.4997C32.5999 26.9997 27.1999 30.4997 21.6999 33.8997C21.4999 33.9997 21.2999 34.0997 21.0999 34.1997C20.8999 34.1997 20.6999 34.1997 20.4999 34.0997C19.3999 33.6997 18.1999 33.3997 17.0999 32.9997C15.9999 32.5997 14.7999 32.3997 13.7999 31.7997C24.0999 27.6997 34.3999 23.6997 44.7999 19.5997C43.1999 28.0997 41.5999 36.5997 39.9999 45.1997C39.9999 45.2997 39.8999 45.4997 39.8999 45.6997Z"/></svg>
                </a>
              </div>
            </div>
          </div>



   

      <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-2/3 lg:w-1/2">
              <div className="my-1">
                <div className="-mx-3 flex items-center justify-center md:justify-start">
                  <a
                    href="/#"
                    className="px-3 text-base text-gray-7 hover:text-white hover:underline"
                  >
                    Privacy policy
                  </a>
                  <a
                    href="/#"
                    className="px-3 text-base text-gray-7 hover:text-white hover:underline"
                  >
                    Legal notice
                  </a>
                  <a
                    href="/#"
                    className="px-3 text-base text-gray-7 hover:text-white hover:underline"
                  >
                    Terms of service
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/2">
              <div className="my-1 flex justify-center md:justify-end">
                <p className="text-base text-gray-7">
                  Designed and Developed by{" "}

                    Dextoolbox
                
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
