
export async function FeedData() {
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
        type: 'comment'
      },
      {
        id: 2,
        user: {
          name: 'Alex',
          avatar: '/avatars/alex.jpg'
        },
        content: 'Here is the link to download the Sora UI Kit.',
        link: 'https://supaui.com/download',
        type: 'reply'
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
        type: 'image-post'
      }
    ];
}
