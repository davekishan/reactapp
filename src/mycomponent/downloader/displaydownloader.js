import React from 'react'

export const Displaydownloader = ({ datas }) => {
  console.log("This is diplay function")
  console.log(datas)
  const Display = () => {
    const mp4Link = `https://youtubdle.com/watch?v=${datas?.data?.videoDetails?.videoId}&format=.mp4`;
    const mp3Link = `https://youtubdle.com/watch?v=${datas?.data?.videoDetails?.videoId}&format=.mp3`;
    if(datas !== undefined) {
      return (
        <div className="container" >
        <div className="row">
          <div className="card mb-3 my-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={datas?.data?.videoDetails?.thumbnails[4]?.url} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"><b>{datas?.data?.videoDetails.title} </b></h5>
                  <p className="card-text">{datas?.data?.videoDetails?.ownerChannelName}</p>
                 
                  <a href={mp4Link} className='button-40 mx-5 my-3'>MP4</a>
                  <a href={mp3Link} className='button-40 my-6 mx-5'>MP3</a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
  return (
    <>
      <Display />
    </>
  )
}
