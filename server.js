import { ApolloServer, gql } from "apollo-server";

const webtoons = [
  {
    id: 1,
    artist_id: 1,
    title: "First",
    volume: 1,
    pages: ["/img_420_420.png", "/img_288_288.png"],
    description:
      "Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO.",
  },
  {
    id: 2,
    artist_id: 1,
    title: "Second",
    volume: 1,
    pages: ["/img_420_420.png", "/img_288_288.png"],
    description: "Description of TANGO Description of TANGO",
  },
  {
    id: 3,
    artist_id: 3,
    title: "Third",
    volume: 1,
    pages: ["/img_420_420.png", "/img_288_288.png"],
    description:
      "Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO.",
  },
  {
    id: 4,
    artist_id: 1,
    title: "Fourth",
    volume: 1,
    pages: ["/img_420_420.png", "/img_288_288.png"],
    description:
      "Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO.",
  },
  {
    id: 5,
    artist_id: 2,
    title: "Daddy's Twenty-Forty-Two",
    volume: 1,
    pages: [
      "/img_420_420.png",
      "/img_288_288.png",
      "/logo_black/logo_360.png",
      "/logo_black/logo_768.png",
    ],
    description:
      "Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO.",
  },
  {
    id: 6,
    artist_id: 1,
    title: "Sixth",
    volume: 1,
    pages: ["/img_420_420.png", "/img_288_288.png"],
    description:
      "Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO.",
  },
  {
    id: 7,
    artist_id: 1,
    title: "Tango",
    volume: 1,
    pages: ["/img_420_420.png", "/img_288_288.png"],
    description:
      "Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO.",
  },
  {
    id: 8,
    artist_id: 2,
    title: "Daddy's Twenty-Forty-Five",
    volume: 1,
    pages: ["/img_420_420.png", "/img_288_288.png"],
    description:
      "Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO.",
  },
  {
    id: 9,
    artist_id: 2,
    title: "Daddy's Twenty-Forty-Five",
    volume: 1,
    pages: ["/img_420_420.png", "/img_288_288.png"],
    desc: "Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO.",
  },
  {
    id: 10,
    artist_id: 1,
    title: "Tenth",
    volume: 1,
    pages: ["/img_420_420.png", "/img_288_288.png"],
    description:
      "Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO.",
  },
  {
    id: 11,
    artist_id: 1,
    title: "Eleventh",
    volume: 1,
    pages: ["/img_420_420.png", "/img_288_288.png"],
    description:
      "Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO.",
  },
  {
    id: 12,
    artist_id: 1,
    title: "Twelfth",
    volume: 1,
    pages: ["/img_420_420.png", "/img_288_288.png"],
    description: "Description of TANGO Description of TANGO",
  },
];

const top = {
  id: 5,
  artist_id: 2,
  title: "Daddy's Twenty-Forty-Two",
  volume: 1,
  pages: ["/img_420_420.png", "/img_288_288.png"],
  description:
    "Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO Description of TANGO. Description of TANGO Description of TANGO Description of TANGO Description Description of TANGO Description of TANGO. ",
};

