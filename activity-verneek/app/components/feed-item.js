// components/feed-item.js

import Image from 'next/image';
import { Markup } from 'interweave';
import { polyfill } from 'interweave-ssr';

import { fetchUsers , fetchReplies , fetchLikes } from "../data/activities.js";

polyfill();

const FeedItem = ({ activity }) => {

  const users = Object.values( fetchUsers() );

  // Helper function to render different types of activities
  const renderContent = () => {
    switch (activity.type) {
      case 'comment':
        return (
          <div className={`${activity.type} activity-item px-6 py-4 mt-4 rounded-lg`}>
            <p>
              <Image src={users[activity.user].avatar} alt={`${users[activity.user].name}'s avatar`} width={36} height={36} className="bg-gray-100 inline-block rounded-full mr-4" />
              <strong>{users[activity.user].name}</strong> commented on <a href={activity.target.link}><strong>{activity.target.name}</strong></a>
            </p>

            <div className="relative ml-12">
              <Markup content={activity.content} />
            </div>
          </div>
        );

      case 'reply':
        return (
          <div className={`${activity.type} activity-item px-6 pb-4 rounded-lg`}>
            <Image src={users[activity.user].avatar} alt={`${users[activity.user].name}'s avatar`} width={36} height={36} className="bg-gray-100 inline-block rounded-full mr-4" />
            <Markup content={activity.content} />
          </div>
          // TODO: add comment form controls
        );

      case 'image-post':
        return (
          <div className={`${activity.type} activity-item px-6 py-4 mt-4 rounded-lg`}>
            <p>
              <Image src={users[activity.user].avatar} alt={`${users[activity.user].name}'s avatar`} width={36} height={36} className="bg-gray-100 inline-block rounded-full mr-4" />
              <strong>{users[activity.user].name} </strong>
              <Markup content={activity.content} />
            </p>

            <div className="relative ml-14">
              <Image src={activity.image} alt="Posted image" width={200} height={100} className="w-full rounded-xl" />
            </div>
          </div>
        );

      default:
        return <div className={`${activity.type} activity-item px-6 py-4 mt-4 rounded-lg`}>
          <Image src={users[activity.user].avatar} alt={`${users[activity.user].name}'s avatar`} width={36} height={36} className="bg-gray-100 inline-block rounded-full mr-4" />
          <Markup content={activity.content} />
        </div>;
    }
  };

  return (
    renderContent()
  );
};

export default FeedItem;
