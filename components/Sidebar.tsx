import {
  ChevronsUpDown,
  Plus,
  MoreVertical,
  Edit,
  FileDown,
  Tag,
  Trash2,
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

import { Button } from "./ui/button";

export const Sidebar = () => {
  return (
    <div className="flex w-64 flex-col border-l border-r border-[#1e1e1e]/5 dark:border-neutral-100/5">
      <div className="border-b border-[#1e1e1e]/5 px-6 py-2 text-lg dark:border-neutral-100/5">
        Sessions
      </div>
      <Select>
        <SelectTrigger className="m-6 border">
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

      <Button className="font-normal text-[#1e1e1e] px-2 justify-start h-min py-1 mx-6 inline-flex items-center gap-2 whitespace-nowrap rounded border border-[#1e1e1e]/10 bg-[#1e1e1e]/5 text-xs dark:border-neutral-100/10 dark:bg-neutral-100/10">
        <Plus size={16} strokeWidth={1} />
        Session starten
      </Button>
      <div className="m-6 flex items-center justify-between text-sm">
        <div>Extremwertaufgaben</div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreVertical size={16} strokeWidth={1} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align='start'>
            <DropdownMenuItem>
              <Edit size={12} strokeWidth={1} className="mr-2"/>
              Rename
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileDown size={12} strokeWidth={1} className="mr-2"/>
              Export
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Tag size={12} strokeWidth={1} className="mr-2"/>
              Move
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Trash2 size={12} strokeWidth={1} className="mr-2"/>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
