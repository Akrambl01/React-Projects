import { useState } from "react";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function CreateUser() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    // 1) We dispatch an action to update the user's name in the Redux store
    if (!username) return;
    dispatch(updateName(username));
    // 2) We navigate to the /menu page
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p4 className="text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p4>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
