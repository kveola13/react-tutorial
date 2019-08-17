import React from 'react';


const Ninjas = ({ ninjas }) => {
    // console.log(props);
    // const ninjalist = ninjas.map(ninja => {
    //     if (ninja.age > 20) {
    //         return (
    //             <div classname="ninja" key={ninja.id}>
    //                 <div>name: {ninja.name}</div>
    //                 <div>age: {ninja.age}</div>
    //                 <div>belt: {ninja.belt}</div>
    //             </div>
    //         )
    //     } else {
    //         return null
    //     }
    // })
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            <div classname="ninja" key={ninja.id}>
                <div>name: {ninja.name}</div>
                <div>age: {ninja.age}</div>
                <div>belt: {ninja.belt}</div>
            </div>
        ) : null
    })
    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}
export default Ninjas;