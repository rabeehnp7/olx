import React, { Fragment } from 'react';
import { useState } from 'react';
import './Create.css';
import Header from '../Header/Header';

const Create = () => {
  const [productName,setProductName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [immage,setImage]=useState('')
  const handleFileChange = (e) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">product Name</label>
            <br />
            <input
            value={{productName}}
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              onChange={(e)=>{
                setProductName(e.target.value)
              }}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
            value={{category}}
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              onChange={(e)=>{
                setCategory(e.target.value);
              }}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input value={{price}} className="input" type="number" id="fname" name="Price"
            onChange={(e)=>{
              setPrice=(e.target.value)
            }} />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src=""></img>
          <form>
            <br />
            <input type="file" onChange={handleFileChange} />
            <br />
            <button onClick={()=>{

            }} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
