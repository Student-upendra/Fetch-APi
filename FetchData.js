import React, { useEffect, useState } from 'react';

function FetchData() {
  const [up, setData] = useState([]);

  const getdata = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      {up.length > 0 ? (
        up.map((e) => {
          return (
            <div className='card' key={e.id}>
              <h3 className='cards'>{e.name}</h3>
              <h5 className='email'>{e.email}</h5>
              <p className='body'>{e.body}</p>
            </div>
          );
        })
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}

export default FetchData;
