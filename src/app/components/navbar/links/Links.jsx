import Link from 'next/link'
import React from 'react'

const Links = () => {
    
     const links = [
    {
        title: "Home",
        path: "/",

    },
    {
        title: "About",
        path: "/about",
    }

];


  return (
    <div>
        {Links.map((link=> (
            <Link key={link.path}>
                <a href={link.path}>{link.title}</a>
            </Link>
        )))}

    </div>
  )
}

export default Links