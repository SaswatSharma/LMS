// components/SignIn.js
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (event: any) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("User signed in!");
    } catch (error) {
      console.error("Error signing in:", error);
      // @ts-ignore
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
