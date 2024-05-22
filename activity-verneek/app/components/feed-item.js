// components/feed-item.js

import Image from 'next/image';

const FeedItem = ({ activity }) => {
  // Helper function to render different types of activities
  const renderContent = () => {
    switch (activity.type) {
      case 'comment':
        return (
          <>
            <p className="">
              <Image src={activity.user.avatar} alt={`${activity.user.name}'s avatar`} width={40} height={40} className="bg-gray-100 inline-block rounded-full mb-2 mr-2" />
              <strong>{activity.user.name}</strong> commented on <strong>{activity.target.name}</strong>
            </p>
            <div className="ml-12 text-md text-gray-600">{activity.content}</div>
          </>
        );

      case 'reply':
        return (
          <div className=" text-gray-600">
            <Image src={activity.user.avatar} alt={`${activity.user.name}'s avatar`} width={40} height={40} className="bg-gray-100 inline-block rounded-full mb-2 mr-2" />
            <div className="ml-12 text-sm text-gray-600">{activity.content}</div>
          </div>
        );

      case 'image-post':
        return (
          <>
            <p className=" text-gray-600">
              <Image src={activity.user.avatar} alt={`${activity.user.name}'s avatar`} width={40} height={40} className="bg-gray-100 inline-block rounded-full mb-2 mr-2" />
              <strong>{activity.user.name}</strong> posted an image
            </p>

            <div className="image-post relative mt-2">
              <Image class="w-full rounded-xl" src={activity.image} alt="Posted image" width={200} height={100} className="rounded-lg" />
            </div>
          </>
        );

      case 'update':
        return (
          <>
            <p className="text-gray-600">
              <Image src={activity.user.avatar} alt={`${activity.user.name}'s avatar`} width={40} height={40} className="bg-gray-200 inline-block rounded-full mb-2 mr-2" />
              <strong>{activity.user.name}</strong> updated their status:
            </p>
            <p><a href={activity.link} className="hover:text-blue-600 hover:underline" >{activity.content}</a></p>
          </>
        );

      default:
        return <p className=" text-gray-600">
          <Image src={activity.user.avatar} alt={`${activity.user.name}'s avatar`} width={40} height={40} className="bg-gray-100 inline-block rounded-full mb-2 mr-2" />
          Unknown activity type
        </p>;
    }
  };

  return (
    <div className="activity-item mb-4 p-4 rounded-lg bg-white">
      {renderContent()}
    </div>
  );
};

export default FeedItem;
