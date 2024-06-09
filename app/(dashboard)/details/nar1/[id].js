import { useRouter } from 'next/navigation';
import React from 'react';

const Nar1Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>NAR 1 Detail Page</h1>
      <p>Detail for ID: {id}</p>
    </div>
  );
};

export default Nar1Detail;