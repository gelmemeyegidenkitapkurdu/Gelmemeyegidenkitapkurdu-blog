import { useEffect, useState } from "react";
import supabase from "../lib/supabase-client";

export default function Home() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setPosts(data);
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Gelmemeyegidenkitapkurdu</h1>

      {posts.length === 0 && <p>Yazılar yükleniyor...</p>}

      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: 20 }}>
          <h3>{post.title}</h3>
          <p>{post.content?.slice(0, 150)}...</p>
        </div>
      ))}
    </div>
  );
}
