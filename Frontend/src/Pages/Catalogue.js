import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Components/Sidebar";
import ProductList from "./ProductList";
import exportFromJSON from "export-from-json";


const fileName = "download";
const exportType = exportFromJSON.types.csv;
const Catalogue = () => {
  const [items, setItems] = useState([]);
  const [filterItems, setfilterItems] = useState([]);
  const [category, setCategory] = useState("getAll");
  const [filtered, setFiltered] = useState(true);
  const [categories, setCategories] = useState([]);
  const [desc, setDesc] = useState(null);
  const [hide, setHide] = useState("hidden");
  const [dispUpdate, setDispUpdate] = useState(false);
  const [dispDelete, setDispDelete] = useState(false);
  const [id, setId] = useState(undefined);
  const [data,setData]=useState({})

  const handleUpdate=(e)=>{
    e.preventDefault();
    console.log(data)
    axios.patch(`http://localhost:3001/product/updateProduct/${id}`,
            data,
            { headers: { 'Content-Type': 'application/json'}, }
        ).then((response) => {
          console.log(response);
          getProducts()
        }).catch((error) => {
            console.log(error.message);
        })

    setDispUpdate(false);
    setId(undefined);
  }
  useEffect(() => {
    axios.get("http://localhost:3001/product/getProduct").then((res) => {
      setItems(res.data);
    });
    axios.get("http://localhost:3001/product/getCategory").then((res) => {
      setCategories(res.data);
    });
  }, []);

  const getProducts = () => {
    axios.get("http://localhost:3001/product/getProduct").then((res) => {
      setItems(res.data);
    });
  };

  const filterByCategory = (e, category) => {
    e.preventDefault();
    setCategory(category);
    axios
      .get(`http://localhost:3001/product/filter/${category}`)
      .then((res) => {
        setItems(res.data);
      });
  };

  const filterDesc = (e) => {
    console.log(desc);
    e.preventDefault();
    axios
      .get(`http://localhost:3001/product/filterDesc/${desc}`)
      .then((res) => {
        setItems(res.data);
      });
  };

  const exportToExcel = async (e) => {
    exportFromJSON({ data: items, fileName, exportType });
  };

  const deleteProduct = async (id) => {
    const url = `http://localhost:3001/product/deleteProduct/${id}`;
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data);
        getProducts();
      })
      .catch((err) => {
        console.log(err);
      });
    setDispDelete(false);
    setId(undefined);
  };

  if (dispDelete) {
    return (
      <>
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/*
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
From: "opacity-0"
To: "opacity-100"
    Leaving: "ease-in duration-200"
From: "opacity-100"
To: "opacity-0"
  */}
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              {/*
  Modal panel, show/hide based on modal state.

  Entering: "ease-out duration-300"
    From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    To: "opacity-100 translate-y-0 sm:scale-100"
  Leaving: "ease-in duration-200"
    From: "opacity-100 translate-y-0 sm:scale-100"
    To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
*/}
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Delete Product
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to delete the product? All of
                          your data will be permanently removed. This action
                          cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => deleteProduct(id)}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => {
                      setDispDelete(false);
                      setId(undefined);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if(dispUpdate){
    return(
      <div className="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true">

      <div class="fixed inset-0  bg-gray-500 bg-opacity-75 transition-opacity">
      
        <div class="fixed flex flex-col gap-2 items-center justify-center inset-0 z-10 overflow-y-auto">
         
              <form className="w-full max-w-sm bg-white p-16 rounded-md">
              <p className="text-xl font-medium text-black text-center pb-6 ">Update Product</p>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              onChange={(e)=>{setData({...data,productName:e.target.value})}}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Price
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="number"
              onChange={(e)=>{setData({...data,price:e.target.value})}}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
             Qty:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              onChange={(e)=>{setData({...data,qty:e.target.value})}}
              
            />
          </div>
        </div>
        
        <div className="md:flex md:items-center">
          <div className="md:w-1/3" />
          <div className="md:w-2/3">
            <button
              className=" my-2 shadow bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={handleUpdate}
            >
              Submit
            </button>
            <button
                    type="button"
                    className="shadow bg-white hover:bg-gray-100 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
                    onClick={() => {
                      setDispUpdate(false);
                      setId(undefined);
                    }}
                  >
                    Cancel
                  </button>
          </div>
        </div>
      </form>
          </div>
          </div>
          </div>
    )
  }

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    if (hide == "hidden") {
                      setHide("inline");
                    } else {
                      setHide("hidden");
                    }
                  }}
                >
                  <path
                    clipRule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center flex-wrap">
              <div className="flex items-center flex-wrap">
                <div
                  className={`z-50 ${hide} md:hidden my-2 ml-2 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                  id="dropdown-user"
                >
                  <ul className="py-1" role="none">
                    {categories.map((category) => {
                      {
                        console.log(category.categoryName);
                      }
                      return (
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                          >
                            {category.categoryName}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed ${hide} top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div
          className={`h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800`}
        >
          <ul className="space-y-2 font-medium">
            {categories.map((category) => {
              {
                console.log(category.categoryName);
              }
              return (
                <li>
                  <button
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={(e) => {
                      filterByCategory(e, category.categoryName);
                    }}
                  >
                    <span className="ml-3">
                      {category.categoryName.toUpperCase()}
                    </span>
                  </button>
                </li>
              );
            })}
            <li>
              <button
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={(e) => {
                  getProducts();
                }}
              >
                <span className="ml-3">Get All</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <div className="flex flex-wrap justify-center">
        <form
          className="flex flex-wrap items-center justify-center gap-2 mt-[5rem]"
          onSubmit={filterDesc}
        >
          <input
            placeholder="Filter By Description"
            className="border-2 border-slate-200 px-5 py-2.5"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></input>
          <div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={console.log("submit")}
          >
            Submit
          </button></div>
          </form>
      </div>
      <div className="flex justify-center p-4 mb-6">
      <button
              onClick={exportToExcel}
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Download as Excel
            </button></div>

      <div className="flex flex-wrap justify-center items-center gap-2">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col w-full flex-wrap py-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow"
            >
              <img
                className="mx-auto my-2 w-[60%]"
                src={item.productImage}
                alt="product image"
              ></img>

              <div className="p-6">
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.productName.toUpperCase()}
                </h5>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.categoryName.toUpperCase()}
                </h5>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-3xl pr-6 font-bold text-gray-900 dark:text-white">
                    Rs.{item.price}
                  </span>

                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => {
                      if (dispDelete) {
                        setDispDelete(false);
                      } else {
                        setDispDelete(true);
                      }
                      setId(item._id);
                    }}
                  >
                    Delete
                  </button>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                   onClick={() => {
                    if (dispUpdate) {
                      setDispUpdate(false);
                    } else {
                      setDispUpdate(true);
                    }
                    setId(item._id);
                    setData({...data,id:item._id})
                  }}
                  >
                    Update
                  </button>
                </div>
              </div>
              <div className="text-black font-bold text-xl  px-6">
                Quantity Available :{item.qty}
              </div>
              <div className="text-black  px-6">
                {` Description: ${
                  item.descOne + " " + item.descTwo + " " + item.descThree
                }`}
                {console.log(item)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalogue;
