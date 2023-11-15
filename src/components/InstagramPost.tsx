const InstagramPost = ({ post }: { post: InstagramPost['node'] }) => {
  const postDate = new Date(post.taken_at_timestamp * 1000).toLocaleDateString();
  const postText = post.edge_media_to_caption.edges[0]?.node.text;
  const postMedia = post.display_url;

  return (
    <div>
      <img src={postMedia} alt="Post media" />
      <p>{postText}</p>
      <p>{postDate}</p>
    </div>
  );
};

export default InstagramPost;