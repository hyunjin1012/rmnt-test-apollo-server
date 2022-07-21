import { ApolloServer, gql } from "apollo-server";

const webtoon_pages = [
  {
    webtoon_page_id: "1",
    webtoon_id: "1",
    page_image: "/img_420_420.png",
    page_number: 1,
  },
  {
    webtoon_page_id: "2",
    webtoon_id: "1",
    page_image: "/img_420_420.png",
    page_number: 2,
  },
  {
    webtoon_page_id: "3",
    webtoon_id: "2",
    page_image: "/img_420_420.png",
    page_number: 1,
  },
  {
    webtoon_page_id: "4",
    webtoon_id: "2",
    page_image: "/img_420_420.png",
    page_number: 2,
  },
];

const webtoons = [
  {
    webtoon_id: "1",
    artist_id: "1",
    title: "First",
    volume: 1,
    cover_image: "/img_420_420.png",
    description:
      "Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO.",
  },
  {
    webtoon_id: "2",
    artist_id: "2",
    title: "Second",
    volume: 1,
    cover_image: "/img_420_420.png",
    description: "Description of TANGO Description of TANGO",
  },
  {
    webtoon_id: "3",
    artist_id: "3",
    title: "Third",
    volume: 1,
    cover_image: "/img_420_420.png",
    description:
      "Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO.",
  },
  {
    webtoon_id: "4",
    artist_id: "1",
    title: "Fourth",
    volume: 1,
    cover_image: "/img_420_420.png",
    description:
      "Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO.",
  },
];

const top = {
  webtoon_id: "4",
  artist_id: "1",
  title: "Fourth",
  volume: 1,
  cover_image: "/img_420_420.png",
  description:
    "Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. ",
};

const NFTs = [
  {
    nft_id: "1",
    webtoon_id: "1",
    name: "Journey 1",
    created_by: "ddkang",
    owned_by: "2",
    image: "/img_420_420.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2022-09-01T16:00:00Z",
    sold_timestamp: null,
    opensea: "https://opensea.io/",
    metadata: "#",
    contract: "#",
    width: 3840,
    height: 2561,
    license:
      "Can be used to display privately, or in commercial and non-commercial settings, or in groups with an unlimited number of participants. The license includes unlimited use and display in virtual or physical galleries, documentaries, and essays by the NFT holder. Provides no rights to create commercial merchandise, commercial distribution, or derivative works.",
    reward:
      "Egg is hidden in a randomly selected timestamp. The winner is revealed only when the song sells out. The winner's NFT is then upgraded to a unique 1/1 chosen by the artist.",
  },
  {
    nft_id: "2",
    webtoon_id: "1",
    name: "Journey 2",
    created_by: "ddkang",
    owned_by: "2",
    image: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold_timestamp: "2021-07-15T16:00:00Z",
    opensea: "https://opensea.io/",
    metadata: "#",
    contract: "#",
    width: 3840,
    height: 2561,
    license:
      "Can be used to display privately, or in commercial and non-commercial settings, or in groups with an unlimited number of participants. The license includes unlimited use and display in virtual or physical galleries, documentaries, and essays by the NFT holder. Provides no rights to create commercial merchandise, commercial distribution, or derivative works.",
    reward:
      "Egg is hidden in a randomly selected timestamp. The winner is revealed only when the song sells out. The winner's NFT is then upgraded to a unique 1/1 chosen by the artist.",
  },

  {
    nft_id: "3",
    webtoon_id: "3",
    created_by: "chunduck",
    owned_by: "2",
    name: "Journey 3",
    image: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold_timestamp: null,
    opensea: "https://opensea.io/",
    metadata: "#",
    contract: "#",
    width: 3840,
    height: 2561,
    license:
      "Can be used to display privately, or in commercial and non-commercial settings, or in groups with an unlimited number of participants. The license includes unlimited use and display in virtual or physical galleries, documentaries, and essays by the NFT holder. Provides no rights to create commercial merchandise, commercial distribution, or derivative works.",
    reward:
      "Egg is hidden in a randomly selected timestamp. The winner is revealed only when the song sells out. The winner's NFT is then upgraded to a unique 1/1 chosen by the artist.",
  },
  {
    nft_id: "4",
    webtoon_id: "4",
    name: "Journey 4",
    owned_by: "3",
    image: "/img_420_420.png",
    created_by: "ddkang",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2022-09-01T16:00:00Z",
    sold_timestamp: null,
    opensea: "https://opensea.io/",
    metadata: "#",
    contract: "#",
    width: 3840,
    height: 2561,
    license:
      "Can be used to display privately, or in commercial and non-commercial settings, or in groups with an unlimited number of participants. The license includes unlimited use and display in virtual or physical galleries, documentaries, and essays by the NFT holder. Provides no rights to create commercial merchandise, commercial distribution, or derivative works.",
    reward:
      "Egg is hidden in a randomly selected timestamp. The winner is revealed only when the song sells out. The winner's NFT is then upgraded to a unique 1/1 chosen by the artist.",
  },
];

