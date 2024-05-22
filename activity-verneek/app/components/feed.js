// components/feed.js

"use client" ;

import { useState } from 'react';
import { fetchActivities } from "../data/activities.js";
import FeedTop from "../components/feed-top.js";
import FeedItem from "../components/feed-item.js";
import Filters from "../components/filters.js";


export function Feed() {
  const [activeTab, setActiveTab] = useState('Personal');
  const activities = Object.values( fetchActivities() );
  const filteredActivities = activities.filter(activity => (activity.taxonomy === activeTab || activeTab == "All Workspace" ));

  return (
    <div className="activity-feed bg-white shadow rounded-lg p-6">
      
      <FeedTop title="Activity"/>
      
      <Filters activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {filteredActivities.map(activity => (
        <FeedItem key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default Feed;