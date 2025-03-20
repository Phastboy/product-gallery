import './PostCard.css';

const PostCard = ({ post }) => {
  return (
    <view className='PostCard'>
      {/* User Avatar */}
      <image
        src='https://via.placeholder.com/40' // Placeholder image
        className='UserAvatar'
      />

      {/* Post Content */}
      <view className='PostContent'>
        {/* User Info */}
        <view className='UserInfo'>
          <text className='UserName'>John Doe</text>
          <text className='UserHandle'>@johndoe</text>
          <text className='Timestamp'>· 2h</text>
        </view>

        {/* Post Body */}
        <text className='PostBody'>{post.body}</text>

        {/* Interaction Icons */}
        <view className='InteractionIcons'>
          <text className='Icon' bindtap={() => console.log('Like')}>❤️</text>
          <text className='Icon' bindtap={() => console.log('Retweet')}>🔁</text>
          <text className='Icon' bindtap={() => console.log('Share')}>📤</text>
        </view>
      </view>
    </view>
  );
};

export default PostCard;
