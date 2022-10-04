/* eslint-disable no-underscore-dangle */

import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import useFetch from '@/hooks/useFetch';

import Subject from '@/types/Subject';

import './Subjects.scoped.scss';

function Subjects() {
  const { data: subjects, loading } = useFetch<Subject[]>(
    'http://localhost:5000/subjects'
  );
  const [searchParams, setSearchParams] = useSearchParams({});
  const type = searchParams.get('type');

  useEffect(() => {
    document.title = `Κατευθύνσεις & Τομείς ${type ? ` (${type})` : ''}`;
  }, [type]);

  if (loading) return <div>Loading...</div>;

  return (
    subjects && (
      <>
        <div className="filters">
          <button
            type="button"
            className={!type ? 'active' : ''}
            onClick={() => {
              setSearchParams({});
            }}
          >
            Όλα
          </button>
          <button
            type="button"
            className={type === 'general' ? 'active' : ''}
            onClick={() => {
              setSearchParams({ type: 'general' });
            }}
          >
            Γενικό Λύκειο
          </button>
          <button
            type="button"
            className={type === 'vocational' ? 'active' : ''}
            onClick={() => {
              setSearchParams({ type: 'vocational' });
            }}
          >
            Επαγγελματικό Λύκειο
          </button>
        </div>
        <ul>
          {subjects
            .filter((subject) => !type || subject.type[0].slug === type)
            .map((subject: Subject) => (
              <li key={subject._id}>
                <Link to={`papers/${subject._id}`}>
                  {subject.title} - {subject.type[0].title}
                </Link>
              </li>
            ))}
        </ul>
      </>
    )
  );
}

export default Subjects;