const NFTs = [
  {
    id: 32,
    webtoon_id: 12,
    name: "Journey 1",
    created_by: "ddkang",
    owned_by: 1,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2022-07-26T09:15:00Z",
    sold: false,
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
    id: 33,
    webtoon_id: 12,
    name: "Journey 2",
    created_by: "ddkang",
    owned_by: 1,
    image_address: "/img_420_420.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 34,
    webtoon_id: 12,
    name: "Journey 3",
    created_by: "ddkang",
    owned_by: 1,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 35,
    webtoon_id: 12,
    name: "Journey 4",
    created_by: "ddkang",
    owned_by: 1,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 36,
    webtoon_id: 12,
    name: "Journey 5",
    created_by: "ddkang",
    owned_by: 2,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 29,
    webtoon_id: 11,
    name: "Journey 1",
    created_by: "ddkang",
    owned_by: 2,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 2,
    drop_timestamp: "2022-07-26T09:15:00Z",
    sold: false,
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
    id: 30,
    webtoon_id: 11,
    name: "Journey 2",
    created_by: "ddkang",
    owned_by: 2,
    image_address: "/img_420_420.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 2,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 31,
    webtoon_id: 11,
    name: "Journey 3",
    created_by: "ddkang",
    owned_by: 2,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 2,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 26,
    webtoon_id: 10,
    name: "Journey 1",
    created_by: "ddkang",
    owned_by: 3,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 3,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 27,
    webtoon_id: 10,
    name: "Journey 2",
    created_by: "ddkang",
    owned_by: 3,
    image_address: "/img_420_420.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 3,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 28,
    webtoon_id: 10,
    name: "Journey 3",
    created_by: "ddkang",
    owned_by: 3,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 3,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 23,
    webtoon_id: 9,
    name: "Journey 1",
    created_by: "Puroon",
    owned_by: 3,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2022-07-01T16:00:00Z",
    sold: false,
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
    id: 24,
    webtoon_id: 9,
    name: "Journey 2",
    created_by: "Puroon",
    owned_by: 3,
    image_address: "/img_420_420.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 25,
    webtoon_id: 9,
    name: "Daddy's Twenty-Forty-Five",
    created_by: "Puroon",
    owned_by: 4,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 20,
    webtoon_id: 8,
    name: "Journey 1",
    created_by: "Puroon",
    owned_by: 4,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 2,
    drop_timestamp: "2022-07-01T16:00:00Z",
    sold: false,
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
    id: 21,
    webtoon_id: 8,
    name: "Journey 2",
    created_by: "Puroon",
    owned_by: 4,
    image_address: "/img_420_420.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 2,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 22,
    webtoon_id: 8,
    name: "Journey 3",
    created_by: "Puroon",
    owned_by: 4,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 2,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 17,
    webtoon_id: 7,
    name: "Journey 1",
    created_by: "ddkang",
    owned_by: 4,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 4,
    drop_timestamp: "2022-07-01T16:00:00Z",
    sold: false,
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
    id: 18,
    webtoon_id: 7,
    name: "Journey 2",
    image_address: "/img_420_420.png",
    created_by: "ddkang",
    owned_by: 4,
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 4,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 14,
    webtoon_id: 6,
    name: "Journey 1",
    created_by: "ddkang",
    owned_by: 5,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 5,
    drop_timestamp: "2022-07-01T16:00:00Z",
    sold: false,
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
    id: 15,
    webtoon_id: 6,
    name: "Journey 2",
    created_by: "ddkang",
    owned_by: 5,
    image_address: "/img_420_420.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 5,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 11,
    webtoon_id: 5,
    name: "Journey 1",
    created_by: "Puroon",
    owned_by: 5,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 3,
    drop_timestamp: "2022-07-26T09:15:00Z",
    sold: false,
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
    id: 12,
    webtoon_id: 5,
    name: "Journey 2",
    created_by: "Puroon",
    owned_by: 5,
    image_address: "/img_420_420.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 3,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 6,
    webtoon_id: 3,
    name: "Journey 1",
    created_by: "chunduck",
    owned_by: 5,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 7,
    webtoon_id: 3,
    name: "Journey 2",
    created_by: "chunduck",
    owned_by: 2,
    image_address: "/img_420_420.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 8,
    webtoon_id: 3,
    name: "Journey 3",
    created_by: "chunduck",
    owned_by: 2,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 3,
    webtoon_id: 2,
    name: "Journey 11",
    created_by: "ddkang",
    owned_by: 2,
    image_address: "/img_420_420.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 4,
    webtoon_id: 2,
    name: "Journey 12",
    created_by: "ddkang",
    owned_by: 2,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 5,
    webtoon_id: 2,
    name: "Journey 13",
    created_by: "ddkang",
    owned_by: 2,
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 1,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 1,
    webtoon_id: 1,
    created_by: "ddkang",
    owned_by: 2,
    name: "Journey 12",
    image_address: "/img_288_288.png",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 2,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 2,
    webtoon_id: 1,
    name: "Journey 11",
    owned_by: 1,
    image_address: "/img_420_420.png",
    created_by: "ddkang",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 2,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 37,
    webtoon_id: 1,
    name: "Journey 11",
    owned_by: 3,
    image_address: "/img_420_420.png",
    created_by: "ddkang",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 3,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 38,
    webtoon_id: 1,
    name: "Journey 11",
    owned_by: 4,
    image_address: "/img_420_420.png",
    created_by: "ddkang",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 4,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 39,
    webtoon_id: 1,
    name: "Journey 11",
    owned_by: 5,
    image_address: "/img_420_420.png",
    created_by: "ddkang",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 5,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 40,
    webtoon_id: 1,
    name: "Journey 11",
    owned_by: 6,
    image_address: "/img_420_420.png",
    created_by: "ddkang",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 6,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 41,
    webtoon_id: 1,
    name: "Journey 11",
    owned_by: 1,
    image_address: "/img_420_420.png",
    created_by: "ddkang",
    description:
      "Description Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT Description of NFT.",
    price: 0.0263,
    edition: 7,
    drop_timestamp: "2021-07-01T16:00:00Z",
    sold: true,
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
    id: 1,
    name: "ddkang",
    description:
      "ddkangddkangddkang ddkangddkangddkangddkang. ddkangddkang ddkangddkang ddkangddkangddkang",
    profile_picture: "/img_420_420.png",
    background_picture: "/Frame_4592_1.png",
    email: "d_d_kang@gmail.com",
    instagram: "d_d_kang",
    twitter: "d_d_kang",
    wallet_address: "0xd05...cDb80",
    opensea: "https://opensea.io/",
    collection: [],
  },
  {
    id: 2,
    name: "Puroon",
    description:
      "ddkangddkangddkang ddkangddkangddkangddkang. ddkangddkang ddkangddkang ddkangddkangddkang",
    profile_picture: "/img_420_420.png",
    background_picture: "/Frame_4592_1.png",
    email: "d_d_kang@gmail.com",
    instagram: "d_d_kang",
    twitter: "d_d_kang",
    wallet_address: "0xd05...cDb80",
    opensea: "https://opensea.io/",
    collection: [],
  },
  {
    id: 3,
    name: "chunduck",
    description:
      "ddkangddkangddkang ddkangddkangddkangddkang. ddkangddkang ddkangddkang ddkangddkangddkang",
    profile_picture: "/img_420_420.png",
    background_picture: "/Frame_4592_1.png",
    email: "d_d_kang@gmail.com",
    instagram: "d_d_kang",
    twitter: "d_d_kang",
    wallet_address: "0xd05...cDb80",
    opensea: "https://opensea.io/",
    collection: [],
  },
  {
    id: 4,
    name: "abc",
    description:
      "ddkangddkangddkang ddkangddkangddkangddkang. ddkangddkang ddkangddkang ddkangddkangddkang",
    profile_picture: "/img_420_420.png",
    background_picture: "/Frame_4592_1.png",
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
    profile_picture: "",
    wallet_address: "0xd05...cDb80",
    name: "rarement",
    id: 1,
  },
  {
    profile_picture: "",
    wallet_address: "0xd05...cDb80",
    name: "rarement",
    id: 2,
  },
  {
    profile_picture: "/img_420_420.png",
    wallet_address: "0xd05...cDb80",
    name: "rarement",
    id: 3,
  },
  {
    profile_picture: "/img_420_420.png",
    wallet_address: "0xd05...cDb80",
    name: "rarement",
    id: 4,
  },
  {
    profile_picture: "/img_420_420.png",
    wallet_address: "0xd05...cDb80",
    name: "rarement",
    id: 5,
  },
  {
    profile_picture: "/img_420_420.png",
    wallet_address: "0xd05...cDb80",
    name: "rarement",
    id: 6,
  },
  {
    profile_picture: "/img_420_420.png",
    wallet_address: "0xd05...cDb80",
    name: "rarement",
    id: 7,
  },
];

