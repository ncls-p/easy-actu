// Interface pour un post Instagram
interface InstagramPost {
  node: {
    id: string;
    taken_at_timestamp: number; // date du post
    edge_media_to_caption: { edges: [{ node: { text: string } }] }; // texte du post
    display_url: string; // URL du média principal
    // autres champs pertinents...
  };
}

// Interface pour un tweet
interface TwitterData {
  content: {
    entryId: string;
    itemContent: {
      tweet_results: {
        result: {
          core: {
            legacy: {
              created_at: string; // date du tweet
              full_text: string; // texte du tweet
            };
          };
          card: {
            legacy: {
              binding_values: Array<{
                key: string;
                value: { image_value: { url: string } }; // URL du média
              }>;
            };
          };
        };
      };
    };
  };
}
