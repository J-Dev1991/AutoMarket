import React from 'react'
import CarsFilter from './CarsFilter';
import CarsList from './CarsList';
// import {CarConsumer} from '../Context';
import {withCarConsumer} from '../Context';
import Loading from './Loading';


//Option TWO
 //CarsContainer implementing higher other component
 function CarsContainer({context}){
    const {loading,allCars,sortedCars} = context;
   

    if(loading){
        return <Loading />
    }  

    return (
        <>
            <CarsFilter cars={allCars}/>
            <CarsList cars={sortedCars}/>
    </>                      
    );
}

export default withCarConsumer(CarsContainer)


//OPTION ONE
// export default function CarsContainer() {
//     return (
//         <CarConsumer>
//             {
//                 (value) => {
//                     // console.log(value)
//                     const {loading,allCars,sortedCars} = value;

//      if(loading){
//          return <Loading />
//      }         
//                 return (
//                      <div>
//                         hello cars container
//                         <CarsFilter cars={allCars}/>
//                         <CarsList cars={sortedCars}/>
//                     </div>
//                     )
//                 }
//             }
       
//         </CarConsumer>

        
        
//     );
// }
