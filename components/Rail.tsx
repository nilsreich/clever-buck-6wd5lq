import {
  Archive,
  Boxes,
  LayoutDashboard,
  MessagesSquare,
  Settings,
  Table2,
} from "lucide-react";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  ToolTipArrow,
} from "@/components/ui/tooltip";

export const Rail = () => {
  return (
    <div className="flex w-12 flex-col items-center">
      <div className="border-b border-[#1e1e1e]/5 p-3 pb-[0.45rem] dark:border-neutral-100/5">
        <Image
          src="/supabaselogo.png"
          width={24}
          height={24}
          alt="Supbase Logo"
        />
      </div>

      <div className="p-2 m-2">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <LayoutDashboard size={16} strokeWidth={1} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Dashboard</p>
              <ToolTipArrow className="text-neutral-100/50 fill-current" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="rounded-sm bg-[#1e1e1e]/10 p-2 dark:bg-neutral-100/10 m-2">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <LayoutDashboard size={16} strokeWidth={1} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Dashboard</p>
              <ToolTipArrow className="text-neutral-100/50 fill-current" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Boxes size={16} strokeWidth={1} />
      </div>
      <div className="p-2 m-2">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Table2 size={16} strokeWidth={1} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Students</p>
              <ToolTipArrow className="text-neutral-100/50 fill-current" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="p-2 m-2">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <MessagesSquare size={16} strokeWidth={1} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Messages</p>
              <ToolTipArrow className="text-neutral-100/50 fill-current" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="p-2 m-2">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Archive size={16} strokeWidth={1} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Archive</p>
              <ToolTipArrow className="text-neutral-100/50 fill-current" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="grow"></div>
      <div className="p-2 m-2">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Settings size={16} strokeWidth={1} />{" "}
            </TooltipTrigger>
            <TooltipContent>
              <p>Settings</p>
              <ToolTipArrow className="text-neutral-100/50 fill-current" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};
