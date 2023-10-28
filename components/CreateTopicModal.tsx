import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const CreateTopicModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          New topic
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send a request🚀</DialogTitle>
          <DialogDescription>
            Fill out the form below to send your request!
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Title</Label>
            <Input id="name" placeholder="Give your requast a name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="detais">Details</Label>
            <Textarea id="detais" placeholder="Details..." />
          </div>
        </form>
        <DialogFooter>
          <Button type="submit">Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTopicModal;
