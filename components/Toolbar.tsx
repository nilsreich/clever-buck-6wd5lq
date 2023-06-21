import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  PanelLeftClose,
  PanelRightClose,
  Underline,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  ToolTipArrow,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
export const Toolbar = () => {
  return (
    <div className="sticky top-0   bg-neutral-100 border-b border-[#1e1e1e]/5 px-6 text-sm dark:border-neutral-100/5 flex">
      <div className="border-r h-11 pt-0.5 -ml-5  border-[#1e1e1e]/5 ">
        <Button variant="ghost" className="">
          <PanelLeftClose size={14} strokeWidth={1} />
        </Button>
      </div>

      <Select defaultValue="BGY22a">
        <SelectTrigger className="bg-transparent border-none w-[100px]">
          <SelectValue placeholder="Select a class" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="BGY22a">Paragraph</SelectItem>
            <SelectItem value="BGY22b">Heading 1</SelectItem>
            <SelectItem value="BF122a">Heading 2</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <button className="p-2 rounded-sm focus:bg-[#1e1e1e]/5 hover:bg-[#1e1e1e]/5">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Bold size={12} strokeWidth={1} />
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>bold</p>
              <ToolTipArrow className="text-neutral-100/50 fill-current" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </button>
      <button className="p-2 rounded-sm focus:bg-[#1e1e1e]/5 hover:bg-[#1e1e1e]/5">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Italic size={12} strokeWidth={1} />
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>italic</p>
              <ToolTipArrow className="text-neutral-100/50 fill-current" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </button>
      <button className="p-2 rounded-sm focus:bg-[#1e1e1e]/5 hover:bg-[#1e1e1e]/5">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Underline size={12} strokeWidth={1} />
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>underline</p>
              <ToolTipArrow className="text-neutral-100/50 fill-current" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </button>
      <button className="p-2 rounded-sm focus:bg-[#1e1e1e]/5 hover:bg-[#1e1e1e]/5">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <AlignLeft size={12} strokeWidth={1} />
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>left</p>
              <ToolTipArrow className="text-neutral-100/50 fill-current" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </button>
      <button className="p-2 rounded-sm focus:bg-[#1e1e1e]/5 hover:bg-[#1e1e1e]/5">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <AlignCenter size={12} strokeWidth={1} />
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>italic</p>
              <ToolTipArrow className="text-neutral-100/50 fill-current" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </button>
      <button className="p-2 rounded-sm focus:bg-[#1e1e1e]/5 hover:bg-[#1e1e1e]/5">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <AlignRight size={12} strokeWidth={1} />
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>italic</p>
              <ToolTipArrow className="text-neutral-100/50 fill-current" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </button>
      <div className="grow"></div>
      <button className="m-2 bg-black text-xs font-semibold rounded px-4 text-neutral-200">
        edit
      </button>
      <div className="border-l h-11 pt-0.5 -mr-5  border-[#1e1e1e]/5 ">
        <Button variant="ghost" className="">
          <PanelRightClose size={14} strokeWidth={1} />
        </Button>
      </div>

    </div>
  );
};
