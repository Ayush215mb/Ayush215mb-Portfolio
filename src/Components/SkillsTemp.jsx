const SkillsTemp = ({ image, name, year }) => {
  return (
    <div className="flex text-xl border-b  justify-between  p-4 border-gray-700 items-center">
      <div className="flex gap-2 items-center">
        <img src={image} alt={name + "_logo"} className="md:max-w-10 max-w-8" />
        <p className="text-nowrap">{name}</p>
      </div>

      <p className="text-nowrap">{year}</p>
    </div>
  );
};

export default SkillsTemp;
