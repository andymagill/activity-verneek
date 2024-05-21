
// ./components/back-button.js
'use client'

import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <button onClick={goBack}>
      &larr;
    </button>
  );
};

export default BackButton;