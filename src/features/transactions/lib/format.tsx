import { TransactionClass, TransactionKeyType } from "../types";

export function formatClass(className: TransactionClass) {
  switch (className) {
    case TransactionClass.Pix:
      return "Pix";
    case TransactionClass.Debit:
      return "Débito";
    case TransactionClass.Credit:
      return "Crédito";
    case TransactionClass.Transfer:
      return "Transferência";
    case TransactionClass.Deposit:
      return "Depósito";
  }
}

export function formatKeyType(keyType: TransactionKeyType) {
  switch (keyType) {
    case TransactionKeyType.CPF:
      return "CPF";
    case TransactionKeyType.CNPJ:
      return "CNPJ";
    case TransactionKeyType.Phone:
      return "Telefone";
    case TransactionKeyType.Email:
      return "E-mail";
    case TransactionKeyType.Random:
      return "Chave aleatória";
  }
}

export function formatCurrency(
  value: number,
  locale: string = "pt-BR",
  currency: string = "BRL",
  prefix?: string,
) {
  const formatted = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);

  return prefix ? `${prefix} ${formatted}` : formatted;
}

export function getCategoryIcon(className: TransactionClass) {
  switch (className) {
    case TransactionClass.Pix:
      return <i className="ri-flashlight-fill"></i>;
    case TransactionClass.Debit:
      return <i className="ri-arrow-down-line"></i>;
    case TransactionClass.Credit:
      return <i className="ri-bank-card-line"></i>;
    case TransactionClass.Transfer:
      return <i className="ri-money-dollar-circle-line"></i>;
    case TransactionClass.Deposit:
      return <i className="ri-money-dollar-circle-line"></i>;
    default:
      return <i className="ri-money-dollar-circle-line"></i>;
  }
}

export function getCategoryColor(className: TransactionClass) {
  switch (className) {
    case TransactionClass.Pix:
      return "#1E90FF";
    case TransactionClass.Debit:
      return "#FF4D4F";
    case TransactionClass.Credit:
      return "#52C41A";
    case TransactionClass.Transfer:
      return "#FA8C16";
    case TransactionClass.Deposit:
      return "#722ED1";
    default:
      return "#595959";
  }
}
