import { DateTimeFormat } from '../../../constrains';
import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';
import { formatDate } from '../../../utils/formatDate';
import { View } from '../view';
import { PostDateTimeProps } from './model';

export const PostDateTime = (props: PostDateTimeProps) => {
  let dateTime = undefined;
  if (props.date) {
    const date = new Date(props.date);
    const month = capitalizeFirstLetter(formatDate(date, DateTimeFormat.shortMonthName));
    const dayOfMonth = formatDate(date, DateTimeFormat.date);
    const year = formatDate(date, DateTimeFormat.year);
    dateTime = `${month} ${dayOfMonth}, ${year}`;
  }

  return View({
    withIcon: !!props.withIcon,
    dateTime,
    color: props.color
  });
};
