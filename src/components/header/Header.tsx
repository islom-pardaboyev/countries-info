import { MonitorCog, Moon, Sun } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

function Header() {
  return (
    <header className="bg-white sticky dark:bg-dark top-0 z-10 shadow-md">
      <div className="container flex items-center justify-between">
        <a href="/" className="font-extrabold text-2xl py-5">Where in the world?</a>
        <Select>
          <SelectTrigger className="w-[180px] border-none outline-none ring-0 focus:ring-0">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">
              <div className="flex items-center gap-2">
                <Sun /> <p>Light</p>
              </div>
            </SelectItem>
            <SelectItem value="dark">
              <div className="flex items-center gap-2">
                <Moon /> <p>Dark</p>
              </div>
            </SelectItem>
            <SelectItem value="system">
              <div className="flex items-center gap-2">
                <MonitorCog /> <p>System</p>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
}

export default Header;