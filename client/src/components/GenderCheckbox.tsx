const GenderCheckbox = () => {
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
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
