import { ReactElement, useContext, useReducer, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import OlxLogo from '../assets/Logos/olx.svg'
import Search from '../assets/Logos/search.svg'
import SearchWhite from '../assets/Logos/SearchWhite.png'
import DownArrow from '../assets/Logos/downarrow.svg'
import AddImage from '../assets/Logos/add.svg'
import LocationImage from '../assets/Logos/location.png'
import ProfileImage from '../assets/Logos/ProfileImage.png'
import DownImage from '../assets/Logos/downarrow.svg'
import OlxContext from '../context/OlxContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebaseHelper/firebaseHelper'
import { DocumentData } from 'firebase/firestore'

interface stateType {
  location: boolean
  language: boolean
  login: boolean
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

    case 'LOGIN':
      return { ...state, login: !state.login }

    default:
      return state
  }
}

export default function Navbar(): ReactElement {
  const [dialogstate, dispatcher] = useReducer(reducer, {
    location: false,
    language: false,
    login: false,
  })

  const [search, setSearch] = useState<string>('')
  const context = useContext(OlxContext)
  const navigate = useNavigate()
  function locationHandler() {
    dispatcher({ type: 'LOCATION' })
  }
  function searchHandler(search: string) {
    console.log(search)
    if (search.length === 0) {
      window.location.reload()
    }
    const products = context?.products
    console.log(products)
    const regexp = new RegExp(search, 'i')
    const MatchedProduct: Array<DocumentData> = []
    products?.forEach((product) => {
      console.log(product)
      if (regexp.test(product.ProductName)) {
        MatchedProduct.push(product)
      }
    })
    context?.setProducts(MatchedProduct)
  }
  function languageHandler() {
    dispatcher({ type: 'LANGUAGE' })
  }
  function loginHandler() {
    context?.setLogindialog(true)
  }
  function logoutHandler() {
    dispatcher({ type: 'LOGIN' })

    signOut(auth).then(() => {
      context?.setAuthentication(false)
      context?.setUsername('')
    })
  }
  function profileHandler() {
    dispatcher({ type: 'LOGIN' })
  }
  function navprofileHandler() {
    dispatcher({ type: 'LOGIN' })

    navigate('/profile')
  }
  function sellHandler() {
    if (!context?.authentication) {
      context?.setLogindialog(true)
    } else {
      navigate('/postad')
    }
  }

  return (
    <>
      <div className="flex justify-start items-center bg-navbarcolor h-14 w-full">
        <img src={OlxLogo} className="h-8 w-8" onClick={() => navigate('/')} />
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
            onChange={(e) => {
              setSearch(e.target.value)
              searchHandler(e.target.value)
            }}
          />
          <div
            className="h-10 bg-borderedgecolor flex items-center justify-center  w-28"
            // onClick={searchHandler}
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
        {context?.authentication ? (
          <div className="flex flex-col">
            <button className="flex items-center justify-center ml-10">
              <img
                src={context.profileimage ? context.profileimage : ProfileImage}
                className="h-8 w-8 rounded-full"
              />
              <img
                src={DownImage}
                className="h-8  w-8"
                onClick={profileHandler}
              />
            </button>
            {dialogstate.login && (
              <div className="relative h-0">
                <div className="h-72 w-72 p-2 mt-6 bg-white shadow-lg flex flex-col items-center justify-center ">
                  <div className="flex  items-center justify-center">
                    <img src={ProfileImage} className="h-6 w-6" />
                    <p className="font-bold text-">{context.username}</p>
                  </div>
                  <button
                    className="flex items-center justify-center bg-borderedgecolor w-full p-2 text-white font-bold mt-2"
                    onClick={navprofileHandler}
                  >
                    View and Edit Profile
                  </button>
                  <button
                    className="flex mt-5 items-center justify-start font-light"
                    onClick={logoutHandler}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            className=" border-2 border-t-navbarcolor border-l-navbarcolor border-r-navbarcolor border-b-borderedgecolor font-bold text-borderedgecolor text-sm ml-10"
            onClick={loginHandler}
          >
            Login
          </button>
        )}
        <button
          className="ml-20 flex items-center justify-evenly bg-white p-2 text-borderedgecolor font-bold text-sm border-4 rounded-3xl w-20 border-t-cyan-300 border-l-yellow-400 border-b-blue-600 border-r-blue-600"
          onClick={sellHandler}
        >
          <img src={AddImage} className="h-4 w-4" />
          <p>SELL</p>
        </button>
      </div>
      <Outlet />

      <div className="flex fixed bottom-0 items-center justify-center h-10 w-full bg-borderedgecolor mt-10">
        <h1 className="text-2xl font-bold text-white">Olx</h1>
      </div>
    </>
  )
}
