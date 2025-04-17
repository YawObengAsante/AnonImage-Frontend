import { IoCopyOutline } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function CopyLinkButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <IoCopyOutline className="text-blue-600 text-lg sm:text-xl" />
        </TooltipTrigger>
        <TooltipContent>
          <span>Copy link</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
