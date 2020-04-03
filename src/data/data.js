import moment from 'moment';
import uuidv1 from 'uuid/v1';

const data = [
  {
    id: uuidv1(),
    topic: 'LEARN',
    title: 'Học flutter',
    detail: 'Học flutter cơ bản thông qua Youtube và khoá học miễn phí trên Udemy',
    done: false,
    date: moment(),
  },
  {
    id: uuidv1(),
    topic: 'LEARN',
    title: 'Học animation',
    detail: 'Học animation trong react native trên youtube',
    done: false,
    date: moment(),
  },
  {
    id: uuidv1(),
    topic: 'WORK',
    title: 'Viết app todo list',
    detail: 'Viết app todo list trên expo sử dụng listview',
    done: true,
    date: moment(),
  },
  // {
  //   name: 'Philipp Plein',
  //   amount: '$1,245.17',
  //   date: moment(),
  //   isReceived: true,
  //   items: [
  //     {
  //       name: 'Lather moto jacket',
  //       amount: '$8,564.00',
  //     },
  //     {
  //       name: 'Lorem ipsum',
  //       amount: '$358.00',
  //     },
  //     {
  //       name: 'Enim ad minim veniam',
  //       amount: '$1,355.00',
  //     },
  //     {
  //       name: 'Dolor in reprehenderit',
  //       amount: '$2,333.12',
  //     },
  //   ],
  // },
];

export default data;
