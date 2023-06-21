import {
  ChevronsUpDown,
  Plus,
  MoreVertical,
  Edit,
  FileDown,
  Tag,
  Trash2,
  PanelLeftClose,
  MonitorUp,
  FileText,
} from "lucide-react";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const files = [
  "Extremwertaufgaben",
  "Steckbriefaufgaben",
  "Linearex Funktionen",
  "Aufstellen von Funktionen",
  "Optimierungsprobleme",
];

import { Button } from "./ui/button";

export const Sidebar = () => {
  return (
    <div className="flex w-64 flex-col border-l border-r border-[#1e1e1e]/5 dark:border-neutral-100/5 ">
      <div className="flex items-center gap-2 border-b border-[#1e1e1e]/5 pl-6 py-2 text-lg dark:border-neutral-100/5">
        <div>Unterricht</div>
      </div>

      <Button className="mt-2 font-normal text-neutral-100 px-2.5 justify-start h-min py-2 mx-6 inline-flex items-center gap-3 whitespace-nowrap rounded border border-[#1e1e1e]/10 bg-[#1e1e1e] text-xs dark:border-neutral-100/10 dark:bg-neutral-100/10">
        <MonitorUp size={16} strokeWidth={1} /> Session starten
      </Button>
  


      <Select>
        <SelectTrigger className="mt-3 mb-6 mx-6">
          <SelectValue placeholder="Select a class" defaultValue={["BGY22a"]} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="BGY22a">BGY22a</SelectItem>
            <SelectItem value="BGY22b">BGY22b</SelectItem>
            <SelectItem value="BF122a">BF122a</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="px-6 text-sm mb-3 text-[#1e1e1e]/40">
        Files
      </div>
      {files.map((item) => {
        return (
          <div className="mx-6 flex items-center text-sm text-[#1e1e1e]/40 group">
            <FileText size={16} strokeWidth={1} className="text-[#1e1e1e]" />
            <div className="px-3 py-1 whitespace-nowrap ">{item}</div>
            <div className="group-hover:block hidden"> <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreVertical size={16} strokeWidth={1} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Edit size={12} strokeWidth={1} className="mr-2" />
                  Rename
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FileDown size={12} strokeWidth={1} className="mr-2" />
                  Export
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Tag size={12} strokeWidth={1} className="mr-2" />
                  Move
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <Trash2 size={12} strokeWidth={1} className="mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
              </div>

           
          </div>
        );
      })}
    </div>
  );
};
