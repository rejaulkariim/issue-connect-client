import { format } from "date-fns";

export const formatedDate = (date: any) => {
  try {
    if (!date) {
      return "Invalid Date";
    }

    const formattedDate = format(new Date(date), "MMM d, yyyy, h:mm a");
    return `${formattedDate}`;
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid Date";
  }
};
