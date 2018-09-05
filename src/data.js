import ContestInfo from './ContestInfo';

/*
[component: ContestInfo]
problems が undefined である場合 UpcomingContest として扱われる
その場合, contest_link_index,
*/

const Data = {
  contest: [
    // template for onsite page
    // {
    //   component: ContestInfo,
    //   suffix: '2018',
    //   date: '2018-09-30',
    //   contest_page: "https://beta.atcoder.jp/contests/kupc2018/",
    //   atnd_tokyo: "",
    //   atnd_kyoto: "",
    //   staffs: ['加藤 剛', '齋藤 大聖', '眞田 嵩大', '曽根 大雅', '西川 剛史', '松本 和彦', '脇坂 遼'],
    // },
    {
      component: ContestInfo,
      suffix: '2018',
      date: '2018-09-30',
      url_open_contest: "https://beta.atcoder.jp/contests/kupc2018/",
      url_atnd_tokyo: "https://atnd.org/events/100119",
      url_atnd_kyoto: "https://atnd.org/events/100105",
      staffs: ['加藤 剛', '齋藤 大聖', '眞田 嵩大', '曽根 大雅', '西川 剛史', '松本 和彦', '脇坂 遼'],
    },
    {
      component: ContestInfo,
      suffix: '2017',
      date: '2017-10-01',
      links: [
        { title: "コンテストページ", url: "http://kupc2017.contest.atcoder.jp/" },
        { title: "ジャッジデータ", url: "https://drive.google.com/open?id=1RY-LWXIxZyXS-X1ZqHn5IBdxSWlh6mS4" },
      ],
      problems: [
        { id: 'A', title: 'Credits' },
        { id: 'B', title: 'Camphor Tree' },
        { id: 'C', title: 'Best Password' },
        { id: 'D', title: 'Sanmoku' },
        { id: 'E', title: 'Treasure Hunt' },
        { id: 'F', title: '575' },
        { id: 'G', title: 'encode/decode 2017' },
        { id: 'H', title: 'Make a Potion' },
        { id: 'I', title: 'Activate It!!' },
        { id: 'J', title: 'Paint Red and Make Graph' },
        { id: 'K', title: 'Xor Summation Pattern' },
        { id: 'L', title: 'Coin Game 2017' },
      ],
      staffs: ['天野光陽', '今西諒文', '加藤剛', '齋藤大聖', '佐藤竜馬', '眞田嵩大', '瀧瀬和樹', '中野優', '西川剛史'],
    },
    {
      component: ContestInfo,
      suffix: '2016',
      date: '2016-10-02',
      links: [
        { title: "コンテストページ", url: "http://kupc2016.contest.atcoder.jp/" },
      ],
      problems: [
        { id: 'A', title: 'バリケード / A Barricade' },
        { id: 'B', title: '作問委員会 / Problem Committee' },
        { id: 'C', title: 'クッキー☆増殖装置 / Cookie Breeding Mach' },
        { id: 'D', title: '長い黒板 / Long Blackboard' },
        { id: 'E', title: '柵 / Fences' },
        { id: 'F', title: '早解き / Speed Solving' },
        { id: 'G', title: '試験 / Exam' },
        { id: 'H', title: '壁壁壁壁壁壁壁 / WAAAAAAAAAAAAALL' },
        { id: 'I', title: 'ティッシュ配り / Handing out leaflets' },
        { id: 'J', title: '色塗り / Coloring' },
        { id: 'K', title: '百目おばけ / Hundred Eyes Monster' },
      ],
      staffs: ['天野光陽', '今西諒文', '桐谷頼史', '佐藤竜馬', '眞田嵩大', '瀧瀬和樹', '中野優', '西川剛史'],
    },
    {
      component: ContestInfo,
      suffix: '2015',
      date: '2015-10-24',
      links: [
        { title: "コンテストページ", url: "http://kupc2015.contest.atcoder.jp/" },
      ],
      problems: [
        { id: 'A', title: '東京都' },
        { id: 'B', title: 'GUARDIANS' },
        { id: 'C', title: '最短経路' },
        { id: 'D', title: '高橋君の旅行' },
        { id: 'E', title: 'マッサージチェア2015' },
        { id: 'F', title: '逆ポーランド記法' },
        { id: 'G', title: 'ケンドー' },
        { id: 'H', title: 'Bit Count' },
        { id: 'I', title: 'ハウスシャッフル' },
        { id: 'J', title: 'MODクエリ' },
        { id: 'K', title: 'SOULBLOCK' },
        { id: 'L', title: 'コインゲーム' },
      ],
      staffs: ['今西諒文', '江原昌吾', '岡智洋', '西村翔一', '瀧瀬和樹'],
    },
    {
      component: ContestInfo,
      suffix: '2014',
      date: '2014-07-05',
      links: [
        { title: "コンテストページ", url: "http://kupc2014.contest.atcoder.jp/" },
        { title: "ジャッジデータ", url: 'https://drive.google.com/file/d/0B_oiVeAwII2NSHc2X2Z6Yml4b0k/edit?usp=sharing' },
      ],
      problems: [
        { id: 'A', title: 'マッサージチェア' },
        { id: 'B', title: '数当てゲーム' },
        { id: 'C', title: '占い' },
        { id: 'D', title: 'ハミング' },
        { id: 'E', title: '何しちゃおっかな？' },
        { id: 'F', title: 'テレパシー' },
        { id: 'G', title: 'Darkroom' },
        { id: 'H', title: '自転車走' },
        { id: 'I', title: 'Rain' },
        { id: 'J', title: 'カード' },
        { id: 'K', title: '弱点' },
        { id: 'L', title: 'べき乗数' },
      ],
      staffs: ['今西諒文', '江原昌吾', '岡智洋', '楠本充', '小浜翔太郎', '田村和範', '西村翔一', '花田裕一朗', '広瀬稔', '森槙悟'],
    },
    {
      component: ContestInfo,
      suffix: '2013',
      date: '2013-07-06',
      links: [
        { title: "コンテストページ", url: "https://kupc2013.contest.atcoder.jp/" },
        { title: "ジャッジデータ", url: 'https://docs.google.com/file/d/0B_oiVeAwII2NVnFhd2RuTzN4Z0U/edit?usp=sharing' },
      ],
      problems: [
        { id: 'A', title: '旧総合研究７号館' },
        { id: 'B', title: 'ライオン' },
        { id: 'C', title: 'チョコレート' },
        { id: 'D', title: 'カーペット' },
        { id: 'E', title: 'すごろく' },
        { id: 'F', title: '７歳教' },
        { id: 'G', title: '自由研究' },
        { id: 'H', title: 'N and K' },
        { id: 'I', title: 'σ' },
        { id: 'J', title: 'タイル置き' },
        { id: 'K', title: 'encode/decode' },
      ],
      staffs: ['今西諒文', '岡智洋', '楠本充', '小浜翔太郎', '田村和範', '花田裕一朗', '広瀬稔', '森槙悟'],
    },
    {
      component: ContestInfo,
      suffix: '2012',
      date: '2012-07-01',
      links: [
        { title: "練習セッション", url: "http://kupc2012pr.contest.atcoder.jp/" },
        { title: "コンテスト本番", url: "http://kupc2012.contest.atcoder.jp/" },
        { title: "ジャッジデータ", url: 'https://docs.google.com/file/d/0B_oiVeAwII2NZkJJUHdMQ0Q0eHM/edit?usp=sharing' },
      ],
      problems: [
        { id: 'A', title: 'アルデンテ' },
        { id: 'B', title: '簡易オセロ' },
        { id: 'C', title: 'ソーシャル' },
        { id: 'D', title: '権力' },
        { id: 'E', title: 'じゃんけん' },
        { id: 'F', title: 'Acceleration of Network' },
        { id: 'G', title: '村' },
        { id: 'H', title: '植林' },
        { id: 'I', title: '宝探し' },
        { id: 'J', title: '刺身' },
        { id: 'K', title: 'XOR回廊' },
      ],
      staffs: ['今城健太郎', '楠本充', '小浜翔太郎', '田村和範', '花田裕一朗', '森槙悟'],
    },
    {
      component: ContestInfo,
      suffix: '2011',
      date: '2011-08-06',
      links: [
        // { title: "練習セッション", url: "http://old.atcoder.jp/contest/detail/16" },
        // { title: "コンテスト本番", url: "http://old.atcoder.jp/contest/17/detail" },
        { title: "ジャッジデータ", url: "https://docs.google.com/file/d/0B_oiVeAwII2NclNNUGZfc2hyTTA/edit?usp=sharing" },
      ],
      problems: [
        { id: 'A', title: 'KUPC' },
        { id: 'B', title: '蝉' },
        { id: 'C', title: 'しりとり' },
        { id: 'D', title: '列の構成' },
        { id: 'E', title: 'Fox Number' },
        { id: 'F', title: 'ボ～ル' },
        { id: 'G', title: 'XOR 回路' },
        { id: 'H', title: 'あばれうなぎ' },
        { id: 'I', title: '山' },
        { id: 'J', title: 'Mod 3 Knights Out' },
      ],
      staffs: ['今城健太郎', '楠本充', '西田尚平', '平澤恭治', '森槙悟', '吉田悠一'],
    },
  ],
  contact: {
    mail: 'kupcstaffs@gmail.com',
    twitter: '@kupc_official',
  },
};

export default Data;
