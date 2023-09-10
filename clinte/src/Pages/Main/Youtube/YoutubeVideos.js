import React, { useState, useEffect } from 'react'
import "./youtube.css"

const api_key= process.env.REACT_APP_API_KEY

function YoutubeVideos() {
    const [videos, setVideos] = useState([]);
	useEffect(() => {
		fetch(
			"https://www.googleapis.com/youtube/v3/search?key=AIzaSyBbAAQbEYaJUZmW9OvMizxyIBJ1VHE86bw&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
		)
			.then((response) => response.json())
			.then((data) => {
				const YoutubevideosData = data.items;
				setVideos(YoutubevideosData);
			});
	}, []);

    console.log(videos)

    return (
        <div>
			<div className="allvideoWrapper">
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-12">
							<div className="title-wraper bold black">
								latest videos <br />
                                <br />
							</div>
						</div>
						{videos.map((singleVideo, i) => {
							let vidId = singleVideo.id.videoId;
							let vidlink = `https://www.youtube.com/watch?v=${vidId}`;
							let videoWrapper = (
								<div key={i} className="col-sm-12 col-md-6 col-lg-6">
									<div className="singleVideoWrapper">
										<div className="videoTubnail">
											<a href={vidlink} target="_blank">
												<img src={singleVideo.snippet.thumbnails.high.url}></img>
											</a>
										</div>
									</div>
                                    <div className='videoInfoWrapper'>
                                        <div className='videoTitle'>
                                            <a href={vidlink} target="_blank">
												{singleVideo.snippet.title}
											</a>
                                        </div>
                                    </div>
                                    <div className='videoDesc'>
                                        {singleVideo.snippet.description}
                                    </div>
								</div>
							);
							return videoWrapper;
						})}
					</div>
				</div>
			</div>
		</div>
  )
}

export default YoutubeVideos
