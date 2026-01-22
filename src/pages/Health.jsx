import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Health = () => {
  const [res, setRes] = useState("nothing");
  const backend_url = import.meta.env.VITE_BACKEND_URL
  console.log("backend_url: ", backend_url)

  const callHealthApi = async () => {
    try {
      const result = await fetch(`${backend_url}/health`)
      const data = await result.json();
      console.log(data);
      setRes(data?.message)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    callHealthApi();
  }, [])


  return (
    <div className="container-fluid py-3 py-md-4 py-lg-5 px-3 px-md-4">
      <div className="container">
        <div className="alert alert-info">{res}</div>
      </div>
    </div>
  )
}

export default Health