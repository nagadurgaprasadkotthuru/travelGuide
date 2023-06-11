import './index.css'

const Package = props => {
  const {packageDetails} = props
  const {name, imageUrl, description} = packageDetails
  return (
    <li className="list-element">
      <img className="image" alt={name} src={imageUrl} />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default Package
