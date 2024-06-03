import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';





const Tag = () => {

  const [tag,settag] = useState('car');

  const {gif,loading,fetchData} = useGif(tag);

  function clickHandler(){
    fetchData(tag);
  }

  function changeHandler(event){
    settag(event.target.value);
  }

  return (

    <div className='w-1/2   bg-blue-400 flex flex-col rounded-lg border border-black items-center
    gap-y-5 mt-5'>
      <h1 className='mt-5 text-3xl underline uppercase font-bold'>Random Gif</h1>
      {
        loading ? (<Spinner></Spinner>) : (<img src={gif} width="450" alt="" />)
      }

        <input type="text" className='w-10/12  bg-cyan-300  text-lg py-2 rounded-lg  font-bold  text-center'
        onChange={changeHandler} 
        value={tag}/>
      
      <button onClick={clickHandler} className='w-10/12  mb-5 bg-cyan-300  text-lg py-2 rounded-lg  font-bold'>
        Generate
      </button>
    </div>
  )
}

export default Tag
