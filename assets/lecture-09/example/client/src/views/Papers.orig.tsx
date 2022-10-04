/* eslint-disable no-underscore-dangle */

import { useParams } from 'react-router-dom';

import useFetch from '@/hooks/useFetch';

import Paper from '@/types/Paper';
import GroupedPapers from '@/types/GroupedPapers';

function Papers() {
  const { id } = useParams();

  const { data: papers, loading } = useFetch<Paper[]>(
    `http://localhost:5000/paper?subject=${id}`,
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

  const grouped: GroupedPapers = {};

  for (let i = 0; i < papers.length; i += 1) {
    const paper: Paper = papers[i];

    if (!(paper.year in grouped)) {
      // Add a new key (year) with an array (as value) containng only the paper
      grouped[paper.year] = [paper];
    } else {
      // Year already exists as key, so push the paper to the array
      grouped[paper.year].push(paper);
    }
  }

  const years = Object.keys(grouped);

  console.log({ grouped, years });

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
