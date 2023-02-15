import { useStore } from "@nanostores/react";
import { user } from "./StepProvider";

function PersonalInfo() {
  const $user = useStore(user);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    user.setKey(e.target.name, e.target.value);
  }

  return (
    <form>
      <label>
        <div>
          <span>Name</span>
          {$user.name === "" && (
            <span className="error">This field is required</span>
          )}
        </div>
        <input
          name="name"
          type="text"
          value={$user.name ?? ""}
          onChange={handleChange}
          placeholder="e.g. Stephen King"
          required
          className={$user.name === "" ? "error" : ""}
        />
      </label>

      <label>
        <div>
          <span>Email Address</span>
          {$user.email === "" && (
            <span className="error">This field is required</span>
          )}
        </div>
        <input
          name="email"
          type="text"
          value={$user.email ?? ""}
          onChange={handleChange}
          placeholder="e.g. stephenking@lorem.com"
          required
          className={$user.email === "" ? "error" : ""}
        />
      </label>

      <label>
        <div>
          <span>Phone Number</span>
          {$user.phone === "" && (
            <span className="error">This field is required</span>
          )}
        </div>
        <input
          name="phone"
          type="text"
          value={$user.phone ?? ""}
          onChange={handleChange}
          placeholder="e.g. +1 234 567 890"
          required
          className={$user.phone === "" ? "error" : ""}
        />
      </label>
    </form>
  );
}

export default PersonalInfo;
