import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <div className="container">
        <Link to="/">
          Cedcommerece
        </Link>
      </div>
    </>
  );
}