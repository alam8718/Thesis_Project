import React from "react";

function AddProduct() {
  return (
    <div className="max-w-4xl mx-auto  h-auto my-20 bg-slate-200 ">
      <div className="text-center pt-10 my-10 shadow-lg">
        <h1 className="text-3xl pb-4 uppercase">Add Product</h1>
      </div>
      <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-evenly text-lg">
        <div className="flex flex-col gap-4 items-end  ">
          <div>
            <label htmlFor=" ">Manfacturer Id : </label>
            <input
              type="text"
              name=" "
              className="p-2 border border-slate-500 bg-slate-100 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="">Product SN : </label>
            <input
              type="text"
              name=" "
              className="p-2 border border-slate-500 bg-slate-100 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor=" ">Product Price : </label>
            <input
              type="text"
              name=" "
              className="p-2 border border-slate-500 bg-slate-100 rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 ">
          <div>
            <label htmlFor="">Product Name : </label>
            <input
              type="text"
              name=""
              className="p-2 border border-slate-500 bg-slate-100 rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="">Product Brand : </label>
            <input
              type="text"
              name=""
              className="p-2 border border-slate-500 bg-slate-100 rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <button className="mb-16 px-4 py-2 bg-amber-400 rounded-lg font-semibold hover:bg-amber-500 duration-300">
          Add The Product
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