const typeDefs = gql`
  type Webtoon {
    id: Int!
    artist_id: Int!
    artist: Artist
    title: String!
    volume: Int!
    pages: [String!]!
    description: String
    NFTs: [NFT]
    timeRemaining: Float
    collectors: [Int]
  }
  type NFT {
    id: Int!
    webtoon_id: Int
    name: String!
    created_by: String!
    owned_by: Int
    user: User
    image_address: String!
    description: String
    price: Float!
    edition: Int
    drop_timestamp: String!
    sold: Boolean!
    opensea: String
    timeRemaining: Float
    total_editions: Int
    editions_title: String
    all_editions: [NFT]
    webtoon: Webtoon
  }
  type Artist {
    id: Int!
    name: String!
    description: String
    profile_picture: String
    background_picture: String
    email: String
    instagram: String
    twitter: String
    wallet_address: String
    opensea: String
    collection: [Int]
    webtoons: [Webtoon]
    NFTs: [NFT]
  }
  type User {
    id: Int!
    profile_picture: String
    name: String
    wallet_address: String
    NFTs: [NFT]
  }
  type Query {
    allWebtoons: [Webtoon!]!
    webtoon(id: Int!): Webtoon
    webtoonTop: Webtoon!
    allNFTs: [NFT]
    NFT(id: Int!): NFT
    allArtists: [Artist]
    artist(name: String!): Artist
    allUsers: [User]
    user(id: Int!): User
  }
  type Mutation {
    postProfilePicture(picture: String!, userId: Int!): String
    postBackgroundPicture(picture: String!, userId: Int!): String
    deleteProfilePicture(picture: String!): Boolean
    deleteBackgroundPicture(picture: String!): Boolean
  }
`;

