import { DateTime } from "luxon";

export const formatDateTime = (dateTimeStr, language) => {
   if (!dateTimeStr) return '';

   const dateTime = DateTime.fromFormat(dateTimeStr, 'yyyy-MM-dd HH:mm:ss', { zone: 'utc' });
   let formattedDate = '';

   if (language === 'en') {
      formattedDate = dateTime.setLocale('en-US');
   } else if (language === 'ua') {
      formattedDate = dateTime.setLocale('uk-UA');
   } else if (language === 'he') {
      formattedDate = dateTime.setLocale('he-IL');
   } else {
      formattedDate = dateTime;
   }

   return formattedDate.toFormat('EEE, dd LLLL, HH:mm');
};

export const formatDate = (dateTimeStr) => {
   if (!dateTimeStr) return '';

   const dateTime = DateTime.fromFormat(dateTimeStr, 'yyyy-MM-dd HH:mm:ss', { zone: 'utc' });
   const formattedDate = dateTime.toFormat('dd.MM');

   return formattedDate;
};