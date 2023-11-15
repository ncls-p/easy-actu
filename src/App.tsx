import React, { useState, useEffect } from 'react';
import InstagramPost from './components/InstagramPost'; // Assurez-vous que ce chemin est correct
// import TweetCard from './components/TweetCard'; // Assurez-vous que ce chemin est correct
import fetchInstagramData from './services/instagramService';
// import fetchTwitterData from './services/twitterService';
import { Card } from 'tamagui'

const App = () => {
  const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
  // const [tweets, setTweets] = useState<TwitterData[]>([]);

  useEffect(() => {
    fetchInstagramData('hugodecrypte').then(data => {
      // trier par date si nécessaire et mettre à jour l'état
      console.log('data instagram');
      console.log(data);
      setInstagramPosts(data);
    });

    // fetchTwitterData('franceinfo').then(data => {
    //   console.log('data twitter');
    //   console.log(data);
    //   // trier par date si nécessaire et mettre à jour l'état
    //   setTweets(data);
    // });
  }, []);

  return (
    <Card>
      <Card.Header />
      <Card.Footer />
      {/* any other components */}
      <Card.Background />
      <div>
        {instagramPosts.map(post => (
          <InstagramPost key={post.node.id} post={post.node} />
        ))}

        {/* {tweets.map(tweet => (
        <TweetCard key={tweet.content.entryId} tweet={tweet.content.itemContent.tweet_results.result} />
      ))} */}
      </div>
    </Card>
  );
}
export default App;
