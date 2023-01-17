import useLogRender from '@/hooks/useLogRender';

import Hello from '@/components/Hello';
import LiftContentUp from '@/components/LiftContentUp';
import MoveStateDown from '@/components/MoveStateDown';
import NoMemoization from '@/components/NoMemoization';
import WithMemoization from '@/components/WithMemoization';
import WithSlowChildComponents from '@/components/WithSlowChildComponents';

import './Home.scoped.scss';

function Home() {
  useLogRender('Home');

  return (
    <>
      <h1>Home</h1>
      <Hello />
      <section>
        <NoMemoization />
      </section>
      <section>
        <WithMemoization />
      </section>
      <section>
        <MoveStateDown />
      </section>
      <section>
        <WithSlowChildComponents />
      </section>
      <section>
        <LiftContentUp />
      </section>
    </>
  );
}

export default Home;
