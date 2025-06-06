type People = {
  id: string;
  name: string;
};

import Decimal from "decimal.js";

type BillItem = {
  id: string;
  name: string;
  price: Decimal;
  assignedTo?: string[];
};

export type BillForm = {
  businessName?: string;
  date?: Date;
  billItems: BillItem[];
  subTotal?: Decimal;
  tax?: Decimal;
  tip?: Decimal;
  people: People[];
  splitEvenly?: boolean;
};
