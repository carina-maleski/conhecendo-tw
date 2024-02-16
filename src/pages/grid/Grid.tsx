import React from "react";

function Grid() {
  return (
    <>
      <div>
        <h3 className="text-xl font-semibold mt-12">Grid 'n Containers</h3>
        <div className="grid grid-cols-12 gap-2 m-4">
          <div className="col-span-6 bg-indigo-100 ">container 1</div>
          <div className="col-span-6 bg-rose-100">container 2</div>
        </div>

        <div className="grid grid-cols-12 gap-2 m-4">
          <div className="col-span-8 bg-indigo-200">container 1</div>
          <div className="col-span-4 bg-rose-200">container 2</div>
        </div>

        <div className="grid grid-cols-12 gap-2 m-4">
          <div className="col-span-4 bg-indigo-300">container 1</div>
          <div className="col-span-4 bg-rose-300">container 2</div>
          <div className="col-span-4 bg-sky-300">container 3</div>
        </div>

        <div className="grid grid-cols-12 gap-2 m-4">
          <div className="col-span-3 bg-indigo-400 ">container 1</div>
          <div className="col-span-3 bg-rose-400">container 2</div>
          <div className="col-span-3 bg-sky-400">container 3</div>
          <div className="col-span-3 bg-teal-400">container 4</div>
        </div>

        <div className="grid grid-cols-12 gap-2 m-4">
          <div className="col-span-4 bg-indigo-500">container 1</div>
          <div className="col-span-4 bg-rose-500">container 2</div>
          <div className="col-span-2 bg-sky-500">container 3</div>
          <div className="col-span-2 bg-teal-500">container 4</div>
        </div>
      </div>
    </>
  );
}

export default Grid;
