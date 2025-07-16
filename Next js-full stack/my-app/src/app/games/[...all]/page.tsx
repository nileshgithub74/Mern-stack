import React from 'react';

// interface ParamsProps {
//   params: {
//     all: string[];
//   };
// }

const Games = async ({params} : {params : { all : string[]}}) => {
    const { all} = await params;

  return (
    <div>
        <h1>games  </h1>

        All routes {all.map(p=>(
            <li key={p}>{p}</li>
        ))}


    </div>
  
  )
}

export default Games