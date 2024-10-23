"use client";

import "@/app/globals.css";

function Error({ error }) {
  return (
    <div className="error">
      <h1>An error occurred!</h1>
      <p>Failed to create meal.</p>
    </div>
  );
}
export default Error;
