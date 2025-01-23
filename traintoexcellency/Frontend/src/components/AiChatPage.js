import { CopilotChat } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
export default function AiChatPage() {
  return (
    <CopilotChat className="lg:w-[80%] w-[100%] h-[100vh] bg-gray-800 rounded-none "
      instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
      labels={{
        title: "Your Assistant",
        initial: "Hi! 👋 How can I assist you today?",
      }}
    />
  );
}