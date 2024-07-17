/* eslint-disable no-unused-vars */
"use client"
import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";

const Inputs = ({setQuery, units, setUnits}) => {
  const [city, setCity] = useState('')
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          name="city"
          placeholder="Search for city...."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-xl text-white font-light transition ease-out hover:scale-125">
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button name="imperial" className="text-xl text-white font-light transition ease-out hover:scale-125">
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;