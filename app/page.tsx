import { Rail } from "@/components/Rail";
import { Sidebar } from "@/components/Sidebar";
import { Editor } from "@/components/Editor";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen bg-neutral-100 text-[#1e1e1e] dark:bg-[#1e1e1e] dark:text-neutral-100">
        <Rail />
        <Sidebar />
        <Editor />
      </div>
    </main>
  );
}