const resolvers = {
  Query: {
    allWebtoons() {
      return webtoons;
    },
    webtoon(root, { id }) {
      return webtoons.find((webtoon) => webtoon.id === id);
    },
    webtoonTop() {
      return top;
    },
    allNFTs() {
      return NFTs;
    },
    NFT(root, { id }) {
      return NFTs.find((NFT) => NFT.id === id);
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
    user(root, { id }) {
      return users.find((user) => user.id === id);
    },
  },
  Mutation: {
    postProfilePicture(root, { picture, userId }) {},
  },
  NFT: {
    timeRemaining({ sold, drop_timestamp }) {
      if (sold) {
        return null;
      } else return new Date(drop_timestamp).getTime() - new Date().getTime();
    },
    total_editions({ name, created_by }) {
      return NFTs.filter(
        (NFT) => NFT.created_by === created_by && NFT.name === name
      ).length;
    },
    editions_title({ name, created_by }) {
      return name + " by " + created_by;
    },
    user({ owned_by }) {
      return users.find((user) => user.id === owned_by);
    },
    all_editions({ name, created_by }) {
      return NFTs.filter(
        (NFT) => NFT.created_by === created_by && NFT.name === name
      );
    },
    webtoon({ webtoon_id }) {
      return webtoons.find((webtoon) => webtoon.id === webtoon_id);
    },
  },
  Webtoon: {
    artist({ artist_id }) {
      return artists.find((artist) => artist.id === artist_id);
    },
    NFTs({ id }) {
      return NFTs.filter((NFT) => NFT.webtoon_id === id);
    },
    timeRemaining({ id }) {
      if (
        NFTs.filter((NFT) => NFT.webtoon_id === id).filter(
          (NFT) => NFT.sold === false
        ).length > 0
      ) {
        return (
          new Date(
            NFTs.filter((NFT) => NFT.webtoon_id === id).filter(
              (NFT) => NFT.sold === false
            )[0].drop_timestamp
          ).getTime() - new Date().getTime()
        );
      } else return null;
    },
    collectors({ id }) {
      return NFTs.filter((NFT) => NFT.webtoon_id === id).map(
        (NFT) => NFT.owned_by
      );
    },
  },
  Artist: {
    webtoons({ id }) {
      return webtoons.filter((webtoon) => webtoon.artist_id === id);
    },
    NFTs({ name }) {
      return NFTs.filter((NFT) => NFT.created_by === name);
    },
  },
  User: {
    NFTs({ id }) {
      return NFTs.filter((NFT) => NFT.owned_by === id);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Running on ${url}`);
});
