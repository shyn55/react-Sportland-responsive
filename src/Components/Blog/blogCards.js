function BlogCard(props){
    return(
         <div class="col-4 row">
            <div class="blog-box">
              <div class="blog-img">
                <img src={props.image} class="img-fluid" alt="shayan"/>
              </div>
              <div class="blog-content">
                <h3 class="blog-title">{props.title}</h3>
                <p class="blog-desc">
                  Proin eget tortor risus. Pellentesque in ipsum id orci porta
                  dapibus. Praesent sapien massa, convallis a pellentesque nec,
                  egestas non nisi.
                </p>
              </div>
              <div class="blog-footer">
                <div class="post-author">
                  <p class="author">{props.Author}</p>
                </div>
                <div class="post-date">
                  <span class="bi bi-clock"></span> {props.time}
                </div>
              </div>
            </div>
          </div>
    )
}
export default BlogCard