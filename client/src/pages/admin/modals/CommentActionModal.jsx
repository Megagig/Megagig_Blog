import { useState } from 'react';
import { X, MessageSquare } from 'lucide-react';

const CommentActionModal = ({ isOpen, onClose, onSubmit, comment, action }) => {
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ commentId: comment.id, action, reason });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            {action === 'approve' ? 'Approve Comment' : 'Deny Comment'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
            <MessageSquare className="text-gray-400" size={24} />
            <div>
              <p className="font-medium text-gray-900">{comment.author}</p>
              <p className="text-gray-600 mt-1">{comment.content}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {action === 'deny'
                ? 'Reason for Denial (Optional)'
                : 'Additional Notes (Optional)'}
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder={
                action === 'deny'
                  ? 'Enter reason for denial...'
                  : 'Add any notes...'
              }
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 text-white rounded-lg ${
                action === 'approve'
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {action === 'approve' ? 'Approve' : 'Deny'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentActionModal;
