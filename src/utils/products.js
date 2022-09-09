const products = [
    {
      id: 30,
      name: "Shampoo Almendras 5lts",
      stock: 20,
      cost: 3000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1500,
      image: [
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/887/684/products/shampoo-aurill-almendras-bidon1-1569de81db1c4adc9915614044257784-1024-1024.jpg"
      ],
      sales: 0,
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Hair Care",
        id: 9
      },
      brand: {
        id: 95,
        name: "Auril"
      },

    },
    {
      id: 29,
      name: "Acondicionador Yummy",
      stock: 20,
      cost:3500,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1500,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_2X_792668-MLA45676659877_042021-F.webp"
      ],
      sales: 0,
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Hair Care",
        id: 9
      },
      brand: {
        id: 95,
        name: "Yummy"
      },
    },
    {
      id: 76,
      name: "Oro  Liquido",
      stock: 10,
      cost: 1000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 750,
      image: [
        "https://scontent.faep8-2.fna.fbcdn.net/v/t1.6435-9/67318777_1770617529750882_8717819528161001472_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jxrz7PPpH1MAX_yeQ8x&_nc_ht=scontent.faep8-2.fna&oh=00_AT-ibzh4Y0KBeGg9eHy5nQGxw_lsyZzEvhDyVc-wn81Zow&oe=633C7CCE"
      ],
      sales: 0,
      categoryId: 9,
      brandId: 10,
      packingId: null,
      category: {
        name: "Hair Care",
        id: 9
      },
      brand: {
        id: 10,
        name: "Oro Liquido Sasso"
      },
    
    },
    {
      id: 170,
      name: "Agua Micelar",
      stock: 25,
      cost: 950,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 750,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_962021-MLA50513112551_062022-O.webp"
      ],
      sales: 0,
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Skin Care",
        id: 1
      },
      brand: {
        id: 10,
        name: "Agua Micelar"
      },
      
    },
    {
      id: 233,
      name: "Crema Facial ",
      stock: 30,
      cost: 800,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 750,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_2X_949631-MLA49421603633_032022-F.webp"
      ],
      sales: 0,
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Skin Care",
        id: 1
      },
      brand: {
        id: 10,
        name: "Crema Facial"
      },

    },
    {
      id: 139,
      name: "Toallitas Desmaquillantes",
      stock: 100,
      cost: 500,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 750,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_2X_800216-MLA31095681723_062019-F.webp"
      ],
      sales: 0,
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Skin Care",
        id: 1
      },
      brand: {
        id: 16,
        name: "Toallitas Desmaquillantes"
      },

    },

    {
      id: 135,
      name: "Altos del Plata Malbec 750 ml",
      stock: 10,
      cost: 8000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 750,
      image: [
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/887/684/products/753678-mla44164702859_112020-f-a915138303e8354dae16064225830256-1024-1024.jpg"
      ],
      sales: 0,
      categoryId: 5,
      brandId: 16,
      packingId: null,
      category: {
        name: "Herramientas",
        id: 5
      },
      brand: {
        id: 16,
        name: "Secador Teknikpro"
      },
    
    },
    {
      id: 31,
      name: "Tijera Laser Mundial",
      stock: 15,
      cost: 5000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 700,
      image: [
        "https://d3ugyf2ht6aenh.cloudfront.net/stores/887/684/products/mundial-filo-laser-5-pulgadas11-dc17830fbfc732828716389042901352-640-0.jpg"
      ],
      sales: 0,
      categoryId: 5,
      brandId: 17,
      packingId: null,
      category: {
        name: "Herramientas",
        id: 5
      },
      brand: {
        id: 17,
        name: "Tijera laser - Mundial"
      },

    }
  ];

  module.exports = {
    products,
  }