import React,{ useState } from 'react'

function PostData() {
    const [data,setData] = useState("");

    function saveData(){
        console.warn(data);
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            body: JSON.stringify(data)
        }).then((result) => {
            // console.log(result);
            result.json().then((res) => {
                console.log(res);
            })
        })
    }

    return (
        <div className=" mb-4">
          <input type="text" value={data} onChange={(e)=> {setData(e.target.value)}} className=" form-control" placeholder="Add Some data"/> 
          <button type="button" onClick={saveData} className="btn btn-secondary">Save Data</button> 
        </div>
    )
}

export default PostData
