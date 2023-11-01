import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="wrapper">
      <Skeleton className="w-[100px] h-[20px] rounded-full bg-rose-500" />
      <Skeleton className="w-[100px] h-[20px] rounded-full bg-rose-500" />
      <Skeleton className="w-[100px] h-[20px] rounded-full bg-rose-500" />
    </div>
  );
};

export default loading;
