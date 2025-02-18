import React from "react";

interface item {
  name: string;
  position: string;
  quote: string;
}

type prop = {
  item: item[];
  index: number;
};

const TextCard = ({ item, index }: prop) => {
  return (
    <div className="flex flex-col gap-8 text-center lg:text-start font-inter ">
      <section>
          <p className="text-lg text-dark-blue font-light
          lg:text-2xl xl:text-3xl">{`" ${item[index].quote} "`} </p>
      </section>
      <section className="lg:flex lg:items-center lg:gap-4 lg:text-xl ">
        <h2 className="text-dark-blue font-bold">{item[index].name}</h2>
        <h3 className="text-grayish-blue">{item[index].position}</h3>
      </section>
    </div>
  );
};

export default TextCard;
