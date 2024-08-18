import { DocumentData } from 'firebase/firestore'
import { ReactElement } from 'react'

import FavoriteImage from "../assets/Logos/fav.svg"
export default function Recommendations({
  products,
}: {
  products: Array<DocumentData>
}): ReactElement {

  function favHandler(id:string){
    console.log(id)
  }

  return (
    <div className="flex ml-20 items-start justify-center flex-col">
      <h1 className="font-normal mt-5 text-lg">Fresh recommendations</h1>
      <div className='flex items-center justify-center'>
        {products.map((product: DocumentData) => {
          return (
          <div key={product.id} className='flex mt-10 border border-gray-400 mr-20 flex-col items-start w-60 h-auto justify-center'>
            <img className='w-60 h-40' src={product.Images[0]}/>
            <div className='flex absolute mb-64 bg-white rounded-full items-center justify-center h-8 w-8' onClick={()=>favHandler(product.id)} >
              <img src={FavoriteImage} className='h-6 w-6'/>
            </div>
            <p className='font-bold text-xl ml-2 mt-2'>₹ {product.Price}</p>
            <p className='font-bold text-lg ml-2 mt-2'>{product.Model}</p>
            <p className='font-light text-lg ml-2 mt-2'>{product.ProductName}</p>
            <p className='font-bold text-xs ml-2 mt-2'>{product.PostingDate}</p>
            <p className='font-light text-xs ml-2 mt-2'>{product.LocationName}</p>

          </div>
          )
        })}

      </div>      
    </div>
  )
}
