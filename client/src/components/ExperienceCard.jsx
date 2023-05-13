export function ExperienceCard({ data }) {
  return (
    <div className="exp-card">
      <h2>{data.title}</h2>
      <div className="exp-content">
        <div className="exp-pictures">
          <img src={data.img} alt="" />
          <div className="exp-icons">
            {data.icons.map(icon => (
              icon
            ))}
          </div>
        </div>
        <p className="exp-description">{data.description}</p>
      </div>
    </div>
  )
}