import { useState } from "react";
export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => {
    return setIsHappy(!isHappy);
  };
  return (
    <div>
      <p onClick={toggleIsHappy} style={{ fontSize: "200px" }}>
        {isHappy === true ? "😃" : "🙃"}
      </p>
    </div>
  );
}
