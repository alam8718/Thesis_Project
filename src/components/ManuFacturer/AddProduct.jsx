import React, {useState} from "react";
import GenerateCode from "./GenerateCode";

function AddProduct() {
  const [formValue, setFormValue] = useState({
    ManfacturerId: "",
    ProductSerial: "",
    ProductName: "",
    ProductBrand: "",
    ProductPrice: "",
  });

  const [combineText, setCombineText] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCombineText(
      ` Manufacturer ID: ${formValue.ManfacturerId},\n Product Serial: ${formValue.ProductSerial}, \n Product Name: ${formValue.ProductName},\n Product Brand: ${formValue.ProductBrand},\n Product Price: ${formValue.ProductPrice}`
    );
  };
  console.log(combineText);

  return (
    <>
      <div className="max-w-4xl mx-auto  h-auto my-20 bg-slate-200 ">
        <div className="text-center pt-10 my-10 shadow-lg">
          <h1 className="text-3xl pb-4 uppercase">Add Product</h1>
        </div>
        <div className="flex">
          <form onSubmit={handleSubmit}>
            <div className=" flex flex-wrap gap-10  justify-between mx-20 items-end ">
              <div className="">
                <label htmlFor="Manufacturer Id: ">Manfacturer Id : </label>
                <input
                  type="text"
                  name="ManfacturerId"
                  value={formValue.ManfacturerId}
                  onChange={handleChange}
                  className="p-2 border text-black border-slate-500 bg-slate-100 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="Product Serial: ">Product Serial : </label>
                <input
                  type="text"
                  name="ProductSerial"
                  value={formValue.ProductSerial}
                  onChange={handleChange}
                  className="p-2 border border-slate-500 bg-slate-100 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="Product Name:  ">Product Name : </label>
                <input
                  type="text"
                  name="ProductName"
                  value={formValue.ProductName}
                  onChange={handleChange}
                  className="p-2 border border-slate-500 bg-slate-100 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="Product Brand: ">Product Brand : </label>
                <input
                  type="text"
                  name="ProductBrand"
                  value={formValue.ProductBrand}
                  onChange={handleChange}
                  className="p-2 border border-slate-500 bg-slate-100 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="Product Price: ">Product Price : </label>
                <input
                  type="text"
                  name="ProductPrice"
                  value={formValue.ProductPrice}
                  onChange={handleChange}
                  className="p-2 border border-slate-500 bg-slate-100 rounded-lg"
                />
              </div>
            </div>
            {/* button  */}
            <div className="my-20 flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-amber-400 rounded-lg">
                Add The Product
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <GenerateCode combineText={combineText} />
      </div>
    </>
  );
}

export default AddProduct;
