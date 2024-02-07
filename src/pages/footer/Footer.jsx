const Footer = ({ value: { titles, links } }) => {
  return (
    <div className="hero-bg ">
      <div className="container  w-screen mx-auto  grid gap-1 ">
        <div
          className="flex items-center justify-center 
        font-semibold text-slate-100 pt-3  "
        >
          {titles.map((title, key) => {
            return (
              <div className=" w-[15rem] max-md:w-[7rem]" key={key}>
                <h1 className="">{title.title}</h1>
              </div>
            );
          })}
        </div>
        <div className="flex  justify-center text-slate-300 pb-6">
          {links.map((link, i) => {
            return (
              <ul key={i} className=" w-[15rem]  max-md:w-[7.5rem] ">
                {link.map((value, index) => (
                  <li
                    key={index}
                    className="hover:text-slate-50 transition-all ease-in-out duration-500 
                                    cursor-pointer hover:translate-x-[0.5rem]"
                  >
                    {value.link}
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
