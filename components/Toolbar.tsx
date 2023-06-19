import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
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
export const Toolbar = () => {
  return (
    <div className="sticky top-0 bg-neutral-100 border-b border-[#1e1e1e]/5 px-6 py-2 text-sm dark:border-neutral-100/5 flex">
       <Select defaultValue="BGY22a">
        <SelectTrigger className="bg-transparent border-none w-[100px]" >
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
    </div>
  );
};
