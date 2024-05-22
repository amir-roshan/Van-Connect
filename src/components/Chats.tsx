import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { useAuth } from "../contexts/authContext";
import { auth } from "../firebase";

const Chats: React.FC = () => {
  const apiKey = import.meta.env.VITE_CHAT_ENGINE_KEY as string;
  const projectID = import.meta.env.VITE_CHAT_ENGINE_ID as string;

  const didMountRef = useRef(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await auth.signOut();
    navigate("/");
  }

  async function getFile(url: string): Promise<File> {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "test.jpg", { type: "image/jpeg" });
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      if (!user || user === null) {
        navigate("/");
        return;
      }

      // Get-or-Create should be in a Firebase Function
      axios
        .get("https://api.chatengine.io/users/me/", {
          headers: {
            "project-id": projectID,
            "user-name": user.email,
            "user-secret": user.uid,
          },
        })
        .then(() => setLoading(false))
        .catch(() => {
          const formdata = new FormData();
          formdata.append("email", user.email ?? "");
          formdata.append("username", user.email ?? "");
          formdata.append("secret", user.uid);

          getFile(user.photoURL ?? "").then((avatar) => {
            formdata.append("avatar", avatar, avatar.name);

            axios
              .post("https://api.chatengine.io/users/", formdata, {
                headers: {
                  "private-key": apiKey,
                },
              })
              .then(() => setLoading(false))
              .catch((e) => {
                console.log("e", e.response);
              });
          });
        });
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    }
  }, [user, navigate, apiKey, projectID]);

  if (!user || loading) return <div />;

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Van Connect</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>
      <ChatEngine
        projectID={projectID}
        userName={user.email ?? ""}
        userSecret={user.uid}
        height="calc(100vh - 66px)"
      />
    </div>
  );
};

export default Chats;
