export const Alert = ({color, message}) => {

  
  return (
    <>
      <div
        className={`flex items-center p-4 mb-4 text-sm text-${color}-800 border border-${color}-300 bg-${color}-50 dark:text-${color}-400 dark:border-${color}-800 justify-center rounded-xl`}
        role="alert"
      >
        <span className="sr-only">{type}</span>
        <div className="text-center">
          {message}
        </div>
      </div>
    </>
  );
};
