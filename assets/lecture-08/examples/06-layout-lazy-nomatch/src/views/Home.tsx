import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    console.log('Home ->');
    return () => {
      console.log('Home <-');
    };
  }, []);

  return (
    <>
      <h2>Home Page</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nibh lobortis eros
        sodales porttitor ac nec libero. Phasellus molestie ante ut nisl facilisis cursus. Mauris
        sed porta nisl, in hendrerit ex. Nunc tristique aliquet bibendum. Nulla pulvinar porttitor
        risus egestas hendrerit. Mauris ut vulputate sem. Maecenas vel turpis dignissim velit
        vulputate tincidunt. Proin id finibus metus. Nullam rutrum eu velit sodales tristique.
      </p>
      <p>
        Aliquam posuere molestie orci, id rhoncus justo auctor vel. Duis non mattis lectus, ac
        vulputate metus. Vivamus vulputate consectetur interdum. In hac habitasse platea dictumst.
        Sed non sapien eget sapien blandit bibendum. Nulla tincidunt volutpat velit, vitae volutpat
        urna condimentum sit amet. Suspendisse eu velit sed magna tempor porttitor. Nulla facilisi.
        Sed venenatis, enim ac lacinia lacinia, diam metus vestibulum velit, ac laoreet lacus magna
        sed diam. Nam semper non mauris sit amet dignissim. Sed ut accumsan diam, sit amet
        ullamcorper sem. Sed ut lectus turpis. Proin porta arcu nec iaculis luctus. Mauris
        vestibulum nulla id justo finibus iaculis. Fusce fermentum lacus vel nibh ullamcorper, a
        euismod sapien posuere.
      </p>
    </>
  );
}

export default Home;
