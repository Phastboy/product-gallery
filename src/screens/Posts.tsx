import { useEffect, useState } from '@lynx-js/react';
import fetchWithAuth from '../utils/api';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetchWithAuth('/posts');
        setPosts(response);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <view className="Posts">
      <text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Posts</text>
      {posts.map((post) => (
        <view className="Post" key={post.id}>
          <text>{post.content}</text>
        </view>
      ))}
    </view>
  );
};

export default Posts;
