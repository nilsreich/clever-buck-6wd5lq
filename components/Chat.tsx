import { Input } from "./ui/input";

export const Chat = () => {
  return (
    <div className="flex w-64 flex-col border-l border-[#1e1e1e]/5 dark:border-neutral-100/5">
      <div className="grow overflow-hidden">chat</div>
      <div className="border-t p-2 border-[#1e1e1e]/5 dark:border-neutral-100/5">
        <div className="font-medium p-1 text-sm">Erstelle eine Zusammenfassung der letzten Stunde</div>
        <Input type="text" placeholder="Stelle Sasu eine Frage" className="bg-[#1e1e1e]/5 text-sm px-2 py-1 rounded h-min placeholder:text-xs border-[#1e1e1e]/5 dark:border-neutral-100/5" />
      </div>
    </div>
  );
};
