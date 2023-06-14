export default function ({ message, buttonText }) {
  function handleClick() {
    alert(message);
  }
  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}
