import { DateTimeFormat } from '../../constrains/dateTimeFormat';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { formatDate } from '../../utils/formatDate';
import { View } from './view';

export const DateTime = () => {
  const now = new Date();
  const dayOfWeak = capitalizeFirstLetter(formatDate(now, DateTimeFormat.dayOfWeak));
  const date = formatDate(now, DateTimeFormat.date);
  const month = capitalizeFirstLetter(formatDate(now, DateTimeFormat.fullMonthName));
  const year = formatDate(now, DateTimeFormat.year);

  return View({
    dateTime: `${dayOfWeak}, ${date} ${month} ${year}`,
    withIcon: true
  });
};
