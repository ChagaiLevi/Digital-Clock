const SettingsPage = () => {
  return (
    <div id="sidebar">
      <h2 style={{ textAlign: 'center', margin: '30px 0' }}>Settings</h2>
      <div className="setting">
        <label htmlFor="time-format">Time format</label>
        <select id="time-format">
          <option value="24h" selected>24-H Format</option>
          <option value="12h">12-H Format</option>
        </select>
      </div>
      <div className="setting">
        <label htmlFor="date-format">Date settings</label>
        <select id="date-format">
          <option value="full_name" selected>Shortcut name</option>
          <option value="full_name">Full name</option>
          <option value="dd/mm/yyyy">DD/MM/YYYY</option>
          <option value="mm/dd/yyyy">MM/DD/YYYY</option>
          <option value="dd mm yyyy">DD MM YYYY</option>
          <option value="mm dd yyyy">MM DD YYYY</option>
        </select>
      </div>
      <div className="setting">
        <label htmlFor="day">Day</label>
        <select id="day">
          <option value="shortcut" selected>Shortcut</option>
          <option value="full">Full</option>
        </select>
      </div>
    </div>
  )
}

export default SettingsPage