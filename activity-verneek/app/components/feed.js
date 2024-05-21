// components/feed.js

"use client" ;

import { useState } from 'react';
import { FeedData } from "../data/feed.js";
import Image from 'next/image';
import Link from 'next/link';
import Filters from "../components/filters.js";
import FeedTop from "../components/feed-top.js";


export function Feed() {
  const [activeTab, setActiveTab] = useState('All Workspace');
  const activities = Object.values(FeedData());
  const filteredActivities = activities.filter(activity => activity.taxonomy === activeTab);

  return (
    <div className="activity-feed bg-white shadow rounded-lg p-6">
      
      <FeedTop title="Activity"/>
      
      <Filters activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {filteredActivities.map(activity => (
        <div key={activity.id} className={`mb-4 p-4 rounded-lg ${activity.type === 'image-post' ? 'bg-gray-100' : 'bg-white'}`}>
          <div className="flex items-center space-x-3 mb-2">
            <Image src={activity.user.avatar} alt={activity.user.name} width={40} height={40} className="rounded-full" />
            <strong className="text-sm font-medium text-gray-900">{activity.user.name}</strong>
          </div>
          {activity.type === 'comment' && (
            <>
              <p className="text-gray-700">commented on <Link href={activity.target.link} className="text-blue-600 hover:underline">{activity.target.name}</Link></p>
              <p className="text-sm text-gray-600 mt-1">{activity.content}</p>
            </>
          )}
          {activity.type === 'reply' && (
            <>
              <span className="text-sm text-gray-600">{activity.content} <a href={activity.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Download here</a> 👍</span>
            </>
          )}
          {activity.type === 'image-post' && (
            <>
              <p className="text-sm text-gray-600">{activity.content}</p>
              <div className="mt-2">
                <Image src={activity.image} alt="Post image" width={100} height={100} className="rounded-lg" />
                <span className="text-xs text-gray-500 absolute top-0 right-0 m-2">{activity.time}</span>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Feed;