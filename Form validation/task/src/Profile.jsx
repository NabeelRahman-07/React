import React from 'react'
import { useLocation } from 'react-router-dom';

function Profile() {
  const location=useLocation();
  const inp=location.state?.data;
  return (
    <div>
        <h2>This is profile section</h2>

        <h3>your mail is:{inp}</h3>
    </div>
  )
}

export default Profile;