const artists = [
  {
    artist_id: "1",
    name: "ddkang",
    description:
      "ddkangddkangddkang ddkangddkangddkangddkang. ddkangddkang ddkangddkang ddkangddkangddkang",
    profile_image: "/img_420_420.png",
    background_image: "/Frame_4592_1.png",
    email: "d_d_kang@gmail.com",
    instagram: "d_d_kang",
    twitter: "d_d_kang",
    wallet_address: "0xd05...cDb80",
    opensea: "https://opensea.io/",
    collection: [],
  },
  {
    artist_id: "2",
    name: "Haeroon",
    description:
      "ddkangddkangddkang ddkangddkangddkangddkang. ddkangddkang ddkangddkang ddkangddkangddkang",
    profile_image: "/img_420_420.png",
    background_image: "/Frame_4592_1.png",
    email: "d_d_kang@gmail.com",
    instagram: "d_d_kang",
    twitter: "d_d_kang",
    wallet_address: "0xd05...cDb80",
    opensea: "https://opensea.io/",
    collection: [],
  },
  {
    artist_id: "3",
    name: "chunduck",
    description:
      "ddkangddkangddkang ddkangddkangddkangddkang. ddkangddkang ddkangddkang ddkangddkangddkang",
    profile_image: "/img_420_420.png",
    background_image: "/Frame_4592_1.png",
    email: "d_d_kang@gmail.com",
    instagram: "d_d_kang",
    twitter: "d_d_kang",
    wallet_address: "0xd05...cDb80",
    opensea: "https://opensea.io/",
    collection: [],
  },
  {
    artist_id: "4",
    name: "abc",
    description:
      "ddkangddkangddkang ddkangddkangddkangddkang. ddkangddkang ddkangddkang ddkangddkangddkang",
    profile_image: "/img_420_420.png",
    background_image: "/Frame_4592_1.png",
    email: "d_d_kang@gmail.com",
    instagram: "d_d_kang",
    twitter: "d_d_kang",
    wallet_address: "0xd05...cDb80",
    opensea: "https://opensea.io/",
    collection: [],
  },
];

const users = [
  {
    profile_image: "",
    wallet_address: "0xd05...cDb80",
    name: "rarement",
    user_id: "1",
  },
  {
    profile_image: "",
    wallet_address: "0xd05...cDb80",
    name: "rarement",
    user_id: "2",
  },
  {
    profile_image: "/img_420_420.png",
    wallet_address: "0xd05...cDb80",
    name: "rarement",
    user_id: "3",
  },
  {
    profile_image: "/img_420_420.png",
    wallet_address: "0xd05...cDb80",
    name: "rarement",
    user_id: "4",
  },
];

