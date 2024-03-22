import { format, parseISO } from "date-fns";

export const parseDateTime = (date: string, style: string) => {
	return format(parseISO(date), style);
};
