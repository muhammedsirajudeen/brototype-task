import { ReactElement } from 'react'

const categories = [
  {
    title: 'Cars',
    items: [
      'Cruise cars',
      'Sport cars',
      'SUVs',
      'Luxury cars',
      'Electric cars',
    ],
  },
  {
    title: 'Bikes',
    items: [
      'Mountain bikes',
      'Road bikes',
      'Electric bikes',
      'Hybrid bikes',
      'Cruiser bikes',
    ],
  },
  {
    title: 'Trucks',
    items: [
      'Pickup trucks',
      'Box trucks',
      'Semi-trucks',
      'Dump trucks',
      'Tow trucks',
    ],
  },
  {
    title: 'Motorcycles',
    items: [
      'Cruiser motorcycles',
      'Sport motorcycles',
      'Touring motorcycles',
      'Standard motorcycles',
      'Dirt bikes',
    ],
  },
  {
    title: 'SUVs',
    items: [
      'Compact SUVs',
      'Midsize SUVs',
      'Full-size SUVs',
      'Luxury SUVs',
      'Electric SUVs',
    ],
  },
  {
    title: 'Vans',
    items: [
      'Minivans',
      'Cargo vans',
      'Passenger vans',
      'Camper vans',
      'Luxury vans',
    ],
  },
  {
    title: 'Wagons',
    items: [
      'Station wagons',
      'Luxury wagons',
      'Sport wagons',
      'Electric wagons',
      'Hybrid wagons',
    ],
  },
  {
    title: 'Convertibles',
    items: [
      'Sports convertibles',
      'Luxury convertibles',
      'Electric convertibles',
      'Compact convertibles',
      'Grand tourer convertibles',
    ],
  },
  {
    title: 'Coupes',
    items: [
      'Sports coupes',
      'Luxury coupes',
      'Compact coupes',
      'Grand tourer coupes',
      'Electric coupes',
    ],
  },
  {
    title: 'Sedans',
    items: [
      'Compact sedans',
      'Midsize sedans',
      'Full-size sedans',
      'Luxury sedans',
      'Electric sedans',
    ],
  },
]

export default function CategoryBox(): ReactElement {
  return (
    <div className="w-full h-screen grid grid-cols-4 absolute bg-white items-start justify-center">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <div className="m-5 flex flex-col items-start justify-center">
            <h1 className="m-1 text-borderedgecolor font-bold text-xs">
              {category.title}
            </h1>
            {category.items.map((item, idx) => (
              <a key={idx} href="#" className="m-1 text-xs">
                {item}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
