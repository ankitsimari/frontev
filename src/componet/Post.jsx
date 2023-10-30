import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Post = () => {

    const [data, setData] = useState([])

    const handleDelete = (id) => {
        axios.delete(`https://pleasant-garment-jay.cyclic.app/posts/delete/${id}`).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        const authToken = `Bearer ${token}`;

        const config = {
            headers: {
                Authorization: authToken
            }
        }

        axios.get("https://pleasant-garment-jay.cyclic.app/posts/", config).then((res) => {
            console.log(res.data);
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

  return (
    <div>
        {
            data.length > 0 && data.map((ele) => (
                <div className='cards' key={ele._id}>
                    <h3>Title: {ele.title}</h3>
                    <p>Body: {ele.body}</p>
                    <h5>Device: {ele.device}</h5>
                    <h5>Comments: {ele.no_of_comments}</h5>
                    <Link to={`/update/${ele._id}`}>Update</Link>
                    <button onClick={() => handleDelete(ele._id)} >Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default Post