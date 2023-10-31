import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import CreateTopicForm from "./CreateTopicForm";
import { Button } from "./ui/button";

const CreateTopicModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          New topic
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send a message request🚀</DialogTitle>
          <DialogDescription>
            Fill out the form below to send your request!
          </DialogDescription>
        </DialogHeader>
        {/* Form */}
        <CreateTopicForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateTopicModal;
