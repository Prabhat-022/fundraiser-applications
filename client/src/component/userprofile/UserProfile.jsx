import React from 'react'

const UserProfile = () => {
  return (
    <div className="bg-orange-400 h-screen flex flex-col items-center justify-center">
      <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center">User Profile</h1>
        <div className="flex flex-col gap-4 mt-4">
          <p className="text-lg">Name: John Doe</p>
          <p className="text-lg">Email: johndoe@example.com</p>
          <p className="text-lg">Phone Number: 123-456-7890</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
