import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, provider } from "./firebase/firebase";
import "./App.css";
import Login from "./Login";
import Parent from "./Parent";

const App = () => {
  const [user] = useAuthState(auth);
  if (!user) return <Login />;
  return <Parent user={user} />;
};

export default App;
