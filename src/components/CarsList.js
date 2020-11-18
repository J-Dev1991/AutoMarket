import React from 'react'
import Car from './Car';

export default function CarList({cars}) {
   
if(cars.length=== 0){
    return (
        <div className="empty-search">
            <h3>no cars matched your search requests</h3>
        </div>
    )
}

return (
<section className="carlist">
    <div className="carslist-center">
        {
            cars.map(item => {
                return <Car key={item.id} car={item} />
            })
        }
    </div>
</section>
);
}
