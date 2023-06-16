import { ChevronsUpDown, Plus, MoreVertical } from "lucide-react";
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
      <div className="mx-6 inline-flex items-center gap-2 whitespace-nowrap rounded border border-[#1e1e1e]/10 bg-[#1e1e1e]/5 p-2 py-1 text-xs dark:border-neutral-100/10 dark:bg-neutral-100/10">
        <Plus size={16} strokeWidth={1} />
        <div>Session starten</div>
      </div>
      <div className="m-6 flex items-center justify-between text-sm">
        <div>Extremwertaufgaben</div>
        <MoreVertical size={16} strokeWidth={1} />
      </div>
    </div>
  );
};
