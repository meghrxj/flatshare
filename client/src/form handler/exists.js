import React from "react";
const Exist = (ct) => {
  return (
    <div className=" flex flex-col h-screen  bg-dark_blue bg-waves bg-bottom bg-no-repeat">
      <div className="flex justify-center bg-purple">
        <span className="font-bold text-3xl text-white p-4">Whooops!</span>
      </div>
      <div className=" flex flex-col justify-center items-center ">
        <div>
          <span className="flex text-white  text-4xl p-10 m-10">
            The data you provided already exists in our Database.
          </span>
        </div>
      </div>
    </div>
  );
};
export default Exist;
