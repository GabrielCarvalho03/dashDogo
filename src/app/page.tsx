"use client";

import { auth } from "@/services/firebase-client";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      if (
        user &&
        (user.email === "gabrielcarvalho1734@gmail.com" ||
          user.email === "gilmarsouzajunio2@gmail.com")
      ) {
        router.push("/dashboard");
      }
    });
    return () => unsubscribe();
  }, []);

  const router = useRouter();

  async function loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      if (
        result.user &&
        (result.user.email == "gabrielcarvalho1734@gmail.com" ||
          result.user.email == "juanaugusto007@gmail.com")
      ) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <main className="w-full h-screen bg-bg-primary flex items-center justify-center">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => loginWithGoogle()}
      >
        Login com o google
      </button>
    </main>
  );
}
