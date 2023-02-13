import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="appItem">
      <img src={imageUrl} alt={appName} className="appImg" />
      <p className="appP">{appName}</p>
    </li>
  )
}

export default AppItem
