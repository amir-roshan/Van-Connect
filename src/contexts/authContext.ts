import { createContext, useContext } from "react";
import { User } from "firebase/auth";

// Define the shape of the context value
interface AuthContextType {
  user: User | null;
}

// Create the AuthContext with a default value of undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export default AuthContext;
