import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
export default connect(
  ({ redirectTo, data }) => ({ redirectTo, data }),
  {}
)((props) => {
  if (props.data) {
    var name = props.data.name;
    var count = props.data.count;
    return (
      <div className=" flex flex-col h-screen  bg-dark_blue bg-waves bg-bottom bg-no-repeat">
        <div className="flex justify-center bg-purple">
          <span className="font-bold text-3xl text-white p-4">Thank You!</span>
        </div>
        <div className=" flex flex-col justify-center items-center ">
          <div>
            <span className="flex text-white  text-4xl p-10 m-10">
              {name}, we'll text you the invite soon. You are {count} on the
              waiting list, Invite your firends to move up in the list
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Redirect to="/" />;
      </>
    );
  }
});
