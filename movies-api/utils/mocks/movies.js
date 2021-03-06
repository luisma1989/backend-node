// Create in https://www.mockaroo.com/

const moviesMock = [
  {
    id: '72d21065-0c1e-4a68-9325-2ab2ca34bdfc',
    title:
      'Dragon Ball Z: Broly Second Coming (Doragon bôru Z 10: Kiken na futari! Sûpâ senshi wa nemurenai)',
    year: 1998,
    cover: 'http://dummyimage.com/177x249.png/dddddd/000000',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 1914,
    contentRating: 'NC-17',
    source: 'http://dropbox.com/felis/sed/interdum/venenatis.png',
    tags: ['Drama'],
  },
  {
    id: '1d78f21f-e26e-4b74-b99d-f0812d9d7647',
    title: 'William S. Burroughs: A Man Within',
    year: 2011,
    cover: 'http://dummyimage.com/247x246.png/ff4444/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    duration: 1965,
    contentRating: 'PG-13',
    source: 'https://rambler.ru/arcu/libero/rutrum/ac.html',
    tags: ['Crime|Drama'],
  },
  {
    id: '4e75f3ee-6968-46d0-8375-8982e1d12bf3',
    title: 'Battlefield Baseball (Jigoku kôshien)',
    year: 2012,
    cover: 'http://dummyimage.com/202x224.bmp/dddddd/000000',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    duration: 2030,
    contentRating: 'R',
    source: 'https://usnews.com/velit/nec/nisi.jpg',
    tags: ['Action|Adventure|Horror|Sci-Fi|Thriller', 'Romance|Thriller'],
  },
  {
    id: '45c74562-df03-4f55-ad3e-429997584409',
    title: "Blackadder's Christmas Carol",
    year: 1995,
    cover: 'http://dummyimage.com/113x192.jpg/dddddd/000000',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    duration: 2006,
    contentRating: 'R',
    source: 'http://printfriendly.com/nunc/proin/at/turpis/a/pede/posuere.xml',
    tags: ['Crime|Mystery', 'Comedy|Romance|Western', 'Comedy|Horror'],
  },
  {
    id: '9c5ca7de-a1b9-441b-9594-ef1ba8e9dd43',
    title: 'Hamlet 2',
    year: 2012,
    cover: 'http://dummyimage.com/147x134.bmp/dddddd/000000',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    duration: 1890,
    contentRating: 'PG-13',
    source: 'https://ucoz.ru/potenti/cras/in/purus/eu.aspx',
    tags: [
      'Comedy|Documentary',
      'Horror|Sci-Fi',
      'Action|Adventure|Drama|War',
      'Drama',
      'Comedy|Drama',
    ],
  },
  {
    id: 'e8164f25-cf43-4cf4-9f47-e87ffbcf54d2',
    title: 'Out of Towners, The',
    year: 2002,
    cover: 'http://dummyimage.com/210x142.bmp/dddddd/000000',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    duration: 1903,
    contentRating: 'PG',
    source: 'http://jiathis.com/risus/dapibus/augue.png',
    tags: [
      'Documentary|Musical',
      'Documentary',
      'Drama|Fantasy|Mystery',
      'Comedy',
      'Children|Comedy|Crime',
    ],
  },
  {
    id: '50875ec0-970d-4721-b81b-6d7449600a26',
    title: 'Clubland (a.k.a. Introducing the Dwights)',
    year: 2008,
    cover: 'http://dummyimage.com/152x248.png/cc0000/ffffff',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    duration: 1978,
    contentRating: 'PG',
    source: 'http://weebly.com/ante/ipsum/primis/in.js',
    tags: ['Drama', 'Comedy|Drama', 'Crime', 'Comedy|Drama'],
  },
  {
    id: '51fc9153-ad21-4a6b-a6b1-64edef775fe7',
    title: 'Appaloosa, The',
    year: 2008,
    cover: 'http://dummyimage.com/194x160.bmp/ff4444/ffffff',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 1899,
    contentRating: 'PG',
    source: 'http://quantcast.com/non.xml',
    tags: ['Drama', 'Adventure|Children|Fantasy'],
  },
  {
    id: 'ee604d72-df60-407b-88ae-e7717358a83e',
    title: 'Star Trek: Insurrection',
    year: 1999,
    cover: 'http://dummyimage.com/238x113.png/ff4444/ffffff',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    duration: 1938,
    contentRating: 'PG-13',
    source: 'https://vk.com/quis/augue/luctus/tincidunt.xml',
    tags: ['Drama'],
  },
  {
    id: 'c70f5e65-07f9-45ac-a28e-522febcb454a',
    title: 'Battle of Algiers, The (La battaglia di Algeri)',
    year: 1998,
    cover: 'http://dummyimage.com/108x238.jpg/cc0000/ffffff',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    duration: 1911,
    contentRating: 'NC-17',
    source: 'https://symantec.com/faucibus/orci/luctus/et/ultrices.jsp',
    tags: [
      'Mystery|Thriller',
      'Comedy|Drama',
      'Drama|Sci-Fi',
      'Comedy',
      'Comedy|Drama',
    ],
  },
  {
    id: '207bf8c3-68d2-4177-ba0a-ed1560eb177a',
    title: 'Ten Little Indians',
    year: 2003,
    cover: 'http://dummyimage.com/180x118.jpg/dddddd/000000',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    duration: 2040,
    contentRating: 'PG',
    source: 'https://free.fr/et.jsp',
    tags: ['Comedy|Documentary', 'Crime|Drama|Mystery'],
  },
  {
    id: 'd6e22feb-25f2-48c7-8df1-1f4a548f9c4c',
    title: 'Los Bandoleros',
    year: 1995,
    cover: 'http://dummyimage.com/238x144.png/ff4444/ffffff',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 1932,
    contentRating: 'PG-13',
    source: 'http://accuweather.com/at/vulputate/vitae/nisl/aenean.jpg',
    tags: ['Drama', 'Drama', 'Comedy|Crime'],
  },
  {
    id: '9bb6d585-f4b6-42c4-aca7-ed14d016a22e',
    title: 'Unknown Soldier, The (Tuntematon sotilas)',
    year: 2007,
    cover: 'http://dummyimage.com/143x140.bmp/5fa2dd/ffffff',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    duration: 2024,
    contentRating: 'PG',
    source: 'http://example.com/non/mauris/morbi/non.jsp',
    tags: [
      'Drama|War',
      '(no genres listed)',
      'Crime|Drama|Thriller',
      'Drama|Romance',
      'Action',
    ],
  },
  {
    id: '0b3fa3c3-4467-48bc-bb17-200380c5a88a',
    title: 'Phantom',
    year: 1999,
    cover: 'http://dummyimage.com/225x214.jpg/ff4444/ffffff',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    duration: 2007,
    contentRating: 'NC-17',
    source: 'https://webmd.com/curabitur.html',
    tags: ['(no genres listed)', 'Comedy', 'Comedy|Fantasy|Musical'],
  },
  {
    id: '044610ca-b350-46df-a533-4ea27bbf64b0',
    title: 'Hounds, The',
    year: 1992,
    cover: 'http://dummyimage.com/245x104.jpg/ff4444/ffffff',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    duration: 2009,
    contentRating: 'NC-17',
    source: 'http://usa.gov/erat/vestibulum/sed.png',
    tags: ['Action|Adventure|Comedy'],
  },
  {
    id: '5b382888-c5f4-49dc-947a-2e4cd6bd6803',
    title: 'Thomas in Love (Thomas est Amoureux)',
    year: 1995,
    cover: 'http://dummyimage.com/194x172.bmp/ff4444/ffffff',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    duration: 1925,
    contentRating: 'PG-13',
    source: 'https://pen.io/sit/amet/consectetuer/adipiscing/elit.js',
    tags: ['Drama', 'Drama'],
  },
  {
    id: '35e227e7-9f82-4f6c-9ec5-6816058f8ab5',
    title: 'Best Friends',
    year: 2006,
    cover: 'http://dummyimage.com/199x192.jpg/cc0000/ffffff',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 1891,
    contentRating: 'PG',
    source: 'http://about.com/vitae/ipsum/aliquam/non/mauris.json',
    tags: ['Comedy', 'Documentary'],
  },
  {
    id: '06241740-c0e1-45cf-a6d8-fb0e13396923',
    title: 'Jesus Christ Vampire Hunter',
    year: 2009,
    cover: 'http://dummyimage.com/214x169.bmp/cc0000/ffffff',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 1902,
    contentRating: 'PG',
    source: 'http://mysql.com/id.xml',
    tags: [
      'Crime|Drama|Mystery',
      'Comedy',
      'Adventure|Children|Drama',
      'Crime|Drama|Film-Noir',
      'Comedy|Horror|Mystery|Thriller',
    ],
  },
  {
    id: '528983f1-9d0d-449e-8529-450c10b30a0c',
    title: 'Full Frontal',
    year: 1985,
    cover: 'http://dummyimage.com/246x185.jpg/ff4444/ffffff',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    duration: 1897,
    contentRating: 'PG',
    source: 'https://blog.com/magna/bibendum/imperdiet/nullam/orci/pede.jpg',
    tags: ['Adventure|Animation|Romance', 'Action|Animation|Horror'],
  },
  {
    id: '478a7bc7-1886-457d-8611-a94ba5494269',
    title: 'Butterfly on a Wheel (Shattered)',
    year: 2011,
    cover: 'http://dummyimage.com/226x211.bmp/dddddd/000000',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    duration: 1952,
    contentRating: 'PG',
    source: 'https://uiuc.edu/condimentum/curabitur/in.aspx',
    tags: ['Comedy', 'Drama', 'Documentary'],
  },
  {
    id: '8e7f41e1-0fbc-43bf-9b33-83626b3dcfcc',
    title: 'Clean and Sober',
    year: 2012,
    cover: 'http://dummyimage.com/228x203.bmp/ff4444/ffffff',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 2063,
    contentRating: 'G',
    source: 'http://blogger.com/id/lobortis/convallis/tortor/risus/dapibus.jpg',
    tags: ['Thriller', 'Comedy|Drama|Romance', 'Horror'],
  },
  {
    id: 'd11ccfc4-e7c7-46e0-9025-e8ee4109e46f',
    title: 'Black Coal, Thin Ice (Bai ri yan huo)',
    year: 2011,
    cover: 'http://dummyimage.com/111x233.jpg/cc0000/ffffff',
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 1987,
    contentRating: 'NC-17',
    source:
      'http://cisco.com/magnis/dis/parturient/montes/nascetur/ridiculus.js',
    tags: ['Western', 'Action|Crime'],
  },
  {
    id: '9b67266f-f4b0-47fe-89de-0611af5850f8',
    title: 'Magnificent Yankee, The',
    year: 2008,
    cover: 'http://dummyimage.com/187x218.png/5fa2dd/ffffff',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    duration: 2003,
    contentRating: 'G',
    source: 'https://bloglovin.com/in/hac/habitasse/platea/dictumst/etiam.jpg',
    tags: [
      'Drama|Horror|Thriller',
      'Drama|Sci-Fi|Thriller',
      'Comedy|Crime|Drama|War',
    ],
  },
  {
    id: '70b7d5fc-5ad4-4bdd-a866-8305176563a4',
    title: 'Out of It (La carapate)',
    year: 1967,
    cover: 'http://dummyimage.com/180x220.bmp/dddddd/000000',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 1927,
    contentRating: 'G',
    source: 'http://joomla.org/risus/praesent/lectus/vestibulum.js',
    tags: [
      'Crime|Drama|Mystery|Romance|Thriller',
      'Action|Crime|Drama|War',
      'Action|Crime|Drama|Mystery|Thriller',
      'Documentary',
      'Documentary',
    ],
  },
  {
    id: 'f4c72b29-5dbe-4095-9198-88a55de0b615',
    title: "Ditchdigger's Daughters, The",
    year: 2009,
    cover: 'http://dummyimage.com/231x137.png/5fa2dd/ffffff',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    duration: 2045,
    contentRating: 'G',
    source: 'http://nymag.com/quisque/erat/eros/viverra/eget/congue.js',
    tags: ['Drama', 'Drama', 'Drama'],
  },
  {
    id: '585470af-0c6d-4f26-b54f-5318ffad656c',
    title: 'Mountains of the Moon',
    year: 1999,
    cover: 'http://dummyimage.com/220x122.png/dddddd/000000',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 1936,
    contentRating: 'G',
    source: 'https://google.com.hk/sit/amet/eleifend/pede.jpg',
    tags: ['Drama|Romance'],
  },
  {
    id: '87f10999-168b-4efb-aeb2-9e76b6220540',
    title: 'Familia',
    year: 2011,
    cover: 'http://dummyimage.com/197x174.jpg/dddddd/000000',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    duration: 1967,
    contentRating: 'PG-13',
    source: 'http://sina.com.cn/accumsan/tortor/quis/turpis.xml',
    tags: ['Horror', 'Drama', 'Drama'],
  },
  {
    id: '5a79d586-a8bc-454a-ad78-296ad2b9f7b4',
    title: 'Immortel (ad vitam) (Immortal)',
    year: 1996,
    cover: 'http://dummyimage.com/218x180.bmp/cc0000/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 2027,
    contentRating: 'PG-13',
    source: 'https://cornell.edu/ut/volutpat/sapien.jpg',
    tags: ['Comedy', 'Comedy', 'Comedy|Drama', 'Comedy'],
  },
  {
    id: 'c5836188-0b4d-4809-b3f0-50673b274013',
    title: 'The Big Shave',
    year: 2003,
    cover: 'http://dummyimage.com/143x115.png/cc0000/ffffff',
    description:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    duration: 2070,
    contentRating: 'NC-17',
    source: 'https://ucla.edu/ultrices/posuere/cubilia/curae.aspx',
    tags: [
      'Comedy|Romance',
      'Crime|Documentary',
      'Fantasy|Romance',
      'Action|Adventure|Fantasy',
    ],
  },
  {
    id: '6ee57631-4b0e-4c8b-9177-22ea86bc82e0',
    title: 'Vampire Hunter D',
    year: 2002,
    cover: 'http://dummyimage.com/185x152.jpg/ff4444/ffffff',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    duration: 2068,
    contentRating: 'R',
    source: 'http://addthis.com/rutrum/at.json',
    tags: ['Documentary', 'Documentary'],
  },
  {
    id: '591adb54-9d9e-480c-b6e5-531f7795bc93',
    title:
      'Sergeant Körmy and the South Pacific (Vääpeli Körmy ja etelän hetelmät)',
    year: 2011,
    cover: 'http://dummyimage.com/120x147.jpg/ff4444/ffffff',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    duration: 1905,
    contentRating: 'PG-13',
    source: 'http://google.de/gravida.xml',
    tags: ['Documentary', 'Documentary', 'Western', 'Drama', 'Drama'],
  },
  {
    id: '3f3f2b78-433b-43ac-a91e-1995824dfd08',
    title: 'Thunderbird Six',
    year: 1993,
    cover: 'http://dummyimage.com/117x182.jpg/5fa2dd/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    duration: 1949,
    contentRating: 'R',
    source: 'https://trellian.com/neque.aspx',
    tags: ['Action|Adventure|Drama|War', 'Documentary'],
  },
  {
    id: '9a07a609-bbc2-43eb-b356-7887e05d2dae',
    title: 'Tobacco Road',
    year: 1998,
    cover: 'http://dummyimage.com/174x225.bmp/ff4444/ffffff',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    duration: 1900,
    contentRating: 'G',
    source: 'https://mtv.com/risus/dapibus/augue.json',
    tags: ['Drama|Film-Noir|Mystery', 'Drama|Horror'],
  },
  {
    id: 'dc68d230-c8bf-458b-bc4b-8c44333187cf',
    title: 'Byzantium',
    year: 2005,
    cover: 'http://dummyimage.com/232x175.jpg/dddddd/000000',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    duration: 2001,
    contentRating: 'R',
    source: 'http://technorati.com/cras/non/velit/nec.aspx',
    tags: [
      'Action|Horror|Sci-Fi',
      'Action|Crime|Thriller',
      'Adventure|Comedy|Fantasy',
      'Comedy|Romance',
      'Comedy|Crime|Drama',
    ],
  },
  {
    id: 'dfd7a04f-551a-4866-91e9-ad3e9e751b3d',
    title: '47  Ronin (Shijûshichinin no shikaku)',
    year: 1992,
    cover: 'http://dummyimage.com/135x232.png/cc0000/ffffff',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    duration: 2039,
    contentRating: 'R',
    source:
      'https://bing.com/arcu/adipiscing/molestie/hendrerit/at/vulputate.jpg',
    tags: ['Comedy|Sci-Fi'],
  },
  {
    id: 'ce622352-dfc2-4cff-a92c-ab14a495e2f8',
    title: 'Winged Creatures (Fragments)',
    year: 2001,
    cover: 'http://dummyimage.com/163x236.jpg/5fa2dd/ffffff',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    duration: 2027,
    contentRating: 'G',
    source: 'http://eventbrite.com/et.jsp',
    tags: ['Drama', 'Crime|Drama|Thriller'],
  },
  {
    id: 'bf014543-8c25-47a4-96c5-68edbd2c602e',
    title: 'Cronos',
    year: 2005,
    cover: 'http://dummyimage.com/233x196.bmp/cc0000/ffffff',
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    duration: 2068,
    contentRating: 'PG-13',
    source: 'http://naver.com/ac/leo/pellentesque/ultrices.xml',
    tags: [
      'Action|Drama|War',
      'Action|Comedy|Crime|Drama|Horror|Thriller',
      'Drama|Thriller',
      'Drama',
      'Documentary',
    ],
  },
  {
    id: 'f30c45d0-865b-4e4b-bb3f-04eb25efb80f',
    title: 'Changing Habits',
    year: 2007,
    cover: 'http://dummyimage.com/241x169.jpg/5fa2dd/ffffff',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 1907,
    contentRating: 'PG-13',
    source: 'https://nymag.com/proin/at.aspx',
    tags: ['Comedy|Romance', 'Crime|Drama', 'Crime'],
  },
  {
    id: '35e5adb5-bfca-4ce7-b09d-73b9136f0e94',
    title: 'Condo Painting',
    year: 2004,
    cover: 'http://dummyimage.com/110x181.png/ff4444/ffffff',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 2050,
    contentRating: 'R',
    source: 'https://storify.com/nulla/integer.js',
    tags: [
      'Horror|Thriller',
      'Documentary',
      'Comedy',
      'Action|Drama',
      'Western',
    ],
  },
  {
    id: 'c827de5e-666a-4b48-bc32-9dbe85371fa3',
    title: 'Afterwards',
    year: 2013,
    cover: 'http://dummyimage.com/162x144.bmp/cc0000/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 2015,
    contentRating: 'G',
    source: 'https://comsenz.com/integer/pede/justo/lacinia/eget/tincidunt.png',
    tags: [
      'Comedy|Mystery',
      'Comedy|Crime|Mystery|Thriller',
      'Adventure|Children|Drama',
    ],
  },
  {
    id: '70a7df31-4b22-4438-be90-48033657799a',
    title: 'Invincible Iron Man, The',
    year: 2006,
    cover: 'http://dummyimage.com/107x118.bmp/ff4444/ffffff',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    duration: 1977,
    contentRating: 'G',
    source:
      'http://icq.com/ridiculus/mus/vivamus/vestibulum/sagittis/sapien/cum.jsp',
    tags: ['Comedy', 'Drama', 'Comedy|Crime|Drama|Thriller', 'Comedy'],
  },
  {
    id: '84d02a82-75c8-42d3-8587-15066937c493',
    title: 'Measuring the World (Die Vermessung der Welt)',
    year: 1994,
    cover: 'http://dummyimage.com/103x222.png/ff4444/ffffff',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    duration: 1890,
    contentRating: 'G',
    source: 'https://shop-pro.jp/tincidunt/nulla/mollis/molestie/lorem.xml',
    tags: ['Drama', 'Drama|Romance|Sci-Fi'],
  },
  {
    id: '9cfc9099-f834-4e71-a0b2-18e5099bd54b',
    title: 'Dacii',
    year: 2002,
    cover: 'http://dummyimage.com/189x218.png/cc0000/ffffff',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 1963,
    contentRating: 'NC-17',
    source: 'http://china.com.cn/nulla/facilisi/cras.xml',
    tags: ['Documentary|War', 'Action|Crime|Thriller', 'Western', 'Drama'],
  },
  {
    id: '566e90ee-584b-4b9f-9b6c-f8e08504456f',
    title: 'Woyzeck',
    year: 2009,
    cover: 'http://dummyimage.com/170x123.bmp/cc0000/ffffff',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    duration: 1898,
    contentRating: 'PG',
    source: 'https://unc.edu/erat/tortor/sollicitudin/mi.html',
    tags: [
      'Comedy|Crime',
      'Adventure|Crime|Horror|Thriller',
      'Comedy',
      'Action|Comedy|Crime',
    ],
  },
  {
    id: '4aace362-fb04-42c8-a253-a71eb4bae73f',
    title: 'Claudine',
    year: 2012,
    cover: 'http://dummyimage.com/155x154.png/ff4444/ffffff',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    duration: 2027,
    contentRating: 'NC-17',
    source: 'http://sakura.ne.jp/suspendisse/potenti.jsp',
    tags: ['Comedy|Drama', 'Animation|Comedy', 'Documentary', 'Comedy|Drama'],
  },
  {
    id: 'dd27021b-cd4f-4c28-be21-364c7dddecaa',
    title: 'Herbie Goes Bananas',
    year: 1993,
    cover: 'http://dummyimage.com/140x134.png/5fa2dd/ffffff',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    duration: 1942,
    contentRating: 'PG-13',
    source: 'http://amazon.co.uk/elementum/eu.xml',
    tags: ['Thriller'],
  },
  {
    id: '05ea7970-6a53-475b-9473-39a9cb6513a7',
    title: 'Slipstream',
    year: 2011,
    cover: 'http://dummyimage.com/113x182.png/cc0000/ffffff',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    duration: 1950,
    contentRating: 'NC-17',
    source: 'http://mlb.com/tempor/turpis.aspx',
    tags: ['Action|Comedy|Crime|Thriller'],
  },
  {
    id: '4c6cb8ff-aa2f-4ad6-b35a-ba4a9c7d9e72',
    title: 'Salmon Fishing in the Yemen',
    year: 2005,
    cover: 'http://dummyimage.com/236x126.jpg/5fa2dd/ffffff',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 1900,
    contentRating: 'PG-13',
    source: 'https://uol.com.br/vitae/quam/suspendisse/potenti/nullam.xml',
    tags: ['Horror|Sci-Fi|Thriller', 'Comedy|Sci-Fi'],
  },
  {
    id: '2e0c1315-c159-4342-ac67-3963350b7f52',
    title: 'Town & Country',
    year: 1984,
    cover: 'http://dummyimage.com/134x159.png/ff4444/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 2027,
    contentRating: 'PG-13',
    source: 'https://craigslist.org/eu.jpg',
    tags: ['Animation|Children', 'Drama', 'Action|Crime|Thriller'],
  },
  {
    id: '40cb4814-b257-4fcf-bc1c-5c2d5343a299',
    title: 'Boys in the Band, The',
    year: 1992,
    cover: 'http://dummyimage.com/192x217.jpg/5fa2dd/ffffff',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    duration: 1932,
    contentRating: 'G',
    source: 'https://imgur.com/tortor/duis/mattis/egestas.html',
    tags: [
      'Comedy|Drama|Mystery',
      'Comedy',
      'Romance',
      'Documentary',
      'Action|Drama',
    ],
  },
]

module.exports = { moviesMock }
