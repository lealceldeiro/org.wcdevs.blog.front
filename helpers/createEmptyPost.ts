import { CreateOrUpdatePostRequest } from '../types';

export const createEmptyPost = (): CreateOrUpdatePostRequest => {
    return {
        slug: '',
        title: '',
        body: '',
        excerpt: '',
    }
}