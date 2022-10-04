/* eslint-disable no-underscore-dangle */

import { useParams } from 'react-router-dom';

import useFetch from '@/hooks/useFetch';

import Paper from '@/types/Paper';
import GroupedPapers from '@/types/GroupedPapers';

function Papers() {
  const { id } = useParams();

  const { data: papers, loading } = useFetch<Paper[]>(
    `http://localhost:5000/papers?subject=${id}`,
    []
  );

  if (loading) return <div>Loading...</div>;
  if (!papers?.length) return <div>No data...</div>;

  papers.sort((p1, p2) => {
    if (p1.year < p2.year) return -1;
    if (p1.year > p2.year) return 1;
    if (p1.title < p2.title) return -1;
    if (p1.title > p2.title) return 1;
    return 0;
  });

  // Group papers by year, using reduce
  const grouped = papers.reduce((acc, paper) => {
    if (paper.year in acc) {
      return { ...acc, [paper.year]: [...acc[paper.year], paper] };
    }
    return { ...acc, [paper.year]: [paper] };
  }, {} as GroupedPapers);

  const years = Object.keys(grouped);

  return (
    <>
      <h1>Papers</h1>
      <ul>
        {years.map((year) => (
          <li key={year}>
            {year} ({grouped[year].length})
            <ul>
              {grouped[year].map((paper) => (
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
