import React from 'react';


const Ninjas = ({ ninjas, deleteNinja }) => {
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
        return ninja.age > 15 ? (
            <div className="ninja" key={ninja.id}>
                <div>name: {ninja.name}</div>
                <div>age: {ninja.age}</div>
                <div>belt: {ninja.belt}</div>
                <button onClick={() => { deleteNinja(ninja.id) }}>Delete ninja</button>
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