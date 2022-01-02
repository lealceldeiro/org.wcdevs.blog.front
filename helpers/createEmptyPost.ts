import { Post } from '../types/Post';

export const createEmptyPost = (): Post => {
    return {
        id: '',
        title: '',
        summary: '',
        content: '',
        image: {
            src: '/static/pavo/images/features-icon-1.svg',
            alt: 'alt'
        }
    }
}