import React, { useState } from 'react';
import './Feed.css';


const grey_heart = '♡';
const red_heart = '❤';
const edit = '✏️';


const initialFeeds = [
    {
        id: 1,
        title: 'Tech News',
        content: 'Exciting tech news today! New product launches and updates.',
        author: 'TechGeek',
        isLiked: false,
        isEditing: false,
      },
      {
        id: 2,
        title: 'Travel Adventures',
        content: 'Just returned from an amazing adventure in the mountains. Check out my blog for more.',
        author: 'AdventureExplorer',
        isLiked: false,
        isEditing: false,
      },
      {
        id: 3,
        title: 'Recipe of the Day',
        content: 'Delicious recipe for homemade pizza. Perfect for family dinner.',
        author: 'FoodieChef',
        isLiked: false,
        isEditing: false,
      },
      {
        id: 4,
        title: 'Movie Recommendations',
        content: 'Top 10 must-watch movies for the weekend. Don\'t miss out!',
        author: 'MovieBuff',
        isLiked: false,
        isEditing: false,
      },
];

function Feed() {
  const [feeds, setFeeds] = useState(initialFeeds);
  const [newFeed, setNewFeed] = useState({ title: '', content: '', author: 'You' });

  const toggleLike = (postId) => {
    setFeeds((prevFeeds) =>
      prevFeeds.map((feed) =>
        feed.id === postId ? { ...feed, isLiked: !feed.isLiked } : feed
      )
    );
  };

  const toggleEdit = (postId) => {
    setFeeds((prevFeeds) =>
      prevFeeds.map((feed) =>
        feed.id === postId ? { ...feed, isEditing: !feed.isEditing } : feed
      )
    );
  };

  const updateContent = (postId, newContent) => {
    setFeeds((prevFeeds) =>
      prevFeeds.map((feed) =>
        feed.id === postId ? { ...feed, content: newContent, isEditing: false } : feed
      )
    );
  };

  const deleteFeeds = (postId) => {
    setFeeds((prevFeeds) =>
      prevFeeds.filter((feed) =>
        feed.id !== postId
      )
    );
  };

  const addNewFeed = () => {
    if (newFeed.title && newFeed.content) {
      setFeeds((prevFeeds) => [
        ...prevFeeds,
        {
          id: prevFeeds.length + 1,
          title: newFeed.title,
          content: newFeed.content,
          author: newFeed.author,
          isLiked: false,
          isEditing: false,
        },
      ]);

      // Reset the new feed input fields
      setNewFeed({ title: '', content: '', author: 'you' });
    }
  };

  return (
    <div className="feed-container">
      <h1>Feed</h1>
      <div className="new-feed">
        <input
          type="text"
          placeholder="Title"
          className="input-title"
          value={newFeed.title}
          onChange={(e) => setNewFeed({ ...newFeed, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          className="input-content"
          value={newFeed.content}
          onChange={(e) => setNewFeed({ ...newFeed, content: e.target.value })}
        />
        <button onClick={addNewFeed}>Add New Feed</button>
      </div>
      {feeds.map((feed) => (
        <div className="post" key={feed.id}>
          <div className="post-header">
            <h3>{feed.title}</h3>
            <p>Posted by {feed.author}</p>
          </div>
          {feed.isEditing ? (
            <div className="post-content">
              <textarea
                value={feed.content}
                onChange={(e) => updateContent(feed.id, e.target.value)}
              />
            </div>
          ) : (
            <div className="post-content">{feed.content}</div>
          )}
          <div className="post-actions">
            <button onClick={() => toggleLike(feed.id)}>
             
                {feed.isLiked ? red_heart: grey_heart}
        
            </button>
            <button onClick={() => toggleEdit(feed.id)}>
              {feed.isEditing ? 'Save' : edit}
            </button>
            <button onClick={() => deleteFeeds(feed.id)}>delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
