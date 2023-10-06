import React from 'react';

const CardSkeletonComponent = () => {
  return (
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 animate-pulse"></div>
  );
}

export default CardSkeletonComponent;
