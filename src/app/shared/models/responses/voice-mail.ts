import { IRecord } from '../record';
import { IMetaData } from '../meta-data';

export interface IVoiceMailResponse {
  metadata: IMetaData;
  records: IRecord[];
  nextPage: number;
  previousPage: number;
  alsoPages: number[];
  currentPage: number;
  maxPage: number;
}
