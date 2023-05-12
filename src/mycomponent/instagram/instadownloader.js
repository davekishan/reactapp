import React, { useState } from 'react'
import axios from 'axios';
const encodedParams = new URLSearchParams();

export const Instadownloader = () => {

    const [url, setUrl] = useState("");
    var [datas, setDatas] = useState();
    var extention;
    
    const submit = async (e) => {
        e.preventDefault()
        if (url) {

            // const options = {
            //     method: 'GET',
            //     url: 'https://instagram-downloader-story-reel-video-photo-igtv.p.rapidapi.com/v1/rapid/download',
            //     params: {
            //       url: 'https://www.instagram.com/reel/Cr7t_3YgLNp/?igshid=NTc4MTIwNjQ2YQ=='
            //     },
            //     headers: {
            //       'X-RapidAPI-Key': 'bcad173b11msh2fa343dbc395ce4p147a5ajsn9400ab7db529',
            //       'X-RapidAPI-Host': 'instagram-downloader-story-reel-video-photo-igtv.p.rapidapi.com'
            //     }
            //   };
            const options = {
                method: 'GET',
                url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
                params: {
                    url: url
                },
                headers: {
                    'X-RapidAPI-Key': 'bcad173b11msh2fa343dbc395ce4p147a5ajsn9400ab7db529',
                    'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setDatas(response.data)
                extention=response?.data?.video+".mp4";
            } catch (error) {
                console.error(error);
            }

        } else {
            alert("Please Enter Recipe")
        }
    }
    const changeurl = (e) => {
        setUrl(e.target.value);
    }

    return (
        <div className='container'>
            <h3>Search Video</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label className="form-label">Enter URL</label>
                    <input type="text" className="form-control" id="todotitle" value={url} onChange={changeurl} />
                </div>
                <button type="submit" className="btn btn-sm btn-dark my-4">Search</button>
            </form>
            <video src={datas?.video} controls autoPlay download>
                <source src={datas?.video} />
            </video>
            <a href={datas?.video}  target='_blank' download>download</a>


        </div>
    )
}