const typeDefs = gql`
  type Page {
    webtoon_page_id: String!
    webtoon_id: String!
    page_image: String!
    page_number: Int
  }
  type Webtoon {
    webtoon_id: String!
    artist_id: String!
    artist: Artist
    title: String!
    volume: Int!
    pages: [Page]
    cover_image: String
    description: String
    NFTs: [NFT]
    timeRemaining: Float
    sold: Boolean
  }
  type NFT {
    nft_id: String!
    webtoon_id: String
    name: String!
    created_by: String!
    owned_by: String
    user: User
    image: String!
    description: String
    price: Float!
    edition: Int
    drop_timestamp: String!
    sold_timestamp: String
    opensea: String
    timeRemaining: Float
    webtoon: Webtoon
    metadata: String
    contract: String
    width: Int
    height: Int
    reward: String
    license: String
  }
  type Artist {
    artist_id: String!
    name: String!
    description: String
    profile_image: String
    background_image: String
    email: String
    instagram: String
    twitter: String
    wallet_address: String
    opensea: String
    collection: [String]
    webtoons: [Webtoon]
    NFTs: [NFT]
  }
  type User {
    user_id: String!
    profile_image: String
    name: String
    wallet_address: String
    NFTs: [NFT]
  }
  type Query {
    allWebtoons: [Webtoon!]!
    webtoon(webtoon_id: String!): Webtoon
    webtoonTop: Webtoon!
    allNFTs: [NFT]
    NFT(nft_id: String!): NFT
    allArtists: [Artist]
    artist(name: String!): Artist
    allUsers: [User]
    user(user_id: String!): User
  }
`;

const resolvers = {
  Query: {
    allWebtoons() {
      return webtoons;
    },
    webtoon(root, { webtoon_id }) {
      return webtoons.find((webtoon) => webtoon.webtoon_id === webtoon_id);
    },
    webtoonTop() {
      return top;
    },
    allNFTs() {
      return NFTs;
    },
    NFT(root, { nft_id }) {
      return NFTs.find((NFT) => NFT.nft_id === nft_id);
    },
    allArtists() {
      return artists;
    },
    artist(root, { name }) {
      return artists.find((artist) => artist.name === name);
    },
    allUsers() {
      return users;
    },
    user(root, { user_id }) {
      return users.find((user) => user.user_id === user_id);
    },
  },
  NFT: {
    timeRemaining({ sold_timestamp, drop_timestamp }) {
      if (
        sold_timestamp !== null &&
        sold_timestamp !== undefined &&
        sold_timestamp !== ""
      ) {
        return null;
      } else return new Date(drop_timestamp).getTime() - new Date().getTime();
    },
    user({ owned_by }) {
      return users.find((user) => user.user_id === owned_by);
    },
    webtoon({ webtoon_id }) {
      return webtoons.find((webtoon) => webtoon.webtoon_id === webtoon_id);
    },
  },
  Webtoon: {
    pages({ webtoon_id }) {
      return webtoon_pages.filter((page) => page.webtoon_id === webtoon_id);
    },
    artist({ artist_id }) {
      return artists.find((artist) => artist.artist_id === artist_id);
    },
    NFTs({ webtoon_id }) {
      return NFTs.filter((NFT) => NFT.webtoon_id === webtoon_id);
    },
    timeRemaining({ webtoon_id }) {
      if (
        NFTs.filter((NFT) => NFT.webtoon_id === webtoon_id).filter(
          (NFT) =>
            new Date(NFT.drop_timestamp).getTime() - new Date().getTime() > 0
        ).length > 0
      ) {
        return (
          new Date(
            NFTs.filter((NFT) => NFT.webtoon_id === webtoon_id).filter(
              (NFT) =>
                new Date(NFT.drop_timestamp).getTime() - new Date().getTime() >
                0
            )[0].drop_timestamp
          ).getTime() - new Date().getTime()
        );
      } else return null;
    },
  },
  Artist: {
    webtoons({ artist_id }) {
      return webtoons.filter((webtoon) => webtoon.artist_id === artist_id);
    },
    NFTs({ name }) {
      return NFTs.filter((NFT) => NFT.created_by === name);
    },
  },
  User: {
    NFTs({ user_id }) {
      return NFTs.filter((NFT) => NFT.owned_by === user_id);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Running on ${url}`);
});
