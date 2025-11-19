import { TransactionType } from "../types";
import { TransactionItem } from "./transaction-item";

export type TransactionListProps = { data: TransactionType[] };

export function TransactionList({ data }: TransactionListProps) {
  return (
    <div className="relative">
      <div className="absolute top-5 bottom-5 left-5 w-[2px] bg-black/10 z-0" />

      <div className="flex flex-col gap-6">
        {data.map((item) => (
          <div key={item.id} className="relative z-10 flex w-full items-start">
            <TransactionItem data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
