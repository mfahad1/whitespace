import React from 'react';

const SplitSection = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <section id={id} className="pb-20">
    <div className="container mx-auto px-16 items-center flex flex-col lg:flex-row">
      <div className={secondarySlot && "lg:w-1/2"}>{primarySlot}</div>
      {secondarySlot && <div
        className={`mt-10 lg:mt-0 w-full lg:w-1/2 ${reverseOrder && `order-last lg:order-first`}`}
      >
        {secondarySlot}
      </div>}
    </div>
  </section>
);

export default SplitSection;
