const GenderCheckbox = ({
  selectedGender,
  onCheckBoxChange,
}: {
  selectedGender: string;
  onCheckBoxChange: (gender: "male" | "female") => void;
}) => {
  return (
    <div className="flex justify-start mt-4 gap-10">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-slate-900 font-bold uppercase">
            Male
          </span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 bg-blue-100"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-slate-900 font-bold uppercase">
            Female
          </span>
          <input
            type="checkbox"
            className="checkbox border-slate-800 bg-blue-100"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
