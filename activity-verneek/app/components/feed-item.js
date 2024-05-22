// components/feed-item.js

import Image from 'next/image';
import { Markup } from 'interweave';
import { polyfill } from 'interweave-ssr';

polyfill();

const FeedItem = ({ activity }) => {
  // Helper function to render different types of activities
  const renderContent = () => {
    switch (activity.type) {
      case 'comment':
        return (
          <>
            <p className="">
              <Image src={activity.user.avatar} alt={`${activity.user.name}'s avatar`} width={40} height={40} className="bg-gray-100 inline-block rounded-full mb-2 mr-2" />
              <strong>{activity.user.name}</strong> commented on <a href={activity.target.link}><strong>{activity.target.name}</strong></a>
            </p>
            <div className="ml-12 text-md text-gray-600">
              <Markup content={activity.content} />
            </div>
          </>
        );

      case 'reply':
        return (
          <div className="text-sm text-gray-600">
            <Image src={activity.user.avatar} alt={`${activity.user.name}'s avatar`} width={40} height={40} className="bg-gray-100 inline-block rounded-full mb-2 mr-2" />
            <Markup content={activity.content} />
          </div>
        );

      case 'image-post':
        return (
          <>
            <p className="text-gray-600">
              <Image src={activity.user.avatar} alt={`${activity.user.name}'s avatar`} width={40} height={40} className="bg-gray-100 inline-block rounded-full mb-2 mr-2" />
              <strong>{activity.user.name} </strong>
              <Markup content={activity.content} />
            </p>

            <div className="image-post relative ml-8">
              <Image src={activity.image} alt="Posted image" width={200} height={100} className="w-full rounded-xl" />
            </div>
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
    <div className="activity-item mt-4 p-4 rounded-lg bg-white">
      {renderContent()}
    </div>
  );
};

export default FeedItem;
