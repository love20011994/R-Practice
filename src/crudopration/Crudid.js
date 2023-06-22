import React, { useState } from 'react'

function Crudid() {
    const array=[1,2,3,4,5,6,7]

    const[item,setItem]=useState(array)
    const[search,setSearch]=useState("")
    const[add,setAdd]=useState([])

    // const deleteid=(id)=>{
    //     const updateItem=array.filter((p,ind)=>{
    //         return id!==ind
    //     })

    //     setItem(updateItem)
    //     console.log("delete",id)
    // }

    const addItem=()=>{
           setAdd([...add,search])
           setSearch("")
    }

    const delete1=(id)=>{
     const newadd = add.filter((p,indx)=>{
            return id!== indx
        })
        setAdd(newadd)
    }

    const editItem=(id)=>{
        const editItems=add.find((p,index)=>{
              return id===index
        })

    }

  return (
    <div>
        <input onChange={(e)=>setSearch(e.target.value)}/>
        <button onClick={addItem}>ADD</button>
        {/* {item.map((p,id)=>{
            return(
                <button onClick={()=>deleteid()}>delete{p}</button>
            )
        })} */}
               {add.map((p,id)=>{
                return(
                    <ul>
                    <li> <p key={id}>
                        {p}
                    <button onClick={()=>{delete1(id)}}>delete</button>
                    <button onClick={editItem(id)}>Edit</button>
                    </p></li>
                </ul>
                )
               })}
    </div>
  )
}

export default Crudid
