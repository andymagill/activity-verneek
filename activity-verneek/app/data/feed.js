
export function FeedData() {
    // Sample data for the feed
    return [
      {
        id: 1,
        user: {
          name: 'Benjamin',
          avatar: '/images/benjamin.svg'
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
          avatar: '/images/alex.svg'
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
          avatar: '/images/jacob.svg'
        },
        content: 'generated new images on MidJourney',
        image: '/images/headphones.png',
        time: '8h ago',
        type: 'image-post',
        taxonomy: 'Personal'
      },
      // Fictitious content for additional activities
      {
        id: 4,
        user: {
          name: 'Mia',
          avatar: '/images/mia.svg'
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
          avatar: '/images/carlos.svg'
        },
        content: 'Excited to share my first blog post on decentralized finance!',
        link: 'https://carlos-finance-blog.com',
        type: 'update',
        taxonomy: 'Community'
      }
    ];
}
