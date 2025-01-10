import React from "react";

const MainTitle = (props) => {
  return (
    <>
      <div className="flex justify-center  shadow-sm">
        <p
          className="container mx-auto text-xl sm:text-2xl pb-5 font-bold text-slate-700 text-center "
          data-aos="fade-down"
        >
          {props.title}
        </p>
      </div>
    </>
  );
};

export default MainTitle;
