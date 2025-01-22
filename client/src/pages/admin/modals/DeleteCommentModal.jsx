import { X, AlertTriangle } from 'lucide-react';

const DeleteCommentModal = ({ isOpen, onClose, onConfirm, comment }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-red-600">Delete Comment</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-100">
            <AlertTriangle className="text-red-600" size={32} />
          </div>
          <p className="text-center text-gray-900 font-medium mb-2">
            Are you sure you want to delete this comment?
          </p>
          <p className="text-center text-gray-500">
            This action cannot be undone.
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="font-medium text-gray-900">{comment.author}</p>
          <p className="text-gray-600 mt-1">{comment.content}</p>
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Delete Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCommentModal;
