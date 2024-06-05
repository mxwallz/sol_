"use client";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";

const Header = () => {
  const { data: session } = useSession();

  const pathUrl = usePathname();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const { theme, setTheme } = useTheme();

  return (
    <>
      <header
      
        className={`ud-header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "shadow-nav fixed z-[999] border-b border-stroke bg-white/80 backdrop-blur-[5px] dark:border-violet-900 dark:decoration-indigo-700"
            : "absolute bg-transparent"
        }`}
        style={{
          background: 'radial-gradient(circle,  rgba(102,38,191,1) 0%, rgba(17,26,38,1) 100%)'
        }}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <Link
                href="/"
                className={`navbar-logo block w-full ${
                  sticky ? "py-2" : "py-5"
                } `}
              >
                {pathUrl !== "/" ? (
                  <>
                    <Image
                      src={`/images/logo/logo_v2.svg`}
                      alt="logo"
                      width={240}
                      height={30}
                      className="header-logo w-full dark:hidden"
                    />
                    <Image
                      src={`/images/logo/logo_v2.svg`}
                      alt="logo"
                      width={240}
                      height={30}
                      className="header-logo hidden w-full dark:block"
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src={`${
                        sticky
                          ? "/images/logo/logo_v2.svg"
                          : "/images/logo/logo_v2.svg"
                      }`}
                      alt="logo"
                      width={140}
                      height={30}
                      className="header-logo w-full dark:hidden"
                    />
                    <Image
                      src={"/images/logo/logo_v2.svg"}
                      alt="logo"
                      width={140}
                      height={30}
                      className="header-logo hidden w-full dark:block"
                    />
                  </>
                )}
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                      pathUrl === "/" && sticky
                        ? "bg-dark dark:bg-white"
                        : "bg-white"
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? "opacity-0 " : " "
                    } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                      pathUrl === "/" && sticky
                        ? "bg-dark dark:bg-white"
                        : "bg-white"
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                      pathUrl === "/" && sticky
                        ? "bg-dark dark:bg-white"
                        : "bg-white"
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 xl:gap-x-12">
                    {menuData.map((menuItem, index) =>
                      menuItem.path ? (
                        <li key={index} className="group relative">
                          {pathUrl !== "/" ? (
                            <Link
                              onClick={navbarToggleHandler}
                              scroll={false}
                              href={menuItem.path}
                              className={`ud-menu-scroll flex py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6 ${
                                pathUrl === menuItem?.path && "text-primary"
                              }`}
                            >
                              {menuItem.title}
                            </Link>
                          ) : (
                            <Link
                              scroll={false}
                              href={menuItem.path}
                              className={`ud-menu-scroll flex py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${
                                sticky
                                  ? "text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                                  : "text-body-color dark:text-white lg:text-white"
                              } ${
                                pathUrl === menuItem?.path &&
                                sticky &&
                                "!text-primary"
                              }`}
                            >
                              {menuItem.title}
                            </Link>
                          )}
                        </li>
                      ) : (
                        <li className="submenu-item group relative" key={index}>
                          {pathUrl !== "/" ? (
                            <button
                              onClick={() => handleSubmenu(index)}
                              className={`ud-menu-scroll flex items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6`}
                            >
                              {menuItem.title}

                              <span className="pl-1">
                                <svg
                                  className={`duration-300 lg:group-hover:rotate-180`}
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                          ) : (
                            <button
                              onClick={() => handleSubmenu(index)}
                              className={`ud-menu-scroll flex items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${
                                sticky
                                  ? "text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                                  : "text-white"
                              }`}
                            >
                              {menuItem.title}

                              <span className="pl-1">
                                <svg
                                  className={`duration-300 lg:group-hover:rotate-180`}
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </button>
                          )}

                          <div
                            className={`submenu relative left-0 top-full w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === index ? "!-left-[25px]" : "hidden"
                            }`}
                          >
                            {menuItem?.submenu?.map((submenuItem: any, i) => (
                              <Link
                                href={submenuItem.path}
                                key={i}
                                className={`block rounded px-4 py-[10px] text-sm ${
                                  pathUrl === submenuItem.path
                                    ? "text-primary"
                                    : "text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                                }`}
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </li>
                      ),
                    )}
                  </ul>
                </nav>
              </div>
              <div className="justify-end pr-16 sm:flex lg:pr-0">
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


              
              {/*
              
              <div className="hidden items-center justify-end pr-16 sm:flex lg:pr-0">
                {/*
                 theme toggler 
                <button
                  aria-label="theme toggler"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex h-8 w-8 items-center justify-center text-body-color duration-300 dark:text-white"
                >
                  <span>
                    <svg
                      viewBox="0 0 16 16"
                      className="hidden h-[22px] w-[22px] fill-current dark:block"
                    >
                      <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" />
                    </svg>

                    <svg
                      viewBox="0 0 23 23"
                      className={`h-[30px] w-[30px] fill-current text-dark dark:hidden ${
                        !sticky && pathUrl === "/" && "text-white"
                      }`}
                    >
                      <g clipPath="url(#clip0_40_125)">
                        <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
                      </g>
                    </svg>
                  </span>
                </button>
                -- end toggle 
            
                {session?.user ? (
                  <>
                    <p
                      className={`loginBtn px-7 py-3 text-base font-medium ${
                        !sticky && pathUrl === "/" ? "text-white" : "text-dark"
                      }`}
                    >
                      {session?.user?.name}
                    </p>
                    {pathUrl !== "/" || sticky ? (
                      <button
                        onClick={() => signOut()}
                        className="signUpBtn rounded-lg bg-primary bg-opacity-100 px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-20 hover:text-dark"
                      >
                        Sign Out
                      </button>
                    ) : (
                      <button
                        onClick={() => signOut()}
                        className="signUpBtn rounded-lg bg-white bg-opacity-20 px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                      >
                        Sign Out
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    {pathUrl !== "/" ? (
                      <>
                        <Link
                          href="/signin"
                          className="px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white"
                        >
                          Sign In
                        </Link>
                        <Link
                          href="/signup"
                          className="rounded-lg bg-primary px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-primary/90 dark:bg-white/10 dark:hover:bg-white/20"
                        >
                          Sign Up
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          href="/signin"
                          className={`px-7 py-3 text-base font-medium hover:opacity-70 ${
                            sticky ? "text-dark dark:text-white" : "text-white"
                          }`}
                        >
                          Sign In
                        </Link>
                        <Link
                          href="/signup"
                          className={`rounded-lg px-6 py-3 text-base font-medium text-white duration-300 ease-in-out ${
                            sticky
                              ? "bg-primary hover:bg-primary/90 dark:bg-white/10 dark:hover:bg-white/20"
                              : "bg-white/10 hover:bg-white/20"
                          }`}
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </>
                )}
              </div>
              */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
