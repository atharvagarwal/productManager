import React, { useState } from "react";
import axios from "axios";
const ProductList = () => {
  const [product, setProduct] = useState({});
  const submitHandler = (e) => {
    console.log(product);
    e.preventDefault();
    axios
      .post("http://localhost:3001/product/createProduct", product)
      .then(function (response) {
        alert("Items Listed on DB successfully");
      })
      .catch(function (error) {
        alert(error);
      });
  };
  return (
    <>
      <div
        className="flex items-center justify-around"
        onSubmit={submitHandler}
      >
        <form className="w-full max-w-lg flex justify-center p-6 flex-col">
          <h1 className="text-3xl p-6 font-bold text-center">List Products</h1>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Product Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Mobile"
                onChange={(e) => {
                  let productName = { productName: e.target.value };
                  setProduct({ ...product, ...productName });
                }}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Category
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Electronics"
                onChange={(e) => {
                  let category = { category: e.target.value };
                  setProduct({ ...product, ...category });
                }}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Product Image
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Drive link for product image"
                onChange={(e) => {
                  let image = { productImage: e.target.value };
                  setProduct({ ...product, ...image });
                }}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Price
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Rs.10000"
                onChange={(e) => {
                  let price = { price: e.target.value };
                  setProduct({ ...product, ...price });
                }}
                required
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Manf.
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="Oppo"
                onChange={(e) => {
                  let manf = { manufacturerName: e.target.value };
                  setProduct({ ...product, ...manf });
                }}
                required
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Contact
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="9090390903"
                onChange={(e) => {
                  let manfContact = { manufacturerContact: e.target.value };
                  setProduct({ ...product, ...manfContact });
                }}
                required
              />
            </div>

            <div className="w-full px-3 my-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Short Description 1
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="8 GB RAM 128 GB ROM"
                onChange={(e) => {
                  let descOne = { descOne: e.target.value };
                  setProduct({ ...product, ...descOne });
                }}
                required
              />
            </div>
            <div className="w-full px-3 my-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Short Description 2
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Snapdragon 720 Processor"
                onChange={(e) => {
                  let descTwo = { descTwo: e.target.value };
                  setProduct({ ...product, ...descTwo });
                }}
                required
              />
            </div>
            <div className="w-full px-3 my-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Short Description 3
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="33W Fast Charging With 5000 MAH Battery"
                onChange={(e) => {
                  let descThree = { descThree: e.target.value };
                  setProduct({ ...product, ...descThree });
                }}
                required
              />
            </div>
            <div className="w-full px-3 my-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Quantity Available
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="100 (In Numbers)"
                onChange={(e) => {
                  let qty = { qty: e.target.value };
                  setProduct({ ...product, ...qty });
                }}
                required
              />
            </div>
          </div>
          <center>
            {" "}
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-1/2"
              type="submit"
            >
              Submit
            </button>
          </center>
        </form>
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjBzZXJ2aWNlc3xlbnwwfHwwfHw%3D&w=1000&q=80"
          className="hidden min-[1280px]:inline"
        ></img>
      </div>
    </>
  );
};

export default ProductList;
