// components/feed-item.js

import Image from 'next/image';

const FeedItem = ({ activity }) => {
  // Helper function to render different types of activities
  const renderContent = () => {
    switch (activity.type) {
      case 'comment':
        return (
          <>
            <p className="text-gray-700">{activity.user.name} commented on {activity.target.name}</p>
            <p className="text-sm text-gray-600">{activity.content}</p>
          </>
        );
      case 'reply':
        return (
          <p className="text-sm text-gray-600">
            {activity.user.name} replied with a link: <a href={activity.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Download here</a>
          </p>
        );
      case 'image-post':
        return (
          <>
            <p className="text-sm text-gray-600">{activity.user.name} posted an image</p>
            <div className="mt-2">
              <Image src={activity.image} alt="Posted image" width={100} height={100} className="rounded-lg" />
            </div>
          </>
        );
      case 'update':
        return (
          <p className="text-sm text-gray-600">
            {activity.user.name} updated their status: <a href={activity.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{activity.content}</a>
          </p>
        );
      case 'promotion':
        return (
          <p className="text-sm text-gray-600">
            {activity.user.name} shared a promotion: <a href={activity.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{activity.content}</a>
          </p>
        );
      default:
        return <p className="text-sm text-gray-600">Unknown activity type</p>;
    }
  };

  return (
    <div className="activity-item mb-4 p-4 rounded-lg bg-white">
      <div className="flex items-center space-x-3 mb-2">
        <Image src={activity.user.avatar} alt={`${activity.user.name}'s avatar`} width={40} height={40} className="rounded-full" />
        <strong className="text-sm font-medium text-gray-900">{activity.user.name}</strong>
      </div>
      {renderContent()}
    </div>
  );
};

export default FeedItem;
