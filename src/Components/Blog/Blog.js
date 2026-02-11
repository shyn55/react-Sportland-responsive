import "./Blog.css";
import BlogCard from "./blogCards";
import img1 from "../img/post-1.jpg";
import img2 from "../img/post-2.jpg";
import img3 from "../img/post-3.jpg";

function Blog() {
  let BlogItem = [
    {
      image: img1,
      title: "post title 1",
      time: "10 min",
      Author: "Shayan mir",
    },
    {
      image: img2,
      title: "post title 2",
      time: "15 min",
      Author: "Hassan abs",
    },
    {
      image: img3,
      title: "post title 3",
      time: "20 min",
      Author: "Mahdi shi",
    },
  ];

  return (
    <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
          {BlogItem.map((card, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <BlogCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Blog;
