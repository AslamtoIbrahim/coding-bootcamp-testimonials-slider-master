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
    <div className="flex flex-col gap-8 text-center font-inter">
      <section>
          <p className="text-lg text-dark-blue font-light">{`" ${item[index].quote} "`} </p>
      </section>
      <section>
        <h2 className="text-dark-blue font-bold">{item[index].name}</h2>
        <h3 className="text-grayish-blue">{item[index].position}</h3>
      </section>
    </div>
  );
};

export default TextCard;
