import React, { useState,useEffect } from "react";
import { useHistory } from 'react-router-dom';
import heroImage1  from "../img/logo2.png";
import "react-jinke-music-player/assets/index.css";
import ReactJkMusicPlayer from 'react-jinke-music-player';
import { connect } from "react-redux";
import './Home.css'
import {getMusicAll} from "../actions/music";

const Home = ({getMusicAll, musicAll:{allmusic,loading},auth: { isAuthenticated, user}}) => {

  const [playIndex, setPlayIndex] = useState();

  useEffect(()=> {
      getMusicAll()
  }, [getMusicAll])

  const playlist = allmusic.map((music) => ({
		name: music.title,
		artis: music.artis.name,
    musicSrc: music.attache,
  }));
  let history = useHistory();
  const handlePush=()=>{
    history.push('/payment')
  }
  return  (
    <div className="Home">
     <img src={heroImage1}></img>
     <h1 className="centered" style={{fontSize:48}}>Connect on DumbSound</h1>
     <h3 className="centered" style={{paddingTop:130,fontSize:23}}>Discovery, Stream, and share a constantly expanding mix of music</h3>
     <h3 className="centered" style={{paddingTop:190,fontSize:23}}>from emarging and major artists around the world</h3>
     <h2>Dengarkan Dan Rasakan</h2>
        <>
        <section className="container-music">
         <div className="grid-music">
           {allmusic === null || loading ? <div>Loading...</div> : allmusic.map((music, index) => (
             <div className="card-music" >
               {user === null ||  user.subscribe ||user.role === 1  ? (
                 <div className="card-music" onClick={()=> setPlayIndex(index)}>
                 <img className="thumbnailmusic"src={music.thumbnail}/>
                 <div style={{display:'flex'}}>
                   <div style={{width:70}}><p className="titlemusic"><div style={{fontWeight:'bold'}}>{music.title}</div>
                     <div className="namaartis" style={{paddingTop:5}}>{music.artis.name}</div></p>
                   </div>
                   <p className="namaartis" style={{paddingTop:5,marginLeft:60,fontSize:12}}>{music.year}</p>
                 </div>
               </div>
               ):
               <div className="card-music" onClick={()=>handlePush()}>
                 <img className="thumbnailmusic"src={music.thumbnail}/>
                 <div style={{display:'flex'}}>
                   <div style={{width:70}}><p className="titlemusic"><div style={{fontWeight:'bold'}}>{music.title}</div>
                     <div className="namaartis" style={{paddingTop:5}}>{music.artis.name}</div></p>
                   </div>
                   <p className="namaartis" style={{paddingTop:5,marginLeft:60,fontSize:12}}>{music.year}</p>
                 </div>
               </div>} 
             </div>
           ))}
          </div>
        </section>
        </>
     {user === null ? null : (isAuthenticated && user.subscribe) ||
			(isAuthenticated && user.role === 1) ? (
      <ReactJkMusicPlayer
          mode="full"
          audioLists={playlist}
          defaultPlayIndex={0}
          autoPlay={false}
          showDownload={false}
          showThemeSwitch={true}
          toggleMode={false}
          responsive={false}
          glassBg={true}
          playIndex={playIndex}
        />
        ) : null}
    </div>
  )
};
const mapStateToProps = (state) => ({
  musicAll: state.music,
  musicone: state.music,
  auth: state.auth
});

export default connect(mapStateToProps, { getMusicAll})(Home);
