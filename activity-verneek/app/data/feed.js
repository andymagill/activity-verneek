
export function FeedData() {
    // Sample data for the feed
    return [
      {
        id: 1,
        user: {
          name: 'Benjamin',
          avatar: '/avatars/benjamin.jpg'
        },
        content: 'What a good design! I like how you dealt with the spacing.',
        target: {
          name: 'Sora UI Kit',
          link: '/sora-ui-kit'
        },
        type: 'comment',
        taxonomy: 'Personal'
      },
      {
        id: 2,
        user: {
          name: 'Alex',
          avatar: '/avatars/alex.jpg'
        },
        content: 'Here is the link to download the Sora UI Kit.',
        link: 'https://supaui.com/download',
        type: 'reply',
        taxonomy: 'Personal'
      },
      {
        id: 3,
        user: {
          name: 'Jacob',
          avatar: '/avatars/jacob.jpg'
        },
        content: 'generated new images on MidJourney',
        image: '/posts/headphones.jpg',
        time: '8h ago',
        type: 'image-post',
        taxonomy: 'Personal'
      },
      // Fictitious content for additional activities
      {
        id: 4,
        user: {
          name: 'Mia',
          avatar: '/avatars/mia.jpg'
        },
        content: 'Just finished a marathon coding session, check out my latest commit!',
        link: 'https://github.com/andymagill',
        type: 'update',
        taxonomy: 'Team'
      },
      {
        id: 5,
        user: {
          name: 'Carlos',
          avatar: '/avatars/carlos.jpg'
        },
        content: 'Excited to share my first blog post on decentralized finance!',
        link: 'https://carlos-finance-blog.com',
        type: 'promotion',
        taxonomy: 'Community'
      }
    ];
}
