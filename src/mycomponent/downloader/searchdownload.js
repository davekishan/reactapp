
import React, { useState } from 'react'
import { Displaydownloader } from './displaydownloader';


export const Searchdownload = () => {

    const [url, setUrl] = useState("");
    var [datas, setDatas] = useState();

    const submit = async (e) => {
        e.preventDefault()
        if (url) {
            await fetch(`https://youtubdle.com/metainfo?url=${url}`)
                .then(res => res.json()).then(data => {
                  
                    console.log(data);
                    setDatas(data);
                   
                })

        } else {
            alert("Please Enter Recipe")
        }
    }

    const changeurl = (e) => {
        setUrl(e.target.value);
    }
    return (
        <>
            <div className='container'>
                <h3>Search Video</h3>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label className="form-label">Enter URL</label>
                        <input type="text" className="form-control" id="todotitle" value={url} onChange={changeurl} />
                    </div>
                    <button type="submit" className="btn btn-sm btn-dark my-4">Search</button>
                </form>
                
                <Displaydownloader datas={datas}/>
            </div>

        </>
    )
}
