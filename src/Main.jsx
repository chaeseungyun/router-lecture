import { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

export default function Main() {
  
  
  const [number, setNumber] = useState(0);
  const navigate = useNavigate();

  

  return (
    <div>
      {number}
      <button
        type="button"
        onClick={() => {
          setNumber((prev) => prev + 1);
          navigate(`/${number}`);
        }}
      >
        CLICK
      </button>

      <Outlet />
    </div>
  );
}
