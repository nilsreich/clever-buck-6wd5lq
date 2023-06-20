import { Rail } from "@/components/Rail";
import { Sidebar } from "@/components/Sidebar";
import { Editor } from "@/components/Editor";
import { Statusbar } from "@/components/Statusbar";
import { Chat } from "@/components/Chat";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col h-screen bg-neutral-100 text-[#1e1e1e] dark:bg-[#1e1e1e] dark:text-neutral-100">
        <div className="flex overflow-y-hidden">
          <Rail />
          <Sidebar />
          <Editor />
          <Chat />
        </div>

        <Statusbar />
      </div>
    </main>
  );
}
