import React from "react";

const Error = () => {
  return (
    <div className=" flex flex-col h-screen  bg-dark_blue bg-waves bg-bottom bg-no-repeat">
      <div className="flex justify-center bg-purple">
        <span className="font-bold text-3xl text-white p-4">
          Oh No!! Something went wrong, Please try again later
        </span>
      </div>
      <div className=" flex flex-col justify-center items-center ">
        <div>
          <span className="flex text-white  text-4xl p-10 m-10">
            If you still experience the same error please mail me at @mail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Error;
