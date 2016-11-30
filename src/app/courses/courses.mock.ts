import { Course } from './courses.model';

export const Courses: Course[] = [
    {
        title: 'Angular2',
        description: 'Learn Angular2 With Amar!',
        rating: 4.9745,
        students: 5981,
        price: 99.95,
        releaseDate: new Date(2016, 3, 1),
        image: 'http://www.clipartkid.com/images/796/batman-logo-clip-art-at-clker-com-vector-clip-art-online-royalty-FZdwXP-clipart.png'
    },
    {
        title: 'TypeScript',
        description: "Learn TypeScript with Amar!",
        rating: 3.959,
        students: 5551,
        price: 69.95,
        releaseDate:  new Date(2015, 12, 11),
        image: 'http://www.pngall.com/wp-content/uploads/2016/06/Superman-Logo-PNG-File.png'
    },
    {
        title: 'RxJs',
        description: "Learn RxJs with Amar!",
        rating: 4.959,
        students: 604,
        price: 63.95,
        releaseDate:  new Date(2015, 9, 7),
        image: null
    }
]