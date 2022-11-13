import React from 'react';
import "./blog.css";
import Article from "../../components/article/Article"
import { blog01, blog02, blog03, blog04, blog05} from "./imports"

function Blog() {
  return (
    <div classnName="vador__blog section__padding" id="blog">
      <div className="vador__blog-heading">
        <h1 className="gradient__text">
          "Peace is a lie. There is only Passion. Through Passion, I gain Strength. Through Strength, I gain Power."
        </h1>
      </div>
      <div className="vador__blog-container">
        <div className="vador__blog-container_g1">
          <Article imgUrl={blog01} date="01/01/2023" title="The Sith Empire will burn brightly, like a supernova, dwarfing the complacent Republic." />
        </div>
        <div className="vador__blog-container_g2">
        <Article imgUrl={blog02} date="01/01/2023" title="The Sith Empire will burn brightly, like a supernova, dwarfing the complacent Republic." />
        <Article imgUrl={blog03} date="01/01/2023" title="The Sith Empire will burn brightly, like a supernova, dwarfing the complacent Republic." />
        <Article imgUrl={blog04} date="01/01/2023" title="The Sith Empire will burn brightly, like a supernova, dwarfing the complacent Republic." />
        <Article imgUrl={blog05} date="01/01/2023" title="The Sith Empire will burn brightly, like a supernova, dwarfing the complacent Republic." />
        </div>
      </div>
    </div>
  )
}

export default Blog
