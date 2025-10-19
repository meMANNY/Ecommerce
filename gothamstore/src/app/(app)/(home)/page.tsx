import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (

    <div className="p-4">
      <div className="flex flex-col gap-y-4">
      <div>
        <Button>
          Click me
        </Button>
      </div>
      <div>
        <Input placeholder="Enter text here" />
      </div>
      <div>
        <Progress value={50} />
      </div>
    </div>
  </div>

    
  );
}
