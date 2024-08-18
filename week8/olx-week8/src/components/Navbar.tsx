import { ReactElement, useReducer, useState } from 'react'
import { Outlet } from 'react-router-dom'
import OlxLogo from '../assets/Logos/olx.svg'
import Search from '../assets/Logos/search.svg'
import SearchWhite from '../assets/Logos/SearchWhite.png'
import DownArrow from '../assets/Logos/downarrow.svg'
import AddImage from '../assets/Logos/add.svg'
import LocationImage from '../assets/Logos/location.png'
interface stateType {
  location: boolean
  language: boolean
}
interface actionType {
  type: string
}

const reducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case 'LOCATION':
      return { ...state, location: !state.location }

    case 'LANGUAGE':
      return { ...state, language: !state.language }

    default:
      return state
  }
}

export default function Navbar(): ReactElement {
  const [dialogstate, dispatcher] = useReducer(reducer, {
    location: false,
    language: false,
  })
  const [search, setSearch] = useState<string>('')
  function locationHandler() {
    dispatcher({ type: 'LOCATION' })
  }
  function searchHandler() {
    console.log(search)
    alert(search)
  }
  function languageHandler() {
    dispatcher({ type: 'LANGUAGE' })
  }

  return (
    <>
      <div className="flex justify-start items-center bg-navbarcolor h-14 w-full">
        <img src={OlxLogo} className="h-8 w-8" />
        <div className="flex flex-col">
          <div className="h-10 ml-2 bg-white w-72 border-2 rounded-sm border-borderedgecolor flex items-center justify-start ">
            <img src={Search} className="ml-2 h-4 w-4" />
            <p className=" text-sm ml-2">India</p>
            <img
              src={DownArrow}
              className="h-4 w-4 ml-48"
              onClick={locationHandler}
            />
          </div>
          <div className="relative h-0">
            {dialogstate.location && (
              <div className="flex flex-col items-start justify-start bg-white shadow-lg h-52 w-72 ml-2 overflow-y-scroll">
                <p className="text-xs text-gray-500 ml-2 mt-2">
                  POPULAR LOCATIONS
                </p>
                <div className="flex justify-start items-start ml-2 mt-4">
                  <img src={LocationImage} className="h-4 w-4" />
                  <p className="text-xs font-light ml-3">Kerala</p>
                </div>
                <div className="flex justify-start items-start ml-2 mt-4">
                  <img src={LocationImage} className="h-4 w-4" />
                  <p className="text-xs font-light ml-3">Kerala</p>
                </div>
                <div className="flex justify-start items-start ml-2 mt-4">
                  <img src={LocationImage} className="h-4 w-4" />
                  <p className="text-xs font-light ml-3">Kerala</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="h-10 ml-10 bg-white w-custom border-2 rounded-sm  flex items-center justify-start">
          <input
            className="h-10 border-2 border-borderedgecolor w-input placeholder:text-sm placeholder:ml-2 "
            type="text"
            placeholder="Find Cars, Mobile Phones and ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div
            className="h-10 bg-borderedgecolor flex items-center justify-center  w-28"
            onClick={searchHandler}
          >
            <img src={SearchWhite} className=" h-6 w-6 text-white " />
          </div>
        </div>
        <div className="flex flex-col ml-10">
          <div className="flex items-center w-20 justify-center ml-2">
            <p className="text-xs font-bold text-borderedgecolor">ENGLISH</p>
            <img
              src={DownArrow}
              className="ml-2 h-4 w-4"
              onClick={languageHandler}
            />
          </div>
          <div className="relative h-0">
            {dialogstate.language && (
              <div className=" h-20 w-30 p-2 mt-6 bg-white shadow-lg flex flex-col items-center justify-center ">
                <button className="flex justify-between items-start mt-6 ">
                  <p className=" text-borderedgecolor text-sm font-bold">
                    English
                  </p>
                </button>
                <button className="flex justify-between items-start m-6">
                  <p className=" text-borderedgecolor text-sm font-bold">
                    English
                  </p>
                </button>
              </div>
            )}
          </div>
        </div>
        <button className=" border-2 border-t-navbarcolor border-l-navbarcolor border-r-navbarcolor border-b-borderedgecolor font-bold text-borderedgecolor text-sm ml-10">
          Login
        </button>
        <button className="ml-20 flex items-center justify-evenly bg-white p-2 text-borderedgecolor font-bold text-sm border-4 rounded-3xl w-20 border-t-cyan-300 border-l-yellow-400 border-b-blue-600 border-r-blue-600">
          <img src={AddImage} className="h-4 w-4" />
          <p>SELL</p>
        </button>
      </div>
      <Outlet />
    </>
  )
}
