import React, { useEffect } from "react";
import MusicData from "../assets/data.json";
import YouTube from "react-youtube";
import placeholder from "../assets/placeholder.png";

function Music() {
    const [currentTime, setCurrentTime] = React.useState('00:00');
    const [currentSeconds, setCurrentSeconds] = React.useState(0);
    const [player, setPlayer] = React.useState<YouTube | any>(null);
    const [intervalId, setIntervalId] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);
    const [videoDuration, setVideoDuration] = React.useState(0);
    const [videoVolume, setVideoVolume] = React.useState(0);
    const [results, setResults] = React.useState(MusicData.items);
    const [loading, setLoading] = React.useState(true);
    const [videoPlaying, setVideoPlaying] = React.useState<any>('');
    const [videoMode, setVideoMode] = React.useState('');
    const [scrollTopBtn, setscrollTopBtn] = React.useState(false);
    const [selectVideo, setSelectVideo] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setscrollTopBtn(window.pageYOffset > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const onPlayerReady = (event: any) => {
        setPlayer(event.target);
        if(videoVolume == 0){
            event.target.setVolume(50);
            setVideoVolume(50);
        }
        setVideoDuration(event.target.getDuration());
    };

    const onPlayerStateChange = (event: any) => {
        if (event.data === YouTube.PlayerState.PLAYING) {
            const interval = setInterval(() => {
                setCurrentTime(secondsToHms(player.getCurrentTime()));
                setCurrentSeconds(Math.floor(player.getCurrentTime()));
            }, 1000);
            setIntervalId(interval);
        } else {
            clearInterval(intervalId);
        }
        videoInit();
    };
    const secondsToHms = (d: any) => {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor((d % 3600) / 60);
        var s = Math.floor((d % 3600) % 60);
        var hDisplay = h > 0 ? h + ":" : "";
        var mDisplay = m >= 0 ? (m < 10 ? "0" + m + ":" : m + ":") : "0:";
        var sDisplay = s >= 0 ? (s < 10 ? "0" + s : +s) : "";
        return hDisplay + mDisplay + sDisplay;
    }
    const handlePause = () => {
        let isBtnPaused = !isPaused;
        isPaused ? player.pauseVideo() : player.playVideo();
        setIsPaused(isBtnPaused);
    }


    useEffect(() => {
        return () => clearInterval(intervalId);
    }, [intervalId]);

    const videoInit = () => {
        setIsPaused(true);
        setCurrentSeconds(0);
        setCurrentTime('00:00');
    }
    const handleButtonClick = (video: any) => {
        setSelectVideo(true);
        setVideoPlaying(video)
        videoInit();
    }
    const nextVideo = () => {
        let arrayVideo = results;
        let filteredResults = arrayVideo.filter(item => item.snippet.position === (videoPlaying.snippet.position + 1));
        setVideoPlaying(filteredResults[0]);
        videoInit();

    }

    const previousVideo = () => {
        let arrayVideo = results;
        let filteredResults = arrayVideo.filter(item => item.snippet.position === (videoPlaying.snippet.position - 1));
        setVideoPlaying(filteredResults[0]);
        videoInit();
    }

    const modeVideo = (mode: any) => {
        if (videoMode != mode)
            setVideoMode(mode);
        else
            setVideoMode("normal");
    }

    const playNextVideo = () => {
        let arrayVideo = results;
        if (videoMode == "shuffle") {
            const randomPosition = Math.floor(Math.random() * 50) + 1;
            let filteredResults = arrayVideo.filter(item => item.snippet.position === randomPosition);
            setVideoPlaying(filteredResults[0]);
        }
        else if (videoMode == "replay") {
            player.seekTo(0);
        }
        else if (videoMode == "normal") {
            let filteredResults = arrayVideo.filter(item => item.snippet.position === (videoPlaying.snippet.position + 1));
            setVideoPlaying(filteredResults[0]);
        }
        videoInit();
    }

    useEffect(() => {
        setTimeout(() => {
            setResults(MusicData.items);
            setLoading(false);
        }, 2000);
    }, [])

    return (
        loading == false ? (
            <>
                {scrollTopBtn && (
                    <div className="bg-[rgba(255,255,255,0.2)] p-2 rounded text-2xl font-bold fixed bottom-4 right-4 cursor-pointer" onClick={() => {
                        window.scrollTo({top: 0})
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill="white" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
                    </div>
                )}
                <div className="bg-black rounded w-full p-4 text-white flex gap-4">
                    <YouTube className="hidden"
                        videoId={videoPlaying ? videoPlaying.snippet.resourceId.videoId : results[0].snippet.resourceId.videoId}
                        opts={{
                            width: "560",
                            height: "315",
                            playerVars: {
                                autoplay: 1,
                            },
                        }}
                        onReady={onPlayerReady}
                        onStateChange={onPlayerStateChange}
                        onEnd={() =>
                            playNextVideo()
                        }
                    />
                    {/* <p>Current Time: {currentTime}</p> */}
                    <div className={`grow bg-[rgba(255,255,255,0.1)] p-2 rounded flex md:flex-row flex-col gap-4 sticky top-0 left-0 ${selectVideo ? 'flex' : 'hidden'}`}>
                        <div className="shrink-0 flex md:justify-start justify-center">
                            <img src={videoPlaying ? videoPlaying.snippet.thumbnails.high.url : placeholder} alt={videoPlaying ? videoPlaying.snippet.title : 'Loading...'} className="h-[200px]" />
                        </div>
                        <div className="md:text-left text-center">
                            <h3 className="font-bold text-2xl text-slate-300">{videoPlaying ? videoPlaying.snippet.title : 'Loading...'}</h3>
                            <p className="text-sm my-2">{videoPlaying ? videoPlaying.snippet.videoOwnerChannelTitle : 'Loading...'}</p>
                            <div className="flex items-center md:justify-start justify-center gap-12 my-4">
                                <div className="text-base cursor-pointer" onClick={() => modeVideo('shuffle')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill={`${videoMode == 'shuffle' ? 'rgb(14 165 233)' : 'white'}`} d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z" /></svg>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="rotate-180 text-3xl hover:bg-[rgba(255,255,255,0.3)] w-10 h-10 flex items-center justify-center rounded cursor-pointer" onClick={() => previousVideo()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path fill="white" d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z" /></svg>
                                    </div>
                                    <div className="w-10 h-10 rounded flex items-center justify-center shrink-0 text-3xl cursor-pointer hover:bg-[rgba(255,255,255,0.3)]" onClick={() => handlePause()} id = "start-btn">
                                        {isPaused ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path fill="white" d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path fill="white" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg>
                                        )}
                                    </div>
                                    <div className="text-3xl hover:bg-[rgba(255,255,255,0.3)] w-10 h-10 flex items-center justify-center rounded cursor-pointer" onClick={() => nextVideo()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path fill="white" d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z" /></svg>
                                    </div>
                                </div>
                                <div className="text-base cursor-pointer" onClick={() => modeVideo('replay')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill={`${videoMode == 'replay' ? 'rgb(14 165 233)' : 'white'}`} d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" /></svg>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="">
                                    <input type="range" className="w-full" name="track" id="" min="0" max={videoDuration} value={currentSeconds || 0} onChange={(x) => { player.seekTo(x.target.value); setIsPaused(true) }} />
                                    <div className="flex w-full grow justify-between">
                                        <p>{currentTime}</p>
                                        <p>{secondsToHms(videoDuration)}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-4">
                                    {
                                        videoVolume < 1 ? (
                                            <>
                                                <div className="flex gap-2 shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
                                                    </svg>
                                                    <p>{videoVolume} %</p>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex gap-2 shrink-0">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                                                        <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                                                    </svg>
                                                    <p>{videoVolume} %</p>
                                                </div>
                                            </>
                                        )
                                    }
                                    <input type="range" className="w-full" name="volume" id="" min="0" max="100" onChange={(v) => { player.setVolume(v.target.value); setVideoVolume(parseInt(v.target.value)) }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                <div className="rounded w-full p-4 text-white">
                    <div className="flex flex-col gap-4">
                        {results.map((item) => (
                            <div key={item.id} className="flex gap-4 items-center bg-[rgba(255,255,255,0.1)] p-2 cursor-pointer rounded shadow-md shadow-sky-500/10 group" onClick={() => handleButtonClick(item)}>
                                <p className="group-hover:hidden block w-8 text-center">{item.snippet.position + 1}</p>
                                <button className="group-hover:flex hidden w-8 text-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <div className="text-base">
                                    <p className="font-bold">{item.snippet.title}</p>
                                    <p className="text-sm">{item.snippet.videoOwnerChannelTitle}</p>
                                    {/* 
                                <a href={"https://youtube.com/watch?v=" + item.snippet.resourceId.videoId} target="_blank" className="text-sm">Open In Youtube</a> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
            :
            (
                <p>Loading... . . . {loading}</p>
            )
    );
}
export default Music;