import useFormContext from "../hooks/useFormContext";
import FormInputs from "./FormInputs";

const Form = () => {
  const {
    page,
    title,
    data,
    setPage,
    disablePrev,
    disableNext,
    canSubmit,
    prevHide,
    nextHide,
    submitHide,
  } = useFormContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
  };

  const setNextPage = () => setPage((prev) => prev + 1);
  const setPrevPage = () => setPage((prev) => prev - 1);

  const content = (
    <form className="form flex-col" onSubmit={handleSubmit}>
      <header className="form-header">
        <h2>{title[page]}</h2>

        <div className="button-container">
          <button
            onClick={setPrevPage}
            disabled={disablePrev}
            className={`button ${prevHide}`}
            type="button"
          >
            Prev
          </button>

          <button
            onClick={setNextPage}
            disabled={disableNext}
            className={`button ${nextHide}`}
            type="button"
          >
            Next
          </button>

          <button
            disabled={!canSubmit}
            className={`button ${submitHide}`}
            type="submit"
          >
            Submit
          </button>
        </div>
      </header>

      <FormInputs />
    </form>
  );

  return content;
};
export default Form;
