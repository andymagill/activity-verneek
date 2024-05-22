
// components/feed.js

"use client" ;

import { useState , useEffect } from 'react';
import { fetchActivities } from "../data/activities.js";
import FeedTop from "../components/feed-top.js";
import FeedItem from "../components/feed-item.js";
import Filters from "../components/filters.js";


export function Feed() {
  const [activeTab, setActiveTab] = useState('Personal');
  const [isDarkMode, setDarkMode] = useState(false);
  const activities = Object.values( fetchActivities() );
  const filteredActivities = activities.filter(activity => (activity.taxonomy === activeTab || activeTab == "All Workspace" ));
  const feedClasses = "activity-feed rounded-lg";

  useEffect(() => {
    // Scroll handler
    const handleScroll = event => {
      if ( window.scrollY > 10 ) {
        setDarkMode(true);
      }
      else {
        setDarkMode(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={( isDarkMode ) ? 'darkMode ' + feedClasses : feedClasses}>
      
      <FeedTop title="Activity"/>
      
      <Filters activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {filteredActivities.map(activity => (
        <FeedItem key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default Feed;
