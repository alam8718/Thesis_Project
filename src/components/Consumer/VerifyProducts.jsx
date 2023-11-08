import React from "react";

function VerifyProducts() {
  return (
    <>
      <div className="max-w-4xl mx-auto my-20 shadow-lg border border-amber-400 border-spacing-2 rounded-xl h-auto bg-slate-200">
        <div className="text-center   my-10 shadow-lg">
          <h1 className="text-3xl pb-4 uppercase">Verify Products</h1>
        </div>
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-evenly text-lg">
          <div className=" ">
            <div>
              <label htmlFor=" ">Product SN : </label>
              <input
                placeholder="Enter serial number"
                type="text"
                name=" "
                className="w-full p-2 border border-slate-500 bg-slate-100 rounded-lg  "
              />
            </div>
            <div>
              <label htmlFor=" ">Consumer Code : </label>
              <input
                placeholder="Enter Code"
                type="text"
                name=" "
                className="w-full p-2 border border-slate-500 bg-slate-100 rounded-lg  "
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <button className="mb-16 px-4 py-2 bg-amber-400 rounded-lg font-semibold hover:bg-amber-500 duration-300">
            Get Product Status
          </button>
        </div>
      </div>
      {/*  */}
      <div className="max-w-4xl mx-auto my-20 shadow-lg border border-amber-400 border-spacing-2 rounded-xl h-auto bg-slate-200">
        <div className="text-center  my-5 shadow-lg">
          <h1 className="text-3xl pb-4 uppercase">Real or Fake</h1>
        </div>

        {/* status show */}
        <div className="text-center m-10 text-2xl ">
          <h1>
            Product is{" "}
            <span className="uppercase me-2 bg-green-600 px-4 py-1 rounded-lg ">
              real{" "}
            </span>{" "}
            <span className="uppercase bg-red-600 px-4 py-1 rounded-lg ">
              Fake{" "}
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default VerifyProducts;
