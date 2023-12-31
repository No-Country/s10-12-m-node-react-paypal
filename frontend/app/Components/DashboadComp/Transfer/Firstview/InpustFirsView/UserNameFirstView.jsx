import React, { useState, useEffect } from 'react';

function UserNameFirstView({ formData, onUsernameChange }) {
  const [username, setUsername] = useState(formData.nickName);



  const handleUsernameChange = (event) => {
  

    const newUsername = event.target.value    ;
    setUsername(newUsername);

    // Log the value to the console
    onUsernameChange(newUsername);
  };

  return (
    <div className='flex flex-col pt-2 w-full'>
      <label className='first-letter:uppercase font-medium text-xl text-Azul/800' htmlFor="username">Nombre de usuario</label>
      <div className='flex items-center lg:mt-0 md:mt-2 mt-4'>
        <input
          type="text"
          placeholder='@username'
          name='nickname'
          value={username}
          onChange={handleUsernameChange}
          required
          className={`bg-gray-50 border border-Grises/500 text-gray-900 text-sm rounded-lg lg:p-2.5 p-4 w-full`}
        />
      
      </div>
    </div>
  );
}

export default UserNameFirstView;
