/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import axios from "axios";

const New = () => {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>start editing...</h1>
      <table>
        <th>
          <td>Name</td>
        </th>
        <th>
          <td>UserName</td>
        </th>
        <th>
          <td>Email</td>
        </th>
        <th>
          <td>Geo Latitude</td>
        </th>
        <th>
          <td>Geo Longitude</td>
        </th>
        {posts.map((post) => (
          <tbody>
            <tr>
              <td>{post.name}</td>
              <td>{post.username}</td>
              <td>{post.email}</td>
              <td>{post.address["geo"].lat}</td>
              <td>{post.address["geo"].lng}</td>
            </tr>
          </tbody>
        ))}
      </table>
      {/* <div key={post.id}>
       {post.name} {post.username} {post.email}
        </div> */}
    </div>
  );
};

export default New;
