// client/src/pages/MessagingPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function MessagingPage() {
  const [posts, setPosts] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Example: replace with actual groupId and logged-in userId
  const groupId = "GROUP_ID_HERE";
  const userId = "USER_ID_HERE";

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/${groupId}`)
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, [groupId]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    axios.post("http://localhost:5000/api/posts", {
      content: newMessage,
      authorId: userId,
      groupId: groupId
    })
    .then(res => {
      setPosts([res.data, ...posts]);
      setNewMessage("");
    })
    .catch(err => console.error(err));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Messaging</h1>

      {/* Message input */}
      <div className="mb-6">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          rows="3"
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendMessage}
          className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>

      {/* Message feed */}
      <div className="flex-1 space-y-4 overflow-y-auto">
        {posts.length === 0 ? (
          <p className="text-gray-600">No messages yet. Start the conversation!</p>
        ) : (
          posts.map(post => {
            const isMine = post.author?._id === userId;
            return (
              <div
                key={post._id}
                className={`flex ${isMine ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs md:max-w-md p-3 rounded-lg shadow-md ${
                    isMine
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-900 rounded-bl-none"
                  }`}
                >
                  <p className="font-semibold text-sm mb-1">
                    {post.author?.name}
                  </p>
                  <p>{post.content}</p>
                  {post.comments.length > 0 && (
                    <ul className="mt-2 text-xs text-gray-100">
                      {post.comments.map((c, i) => (
                        <li key={i}>
                          <strong>{c.user?.name}:</strong> {c.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default MessagingPage;
