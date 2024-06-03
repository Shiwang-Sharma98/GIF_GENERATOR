import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';



const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Random = () => {

  const {gif,loading,fetchData} = useGif();

  function clickHandler(){
    fetchData();
  }

  return (

    <div className='w-1/2  bg-cyan-500 flex flex-col rounded-lg border border-black items-center
    gap-y-5 mt-5'>
      <h1 className='mt-5 text-3xl underline uppercase font-bold'>A Random Gif</h1>
      {
        loading ? (<Spinner></Spinner>) : (<img src={gif} width="450" alt="" />)
      }
      
      <button onClick={clickHandler} className='w-10/12  mb-5 bg-cyan-300  text-lg py-2 rounded-lg  font-bold'>
        Generate
      </button>
    </div>
  )
}

export default Random
