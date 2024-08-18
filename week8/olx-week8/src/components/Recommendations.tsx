import { DocumentData } from 'firebase/firestore'
import { ReactElement } from 'react'

export default function Recommendations({
  products,
}: {
  products: Array<DocumentData>
}): ReactElement {
  return (
    <div className="flex ml-20 items-start justify-center flex-col">
      <h1 className="font-normal mt-5 text-lg">Fresh recommendations</h1>
      {!products && <h1>hey</h1>}
      {products.map((product: DocumentData) => {
        console.log(product.ProductName)
        return <div key={product.id}>{product.ProductName}</div>
      })}
    </div>
  )
}
