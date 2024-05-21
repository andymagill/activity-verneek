// components/feed.js

import Image from 'next/image';
import Link from 'next/link';
import { FeedData } from "../data/feed.js";
import Filters from "../components/filters.js";

export async function Feed() {
    
  const activities = await FeedData();

  return (
    <div className="activity-feed">
      <h2>Activity</h2>
      <Filters />
      
      {activities.map(activity => (
        <div key={activity.id} className={activity.type}>
          <Image src={activity.user.avatar} alt={activity.user.name} width={40} height={40} />
          <strong>{activity.user.name}</strong>
          {activity.type === 'comment' && (
            <>
              commented on <Link href={activity.target.link}><strong>{activity.target.name}</strong></Link>
              <p>{activity.content}</p>
            </>
          )}
          {activity.type === 'reply' && (
            <>
              <span>{activity.content} <a href={activity.link} target="_blank" rel="noopener noreferrer">Download here</a> 👍</span>
            </>
          )}
          {activity.type === 'image-post' && (
            <>
              <span>{activity.content}</span>
              <div className="image-container">
                <Image src={activity.image} alt="Post image" width={100} height={100} />
                <span className="time">{activity.time}</span>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Feed;