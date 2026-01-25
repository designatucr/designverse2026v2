export type GoogleEvent = {
  id: string;
  description: string;
  end: {
    dateTime: string;
    timeZone: string;
  };
  start: {
    dateTime: string;
    timeZone: string;
  };
  summary: string;
  location: string;
};
