import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
    <div style={{ color: `purple`, fontSize: `72px` }}>
        <Link to="/contact/">Contact</Link> 
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src='https://cdn.pixabay.com/photo/2014/12/15/17/16/pier-569314_960_720.jpg' alt='tropical paradise' />
    </div>
  )
