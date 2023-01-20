import React from "react";

function ErrorHandling({ age, cm, foot, inch, lbs, kg, gender }) {
  return (
    <p className="flex justify-center font-bold text-red-600">
      {age
        ? "❌ We need the age... For info... ❌"
        : cm
        ? "❌ It's okay... We won't judge! ❌"
        : foot
        ? "❌ It's okay... It's not feet pics! ❌"
        : inch
        ? "❌ Size... Does matter...❌ "
        : lbs
        ? "❌ It's fine... It's bulking season right? ❌"
        : kg
        ? "❌ It's fine... It's bulking season right? ❌"
        : gender
        ? "❌ I know it's 2023... But pls bare with us ❌"
        : "❌ Error!! Error!! Something is amiss ❌"}
    </p>
  );
}

export default ErrorHandling;
