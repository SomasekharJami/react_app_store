import './index.css'

const TabItem = props => {
  const {tabDetails, onChangingTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClicking = () => {
    onChangingTab(tabId)
  }

  const activeClass = isActive ? 'activeTab' : ''

  return (
    <li className="tabItem">
      <button
        className={`bton ${activeClass}`}
        type="button"
        onClick={onClicking}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
