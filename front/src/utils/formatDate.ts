import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { DateTimeFormat } from '../constrains/dateTimeFormat';


export const formatDate = (date?: Date | number, dateFormat = DateTimeFormat.default) => {

    if (!date) {
        return '';
    }

    return format(date, dateFormat, { locale: ru });
};
