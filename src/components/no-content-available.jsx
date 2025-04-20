import { FiInbox } from 'react-icons/fi'; 

const NoContentAvailable = ({ 
  title = "No Content Available", 
  description = "There's nothing to display here at the moment.", 
  actionText,
  onAction 
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-md mx-auto">
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
          <FiInbox className="h-12 w-12 text-gray-400 dark:text-gray-500" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>
        
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          {description}
        </p>
        
        {actionText && onAction && (
          <button
            onClick={onAction}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  );
};

export default NoContentAvailable;