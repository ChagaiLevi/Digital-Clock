type SettingsButtonProps = {
  onClick: () => void;
};

const SettingsButton = ({ onClick }: SettingsButtonProps) => {
  return (
    <button id="gear" type="button" aria-label="Open settings" onClick={onClick}>{"\u2699\uFE0F"}</button>
  )
}

export default SettingsButton
