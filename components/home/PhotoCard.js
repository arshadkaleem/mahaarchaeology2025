import React from "react";

const PhotoCard = (props) => {
  return (
    <div className="drop-shadow-lg  mx-1 border border-t-4 border-slate-500 shadow-black-500/20 bg-white rounded-b-md ">
      <img
        src={props.imgSrc}
        width="500"
        height="200"
        layout="responsive"
        className=" border rounded-t-md"
      />
      <div className="pl-2 py-3">
        <h3 className="text-slate-700 text-lg font-semibold">{props.name}</h3>
        <h4 className="text-slate-500 text-base font-semibold">
          {props.position}
        </h4>
      </div>
    </div>
  );
};

export default PhotoCard;
