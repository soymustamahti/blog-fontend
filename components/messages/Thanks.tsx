import Link from 'next/link';
import React from 'react';
import Title from '../Title';

export default function Thanks({ msgOne, msgTwo, msgThree }: any) {
  return (
    <>
      <div className="mr-auto ml-auto text-center mt-10">
        <h2 className="font-bold  text-4xl">Thanks !</h2>
        <p className="font-bold text-xl">{msgOne}</p>
        <p>{msgTwo}</p>
        <p>{msgThree}</p>
        <p>See you soon</p>
        <Link href="/">
          <a className="underline">Back Home</a>
        </Link>
      </div>
    </>
  );
}
