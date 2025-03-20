import PostCard from '../components/postCard/PostCard.tsx';
import './Home.css';
import { useEffect, useState } from '@lynx-js/react';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        console.log(data)
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <text className='Loading'>Loading...</text>;
  }

  if (error) {
    return <text className='Error'>Error: {error}</text>;
  }
  return (
    <scroll-view className='Home'>
      <text className='Title'>Home</text>
      <text className='Subtitle'>Welcome to the Home Page!</text>
      <view className='PostsContainer'>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </view>
    </scroll-view>
  );
};

export default Home;
