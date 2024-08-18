import { Dispatch, ReactElement, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import DownImage from '../assets/Logos/downarrow.svg'

export default function TopBar({
  setDialog,
}: {
  setDialog: Dispatch<SetStateAction<boolean>>
}): ReactElement {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-10 flex items-center justify-center mt-2">
        <button
          className=" text-borderedgecolor font-bold flex justify-center items-center text-xs"
          onClick={() => setDialog((prev: boolean) => !prev)}
        >
          <p>ALL CATEGORIES</p>
          <img src={DownImage} className="h-6 w-6 ml-2" />
        </button>
        <Link to="/cars" className="text-xs ml-10">
          Cars
        </Link>
        <Link to="/cars" className="text-xs ml-10">
          Cars
        </Link>
        <Link to="/cars" className="text-xs ml-10">
          Cars
        </Link>
        <Link to="/cars" className="text-xs ml-10">
          Cars
        </Link>
      </div>
    </div>
  )
}
