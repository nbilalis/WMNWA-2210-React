import Type from './Type';

interface Subject {
  _id: string;
  title: string;
  type_id: string;
  type: Type[];
}

export default Subject;
