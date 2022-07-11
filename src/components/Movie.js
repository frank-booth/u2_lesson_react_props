const Movie = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>
        Runtime: {props.hours}:{props.minutes}
      </p>
      <img src={props.poster}></img>
    </div>
  )
}

export default Movie
