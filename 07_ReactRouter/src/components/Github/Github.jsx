// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from 'react';

function Github() {
  // const data = useLoaderData()
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  });

  return (
    <div className='bg-gray-600 text-white text-center '>
      <h1>GitHub Followers : {data.followers}</h1>
      <img
        className='rounded-full'
        src={data.avatar_url}
        alt='Git Profile'
        width={300}
      />
    </div>
  );
}

export default Github;

// export const githubInfoLoader = async () => {
//   const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//   return response.json();
// };
