import { ReactElement, useEffect, useState } from 'react'

import { DocumentData, getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import app from '../firebaseHelper/firebaseHelper';

import TopBar from '../components/TopBar'
import CategoryBox from '../components/CategoryBox';
import Recommendations from '../components/Recommendations';


export default function Home(): ReactElement {
    const [dialog,setDialog]=useState<boolean>(false);
    // the data has differing fields so
    const [products,setProducts]=useState<Array<DocumentData>>([])
    const [loading,setLoading]=useState(true)
    //generating 50 array elements so that we can map over it
    const numbers = Array.from({ length: 50 }, (_, i) => i + 1);

    useEffect(()=>{
        async function getData(){
            const db=getFirestore(app)
            const querySnapshot = await getDocs(collection(db, "Products"));
            const products:Array<DocumentData>=[]
            querySnapshot.forEach((doc) => {
                const data=doc.data()
                data.id=doc.id
                console.log(data.Location)
                products.push(data)
            });
            setProducts(products)
            setLoading(false)
        }
        getData()
    },[])

    return (
        <>
            <TopBar setDialog={setDialog} />
            {dialog && <CategoryBox/> }
            <Recommendations products={products} />
            {/* Home page loading animation */}
            {loading && 
                <div className='flex flex-wrap items-start justify-start  w-full h-full '>
                    {
                        numbers.map(()=>{
                            return(
                                <div className='flex ml-20 mt-10 items-start justify-start flex-col'>
                                    <div className='skeleton-loader h-40 w-52'></div>
                                    <div className='skeleton-loader mt-5 h-10 w-52'></div>
                                </div>
        
                            )
                        })
                    }
                </div>
            }

        </>
    )
}
