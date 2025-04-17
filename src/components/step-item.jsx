export const StepItem = ({ number, title, description }) => {
    return (
      <div className="flex items-start gap-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-xl flex-shrink-0">
          {number}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };