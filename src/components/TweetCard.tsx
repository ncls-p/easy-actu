const TweetCard = ({ tweet }: { tweet: TwitterData['content']['itemContent']['tweet_results']['result'] }) => {
  const tweetDate = new Date(tweet.core.legacy.created_at).toLocaleDateString();
  const tweetText = tweet.core.legacy.full_text;
  const tweetMedia = tweet.card?.legacy.binding_values.find(value => value.key === 'photo_image_full_size_large')?.value.image_value.url;

  return (
    <div>
      {tweetMedia && <img src={tweetMedia} alt="Tweet media" />}
      <p>{tweetText}</p>
      <p>{tweetDate}</p>
    </div>
  );
};

export default TweetCard;