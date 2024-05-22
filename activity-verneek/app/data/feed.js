
export function FeedData() {
    // Sample data for the feed
    return [
      {
        id: 1,
        user: {
          name: 'Jacob',
          avatar: '/images/jacob.svg'
        },
        content: 'Checkout this article about the challenges to Web3 adoption',
        link: 'https://google.com',
        target: {
          name: 'Web3',
          link: '#'
        },
        type: 'comment',
        taxonomy: 'team'
      },
      {
        id: 2,
        user: {
          name: 'Benjamin',
          avatar: '/images/benjamin.svg'
        },
        content: 'What a good design! I like how you dealt with the spacing. Where can I get this file?',
        target: {
          name: 'Sora UI Kit',
          link: '/sora-ui-kit'
        },
        type: 'comment',
        taxonomy: 'Personal'
      },
      {
        id: 3,
        user: {
          name: 'Alex',
          avatar: '/images/alex.svg'
        },
        content: '<a href="#">@Benjamin</a> here is the link <a href="#">supaui.com/download</a>',
        type: 'reply',
        taxonomy: 'Personal'
      },
      {
        id: 4,
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
      {
        id: 5,
        user: {
          name: 'Mia',
          avatar: '/images/mia.svg'
        },
        content: 'Just finished a marathon coding session, check out my latest commit!',
        link: 'https://github.com/andymagill',
        target: {
          name: 'Github',
          link: 'https://github.com'
        },
        type: 'comment',
        taxonomy: 'Team'
      },
      {
        id: 6,
        user: {
          name: 'Carlos',
          avatar: '/images/carlos.svg'
        },
        content: 'generated new images on <strong>Stable Diffusion</strong>',
        image: '/images/headphones2.png',
        time: '8h ago',
        type: 'image-post',
        taxonomy: 'Team'
      },
      {
        id: 7,
        user: {
          name: 'Carlos',
          avatar: '/images/carlos.svg'
        },
        content: 'Working my first blog post on decentralized finance!',
        link: 'https://carlos-finance-blog.com',
        target: {
          name: 'DeFi',
          link: '#'
        },
        type: 'comment',
        taxonomy: 'Community'
      }
    ];
}
