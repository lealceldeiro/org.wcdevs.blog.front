import { CreateOrUpdatePostRequest } from '../types/index';

export const createEmptyPost = (): CreateOrUpdatePostRequest => {
    return {
        slug: '',
        title: '',
        body: '',
        excerpt: '',
    }
}