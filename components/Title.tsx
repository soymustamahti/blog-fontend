import React from 'react';

const Title = ({ title }: any) => {
  return (
    <>
      <div className="bg-[#D0D1D7FF]">
        <h1 className="text-6xl font-medium py-14 text-center mt-12">
          {title}
        </h1>
      </div>
    </>
  );
};

export default Title;
