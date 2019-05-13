const initState = {
  sights: [
    {
      id: 1,
      title: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It
      has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
    },
    {
      id: 2,
      title: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It
      has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
    },
    {
      id: 3,
      title: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It
      has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
    },
  ]
}

export const sightReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_SIGHT':
      console.log('add sight', action.project);
      return state;
    default: 
      return state;
  }
};
