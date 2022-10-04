/* eslint-disable no-underscore-dangle */

import { useParams } from 'react-router-dom';

import useFetch from '@/hooks/useFetch';

import Paper from '@/types/Paper';
import Subject from '@/types/Subject';

function Papers() {
  const { id } = useParams();

  // Get the subject
  const { data: subject, loading: loading1 } = useFetch<Subject>(
    `http://localhost:5000/subjects/${id}`
  );

  // Get the subject's papers
  const { data: papers, loading: loading2 } = useFetch<Paper[]>(
    `http://localhost:5000/papers?subject=${id}`,
    []
  );

  if (loading1 || loading2) return <div>Loading...</div>;
  if (!subject || !papers?.length) return <div>No data...</div>;

  // Set will take care of the duplicates
  // and with the help of the spread operator we will convert to array
  const years = [...new Set(papers.map((p) => p.year))];
  years.sort();

  return (
    <>
      <h1>{subject?.title}</h1>
      <h2>Papers</h2>
      <ul>
        {years.map((year) => (
          <li key={year}>
            {year} ({papers.filter((p) => p.year === year).length})
            <ul>
              {papers
                .filter((p) => p.year === year)
                .map((paper) => (
                  <li key={paper._id}>{paper.title}</li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Papers;
