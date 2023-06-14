function handleClick() {
  console.log("Clicked");
}

export default function () {
  return (
    <div>
      <p>Click the button</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
