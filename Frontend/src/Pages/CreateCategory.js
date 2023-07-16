import React, { useState } from "react";
import axios from "axios";

const Createcategory = () => {
  const [category, setCategory] = useState({});
  const submitHandler = (e) => {
    console.log(category);
    e.preventDefault();
    axios
      .post("http://localhost:3001/product/createCategory", category)
      .then(function (response) {
        alert("Categories Listed on DB successfully");
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
          <h1 className="text-3xl p-6 font-bold text-center">List category</h1>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                category Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Category Name : ex-electronics"
                onChange={(e) => {
                  let categoryName = { categoryName: e.target.value };
                  setCategory({ ...category, ...categoryName });
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
                category Image
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Drive link for category image"
                onChange={(e) => {
                  let image = { categoryImage: e.target.value };
                  setCategory({ ...category, ...image });
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

export default Createcategory;