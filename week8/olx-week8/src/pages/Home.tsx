import { ReactElement, useState } from 'react'
import TopBar from '../components/TopBar'
import CategoryBox from '../components/CategoryBox';
import Recommendations from '../components/Recommendations';
export default function Home(): ReactElement {
    const [dialog,setDialog]=useState<boolean>(false);
    

    return (
        <>
            <TopBar setDialog={setDialog} />
            {dialog && <CategoryBox/> }
            <Recommendations/>
        </>
    )
}
