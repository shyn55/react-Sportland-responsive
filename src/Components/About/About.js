import './About.css'
import imageAbout from '../img/photo_2025-10-17_12-26-50.png'

function About(){
    return(
         <section id="about">
      <div class="about">
        <h2 class="title">About Me</h2>
        <img class="about-img" src={imageAbout} alt="" />
        <p class="info">
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget
          tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
          
        </p>
      </div>
    </section>
    )
}
export default About