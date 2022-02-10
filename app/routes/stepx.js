import Route from '@ember/routing/route';

export default class StepxRoute extends Route {
  model() {
    return {
      items: [
        {
          id: '1',
          url: 'https://tutorialzine.com/2018/01/what-every-developer-should-know-about-cryptocurrency',
          title: 'What Every Developer Should Know About Cryptocurrency',
          image:
            'https://tutorialzine.com/media/2018/01/everything-you-should-know-cryptocurrency.png',
        },
        {
          id: '2',
          url: 'https://tutorialzine.com/2018/01/15-interesting-javascript-and-css-libraries-for-january-2018',
          title: '15 Interesting JavaScript and CSS Libraries for January 2018',
          image:
            'https://tutorialzine.com/media/2018/01/15-interesting-js-and-css-libraries-2018.png',
        },
        {
          id: '3',
          url: 'https://tutorialzine.com/2017/12/the-best-javascript-and-css-libraries-for-2017',
          title: 'The Best JavaScript and CSS Libraries for 2017',
          image:
            'https://tutorialzine.com/media/2017/12/the-best-javascript-and-css-libraries-for-2017.png',
        },
        {
          id: '4',
          url: 'https://tutorialzine.com/2017/10/getting-started-with-graphql',
          title: 'Getting Started With GraphQL',
          image:
            'https://tutorialzine.com/media/2017/10/getting-started-graphql.png',
        },
        {
          id: '5',
          url: 'https://tutorialzine.com/2017/11/9-free-icon-packs-for-web-developers',
          title: '9 Free Icon Packs For Web Developers',
          image: 'https://tutorialzine.com/media/2017/10/9-free-icon-packs.png',
        },
        {
          id: '6',
          url: 'https://tutorialzine.com/2018/01/10-free-programming-books-you-should-read-in-2018',
          title: '10 Free Programming Books You Should Read in 2018',
          image:
            'https://tutorialzine.com/media/2018/01/10-free-programming-books-you-should-read.png',
        },
        {
          id: '7',
          url: 'https://tutorialzine.com/2016/12/the-languages-frameworks-tools-you-should-learn-in-2017',
          title: 'The Languages and Frameworks You Should Learn in 2017',
          image:
            'https://tutorialzine.com/media/2016/12/the-languages-and-frameworks-you-should-learn-in-2017.png',
        },
      ],
    };
  }

  setupController(controller, model) {
    controller.dispoItems = model.items;
  }
}
