import dayjs from "dayjs";
import {
  formatClass,
  formatCurrency,
  getCategoryColor,
  getCategoryIcon,
} from "../lib/format";
import { TransactionType } from "../types";

type TransactionItemProps = {
  data: TransactionType;
};

export function TransactionItem({ data }: TransactionItemProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2 flex-1 overflow-hidden">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full text-white flex-shrink-0"
          style={{ backgroundColor: getCategoryColor(data.class) }}
        >
          {getCategoryIcon(data.class)}
        </div>

        <div className="flex flex-col flex-1 overflow-hidden">
          <span className="font-medium text-base truncate">
            {data.description}
          </span>

          <div className="flex items-center gap-1 mt-0.5 text-sm text-gray-500">
            <span className="truncate">
              {dayjs(data.completedAt).format("HH:mm")}
            </span>
            <span>•</span>
            <span className="truncate">{formatClass(data.class)}</span>
          </div>
        </div>
      </div>

      <span className="font-bold ml-2 whitespace-nowrap">
        {formatCurrency(data.amount, "pt-BR")}
      </span>
    </div>
  );
}
