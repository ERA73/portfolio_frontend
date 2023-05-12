import '../styles/about.css'

export function AboutPage() {
  return (
    <div className='about-container'>
      <div className="about-wrapper">
        <div className="about-picture">
          <img src='src/img/me.jpg'></img>
        </div>
        <div className="about-content">
          <p className="about-title">
          Backend Developer
          </p>
          <p className="about-profession">
          I have dedicated five years to supporting my clients in obtaining the best software solutions for their needs and improving their results. I prefer to focus my work on building software that is simple, intuitive, and effective.
          </p>
          <p className="about-hobby">
          I like to spend my time with my family, talking about our day, interesting topics, or going out together. I also enjoy making handicrafts with electronic parts with the objective of creating something useful to challenge my abilities. And of course, I enjoy a good video game session. I prefer games with stories about the future, adventure, and shooting.
          </p>
        </div>
      </div>
    </div>
  )
}