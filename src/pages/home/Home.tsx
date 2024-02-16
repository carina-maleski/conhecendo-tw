import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div>
        <h3 className="text-xl">justify-content alinhamento horizontal</h3>
        <h5>justify-start Esquerda basis-1/3</h5>
        <div className="flex flex-row justify-start m-3">
          <div className="basis-1/3 bg-blue-300">01</div>
          <div className="basis-1/3 bg-blue-700">01</div>
        </div>
        <h5>justify-end Direita basis-1/4</h5>
        <div className="flex flex-row justify-end m-3">
          <div className="basis-1/4 bg-blue-300">01</div>
          <div className="basis-1/4 bg-blue-700">01</div>
        </div>
        <h5>justify-center Centro basis-1/5</h5>
        <div className="flex flex-row justify-center m-3">
          <div className="basis-1/5 bg-blue-300">01</div>
          <div className="basis-1/5 bg-blue-700">01</div>
        </div>
        <h5>justify-around estremidades basis-1/6</h5>
        <div className="flex flex-row justify-between m-3">
          <div className="basis-1/6 bg-blue-300">01</div>
          <div className="basis-1/6 bg-blue-700">01</div>
        </div>
        <h5>justify-around estremidades com espaçamento basis-1/7</h5>
        <div className="flex flex-row justify-around m-3">
          <div className="basis-1/7 bg-blue-300">01</div>
          <div className="basis-1/7 bg-blue-700">01</div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl">justify-content alinhamento vertical</h3>
        <div className="w-auto h-60 bg-violet-200 flex justify-center items-start m-3">
          <div className="basis-1/4 bg-violet-900 text-white m-2">
            justify-center items-start alinhamento horizontal centro/vertical
            topo
          </div>
        </div>
        <div className="w-auto h-60 bg-cyan-100 flex justify-center items-center m-3">
          <div className="basis-1/4 bg-cyan-900 text-white m-2">
            justify-center items-center alinhamento horizontal centro/vertical
            centro
          </div>
        </div>
        <div className="w-auto h-60 bg-teal-100 flex justify-center items-end m-3">
          <div className="basis-1/4 bg-teal-900 text-white">
            justify-center items-end alinhamento horizontal centro/vertical base
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
