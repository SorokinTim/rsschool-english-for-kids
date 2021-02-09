import images from './images-importer';
import * as constants from './constants';

const APP_STATE = {
  categories: [
    {
      pageId: constants.PAGE_ID_ACTIONS_A,
      categoryName: 'Action (set A)',
      circleImage: images['action-a.jpg'].default,
      coverImageAnimated: images['action-a-animated.gif'].default,
      coverImageStatic: images['action-a-static.jpg'].default,
      cards: [
        {
          cardEngTitle: 'Cry',
          cardRusTitle: 'Плакать',
          cardImage: images['action-a/cry.jpg'].default,
        },
        {
          cardEngTitle: 'Dance',
          cardRusTitle: 'Танцевать',
          cardImage: images['action-a/dance.jpg'].default,
        },
        {
          cardEngTitle: 'Dive',
          cardRusTitle: 'Нырять',
          cardImage: images['action-a/dive.jpg'].default,
        },
        {
          cardEngTitle: 'Draw',
          cardRusTitle: 'Рисовать',
          cardImage: images['action-a/draw.jpg'].default,
        },
        {
          cardEngTitle: 'Fish',
          cardRusTitle: 'Рыбачить',
          cardImage: images['action-a/fish.jpg'].default,
        },
        {
          cardEngTitle: 'Fly',
          cardRusTitle: 'Летать',
          cardImage: images['action-a/fly.jpg'].default,
        },
        {
          cardEngTitle: 'Hug',
          cardRusTitle: 'Обнимать',
          cardImage: images['action-a/hug.jpg'].default,
        },
        {
          cardEngTitle: 'Jump',
          cardRusTitle: 'Прыгать',
          cardImage: images['action-a/jump.jpg'].default,
        },
      ],
    },
    {
      pageId: constants.PAGE_ID_ACTIONS_B,
      categoryName: 'Action (set B)',
      circleImage: images['action-b.jpg'].default,
      coverImageAnimated: images['action-b-animated.gif'].default,
      coverImageStatic: images['action-b-static.jpg'].default,
      cards: [
        {
          cardEngTitle: 'Open',
          cardRusTitle: 'Открывать',
          cardImage: images['action-b/open.jpg'].default,
        },
        {
          cardEngTitle: 'Play',
          cardRusTitle: 'Играть',
          cardImage: images['action-b/play.jpg'].default,
        },
        {
          cardEngTitle: 'Point',
          cardRusTitle: 'Указывать',
          cardImage: images['action-b/point.jpg'].default,
        },
        {
          cardEngTitle: 'Ride',
          cardRusTitle: 'Ездить',
          cardImage: images['action-b/ride.jpg'].default,
        },
        {
          cardEngTitle: 'Run',
          cardRusTitle: 'Бегать',
          cardImage: images['action-b/run.jpg'].default,
        },
        {
          cardEngTitle: 'Sing',
          cardRusTitle: 'Петь',
          cardImage: images['action-b/sing.jpg'].default,
        },
        {
          cardEngTitle: 'Skip',
          cardRusTitle: 'Пропускать, прыгать',
          cardImage: images['action-b/skip.jpg'].default,
        },
        {
          cardEngTitle: 'Swim',
          cardRusTitle: 'Плавать',
          cardImage: images['action-b/swim.jpg'].default,
        },
      ],
    },
    {
      pageId: constants.PAGE_ID_ANIMALS_A,
      categoryName: 'Animals (set A)',
      circleImage: images['animals-a.jpg'].default,
      coverImageAnimated: images['animals-a-animated.gif'].default,
      coverImageStatic: images['animals-a-static.jpg'].default,
      cards: [
        {
          cardEngTitle: 'Cat',
          cardRusTitle: 'Кот',
          cardImage: images['animals-a/cat.jpg'].default,
        },
        {
          cardEngTitle: 'Chick',
          cardRusTitle: 'Цыплёнок',
          cardImage: images['animals-a/chick.jpg'].default,
        },
        {
          cardEngTitle: 'Chicken',
          cardRusTitle: 'Курица',
          cardImage: images['animals-a/chicken.jpg'].default,
        },
        {
          cardEngTitle: 'Dog',
          cardRusTitle: 'Собака',
          cardImage: images['animals-a/dog.jpg'].default,
        },
        {
          cardEngTitle: 'Horse',
          cardRusTitle: 'Лошадь',
          cardImage: images['animals-a/horse.jpg'].default,
        },
        {
          cardEngTitle: 'Pig',
          cardRusTitle: 'Свинья',
          cardImage: images['animals-a/pig.jpg'].default,
        },
        {
          cardEngTitle: 'Rabbit',
          cardRusTitle: 'Кролик',
          cardImage: images['animals-a/rabbit.jpg'].default,
        },
        {
          cardEngTitle: 'Sheep',
          cardRusTitle: 'Овца',
          cardImage: images['animals-a/sheep.jpg'].default,
        },
      ],
    },
    {
      pageId: constants.PAGE_ID_ANIMALS_B,
      categoryName: 'Animals (set B)',
      circleImage: images['animals-b.jpg'].default,
      coverImageAnimated: images['animals-b-animated.gif'].default,
      coverImageStatic: images['animals-b-static.jpg'].default,
      cards: [
        {
          cardEngTitle: 'Bird',
          cardRusTitle: 'Птица',
          cardImage: images['animals-b/bird.jpg'].default,
        },
        {
          cardEngTitle: 'Fish',
          cardRusTitle: 'Рыба',
          cardImage: images['animals-b/fish.jpg'].default,
        },
        {
          cardEngTitle: 'Frog',
          cardRusTitle: 'Лягушка',
          cardImage: images['animals-b/frog.jpg'].default,
        },
        {
          cardEngTitle: 'Giraffe',
          cardRusTitle: 'Жираф',
          cardImage: images['animals-b/giraffe.jpg'].default,
        },
        {
          cardEngTitle: 'Lion',
          cardRusTitle: 'Лев',
          cardImage: images['animals-b/lion.jpg'].default,
        },
        {
          cardEngTitle: 'Mouse',
          cardRusTitle: 'Мышь',
          cardImage: images['animals-b/mouse.jpg'].default,
        },
        {
          cardEngTitle: 'Turtle',
          cardRusTitle: 'Черепаха',
          cardImage: images['animals-b/turtle.jpg'].default,
        },
        {
          cardEngTitle: 'Dolphin',
          cardRusTitle: 'Дельфин',
          cardImage: images['animals-b/dolphin.jpg'].default,
        },
      ],
    },
    {
      pageId: constants.PAGE_ID_CLOTHES,
      categoryName: 'Clothes',
      circleImage: images['clothes-a.jpg'].default,
      coverImageAnimated: images['clothes-a-animated.gif'].default,
      coverImageStatic: images['clothes-a-static.jpg'].default,
      cards: [
        {
          cardEngTitle: 'Skirt',
          cardRusTitle: 'Юбка',
          cardImage: images['clothes/skirt.jpg'].default,
        },
        {
          cardEngTitle: 'Pants',
          cardRusTitle: 'Брюки',
          cardImage: images['clothes/pants.jpg'].default,
        },
        {
          cardEngTitle: 'Blouse',
          cardRusTitle: 'Блузка',
          cardImage: images['clothes/blouse.jpg'].default,
        },
        {
          cardEngTitle: 'Dress',
          cardRusTitle: 'Платье',
          cardImage: images['clothes/dress.jpg'].default,
        },
        {
          cardEngTitle: 'Boots',
          cardRusTitle: 'Ботинки',
          cardImage: images['clothes/boots.jpg'].default,
        },
        {
          cardEngTitle: 'Shirt',
          cardRusTitle: 'Рубашка',
          cardImage: images['clothes/shirt.jpg'].default,
        },
        {
          cardEngTitle: 'Coat',
          cardRusTitle: 'Пальто',
          cardImage: images['clothes/coat.jpg'].default,
        },
        {
          cardEngTitle: 'Shoes',
          cardRusTitle: 'Туфли',
          cardImage: images['clothes/shoes.jpg'].default,
        },
      ],
    },
    {
      pageId: constants.PAGE_ID_EMOTIONS,
      categoryName: 'Emotions',
      circleImage: images['emotions-a.jpg'].default,
      coverImageAnimated: images['emotions-a-animated.gif'].default,
      coverImageStatic: images['emotions-a-static.jpg'].default,
      cards: [
        {
          cardEngTitle: 'Sad',
          cardRusTitle: 'Грустный',
          cardImage: images['emotions/sad.jpg'].default,
        },
        {
          cardEngTitle: 'Angry',
          cardRusTitle: 'Злой',
          cardImage: images['emotions/angry.jpg'].default,
        },
        {
          cardEngTitle: 'Happy',
          cardRusTitle: 'Счастливый',
          cardImage: images['emotions/happy.jpg'].default,
        },
        {
          cardEngTitle: 'Tired',
          cardRusTitle: 'Уставший',
          cardImage: images['emotions/tired.jpg'].default,
        },
        {
          cardEngTitle: 'Surprised',
          cardRusTitle: 'Удивлённый',
          cardImage: images['emotions/surprised.jpg'].default,
        },
        {
          cardEngTitle: 'Scared',
          cardRusTitle: 'Напуганный',
          cardImage: images['emotions/scared.jpg'].default,
        },
        {
          cardEngTitle: 'Smile',
          cardRusTitle: 'Улыбка',
          cardImage: images['emotions/smile.jpg'].default,
        },
        {
          cardEngTitle: 'Laugh',
          cardRusTitle: 'Смех',
          cardImage: images['emotions/laugh.jpg'].default,
        },
      ],
    },
    {
      pageId: constants.PAGE_ID_ADJECTIVES,
      categoryName: 'Adjective',
      circleImage: images['adjective-a.jpg'].default,
      coverImageAnimated: images['adjective-a-animated.gif'].default,
      coverImageStatic: images['adjective-a-static.jpg'].default,
      cards: [
        {
          cardEngTitle: 'Big',
          cardRusTitle: 'Большой',
          cardImage: images['adjective/big.jpg'].default,
        },
        {
          cardEngTitle: 'Small',
          cardRusTitle: 'Маленький',
          cardImage: images['adjective/small.jpg'].default,
        },
        {
          cardEngTitle: 'Fast',
          cardRusTitle: 'Быстрый',
          cardImage: images['adjective/fast.jpg'].default,
        },
        {
          cardEngTitle: 'Slow',
          cardRusTitle: 'Медленный',
          cardImage: images['adjective/slow.jpg'].default,
        },
        {
          cardEngTitle: 'Friendly',
          cardRusTitle: 'Дружелюбный',
          cardImage: images['adjective/friendly.jpg'].default,
        },
        {
          cardEngTitle: 'Unfriendly',
          cardRusTitle: 'Недружелюбный',
          cardImage: images['adjective/unfriendly.jpg'].default,
        },
        {
          cardEngTitle: 'Young',
          cardRusTitle: 'Молодой',
          cardImage: images['adjective/young.jpg'].default,
        },
        {
          cardEngTitle: 'Old',
          cardRusTitle: 'Старый',
          cardImage: images['adjective/old.jpg'].default,
        },
      ],
    },
    {
      pageId: constants.PAGE_ID_ACTIONS_C,
      categoryName: 'Action (set C)',
      circleImage: images['action-c.jpg'].default,
      coverImageAnimated: images['action-c-animated.gif'].default,
      coverImageStatic: images['action-c-static.jpg'].default,
      cards: [
        {
          cardEngTitle: 'Argue',
          cardRusTitle: 'Спорить',
          cardImage: images['action-c/argue.jpg'].default,
        },
        {
          cardEngTitle: 'Build',
          cardRusTitle: 'Строить',
          cardImage: images['action-c/build.jpg'].default,
        },
        {
          cardEngTitle: 'Carry',
          cardRusTitle: 'Нести',
          cardImage: images['action-c/carry.jpg'].default,
        },
        {
          cardEngTitle: 'Catch',
          cardRusTitle: 'Ловить',
          cardImage: images['action-c/catch.jpg'].default,
        },
        {
          cardEngTitle: 'Drive',
          cardRusTitle: 'Водить машину',
          cardImage: images['action-c/drive.jpg'].default,
        },
        {
          cardEngTitle: 'Drop',
          cardRusTitle: 'Падать',
          cardImage: images['action-c/drop.jpg'].default,
        },
        {
          cardEngTitle: 'Push',
          cardRusTitle: 'Толкать',
          cardImage: images['action-c/push.jpg'].default,
        },
        {
          cardEngTitle: 'Walk',
          cardRusTitle: 'Ходить',
          cardImage: images['action-c/walk.jpg'].default,
        },
      ],
    },
  ],
  menu: [
    { iconName: 'home', title: 'Home page', id: constants.PAGE_ID_HOME },
    { iconName: 'accessibility', title: 'Actions (Set A)', id: constants.PAGE_ID_ACTIONS_A },
    { iconName: 'accessibility_new', title: 'Actions (Set B)', id: constants.PAGE_ID_ACTIONS_B },
    { iconName: 'pets', title: 'Animals (Set A)', id: constants.PAGE_ID_ANIMALS_A },
    { iconName: 'emoji_nature', title: 'Animals (Set B)', id: constants.PAGE_ID_ANIMALS_B },
    { iconName: 'checkroom', title: 'Clothes', id: constants.PAGE_ID_CLOTHES },
    { iconName: 'tag_faces', title: 'Emotions', id: constants.PAGE_ID_EMOTIONS },
    { iconName: 'create', title: 'Adjectives', id: constants.PAGE_ID_ADJECTIVES },
    { iconName: 'accessible_forward', title: 'Actions (Set C)', id: constants.PAGE_ID_ACTIONS_C },
    { iconName: 'bar_chart', title: 'Statistics', id: constants.PAGE_ID_STATISTICS },
  ],
  playMode: false,
  currentPath: constants.PAGE_ID_HOME,
};

export default APP_STATE;
