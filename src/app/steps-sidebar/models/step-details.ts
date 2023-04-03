import { Header } from 'src/app/shared/models/header';

export interface Step {
  stepCount: number;
  stepName: string;
  stepDescription: string;
  header: Header;
}
