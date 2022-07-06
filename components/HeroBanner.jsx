import Image from 'next/image.js'
import Link from "next/link.js"
import React from 'react'
import { getImageUrl, urlFor } from "../lib/sanity.js"

const HeroBanner = ({data}) => {
  if(!data){
    return <></>
  }
  console.log(data);
  return (
    <div>
      <div className="flex">
        <p>{data.smallText}</p>
        <h3>{data.midText}</h3>
        <div className="w-32 h-32 relative">
          <Image className="w-full h-6 object-cover" src={getImageUrl(data.image)} alt="hero-banner" layout="fill" />
        </div>
        <div>
          <Link href="/product/ID">
            <button type="button">{data.buttonText}</button>
          </Link>
          <div>
            <h5>description</h5>
            <p>{data.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner