import { IMIME } from './mime';

export interface IRecord {
  Duration: number;
  From: string;
  MIME: IMIME;
  Received: string;
  To: string;
  displayDate: string;
  displayTime: string;
  formattedDuration: string;
  phoneNumber: string;
}
