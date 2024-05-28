import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import { albumsData, songsData } from '../assets/assets'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
    <Navbar/>
    <div className='mb-5'>
      <h1 className='my-5 font-bold text-2xl text-white'>Featured Charts</h1>
      <div className='flex overflow-auto text-white'>
      {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
      </div>
      
    </div> 
    <div className='mb-5'>
      <h1 className='my-5 font-bold text-2xl text-white'>Today's biggest hits</h1>
      <div className='flex overflow-auto text-white'>
      {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
      </div>
      
    </div> 
    </>
  )
}

export default DisplayHome
  