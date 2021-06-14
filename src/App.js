import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, provider } from "./firebase/firebase";
import "./App.css";
import Login from "./Login";
import Parent from "./Parent";
import Loading from "./Loading";

const App = () => {
  const [user, loading] = useAuthState(auth);
  if (!user) return <Login />;
  if (loading) return <Loading />;
  return <Parent user={user} />;
};

export default App;
