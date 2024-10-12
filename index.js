const Notification = props => {
  const {content, color, link} = props
  return (
    <div class={`${color} notification`}>
      <img className='icon' src={link} />
      <p className='para'>{content}</p>
    </div>
  )
}

const element = (
  <div class='main-container'>
    <h1 class='heading'>Notifications</h1>
    <div>
      <Notification
        content='Information Message'
        color='blue'
        link='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      />
      <Notification
        content='Success Message'
        color='green'
        link='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      />
      <Notification
        content='Warning Message'
        color='yellow'
        link='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      />
      <Notification
        content='Error Message'
        color='red'
        link='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
