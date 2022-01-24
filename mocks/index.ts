import { Post, Comment } from '../types';
/**
 * Code to generate the mocks at 
 [
  '{{repeat(5)}}',
  {
   
        slug: '{{guid()}}',
     title: function (tags) {
      return 'This is my blog - ' + this.slug;
    },
        excerpt: '{{lorem(5, "words")}}',
        body: '{{lorem(10, "words")}}',
    publishedBy: '{{new Date().toDateString()}}',
        updatedBy: '{{new Date().toDateString()}}',
        publishedOn: '{{new Date().toDateString()}}',
        updatedOn: '{{new Date().toDateString()}}',
        commentsCount: 3,
  }
]
 * 
 * 
 */
export const mockPosts: Post[] = [
    {
        title: "5 Things to Know About the this Parameter in JavaScript",
        slug: "1908058f-997c-44d4-b805-9e48d8281b0c",
        excerpt: "It gives access to other properties, it depends on how the function is invoked and more",
        body: '',
        publishedBy: "John Doe",
        updatedBy: "Sat Jan 15 2022 18:10:35",
        publishedOn: "Sat Jan 15 2022 18:10:35",
        updatedOn: "Sat Jan 15 2022 18:10:35",
        commentsCount: 3
    },
    {
        title: "Managing Secrets in Node.js with HashiCorp Vault",
        slug: "42e3985d-b7c6-4e61-a068-3e32fed9ff07",
        excerpt: "HashiCorp Vault helps organizations manage secrets safely. Learn how to use Vault with your Node.js applications.",
        body: '{"blocks":[{"key":"92i72","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
        publishedBy: "Liam Noah",
        updatedBy: "Sat Jan 15 2022 18:10:35",
        publishedOn: "Sat Jan 15 2022 18:10:35",
        updatedOn: "Sat Jan 15 2022 18:10:35",
        commentsCount: 1
    },
    {
        title: "Why starting a new Android project with Java is a bad idea",
        slug: "794b11a3-c095-4578-99ed-eb77e345d1d5",
        excerpt: "I’m a programming language sceptic. i.e. I don’t jump on every new language and try to learn five new ones every year. When I find a good one I’ll stick with it. I used Java exclusively as my programming language for 20 year. ",
        body: '{"blocks":[{"key":"92i73","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
        publishedBy: "Elijah Charlotte",
        updatedBy: "Sat Jan 15 2022 18:10:35",
        publishedOn: "Sat Jan 15 2022 18:10:35",
        updatedOn: "Sat Jan 15 2022 18:10:35",
        commentsCount: 3
    },
    {
        title: "A Beginner’s Guide to Java: Part 1 of 4",
        slug: "a18351fa-f8de-40de-9ad8-413166f6a1dc",
        excerpt: "These blogs will help you learn Java Programming & Concepts in a simple and effective way.",
        body: '{"blocks":[{"key":"92i74","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
        publishedBy: "Oliver Ava",
        updatedBy: "Sat Jan 15 2022 18:10:35",
        publishedOn: "Sat Jan 15 2022 18:10:35",
        updatedOn: "Sat Jan 15 2022 18:10:35",
        commentsCount: 6
    },
    {
        title: "Kotlin for grumpy Java developers",
        slug: "3f653d7b-79e0-46fd-b10e-3235ea6c396b",
        excerpt: "So you’re an Android developer. You’ve been writing Java code for years and your code is clean, testable and well-architected. Then Google announces official support for Kotlin at Google",
        body: '{"blocks":[{"key":"92i75","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
        publishedBy: "William Mia",
        updatedBy: "Sat Jan 15 2022 18:10:35",
        publishedOn: "Sat Jan 15 2022 18:10:35",
        updatedOn: "Sat Jan 15 2022 18:10:35",
        commentsCount: 2
    }
]

export const mockComments: Comment[] = [
    {
        anchor: 'comment_1',
        body: '{"blocks":[{"key":"92i35","text":"Great content and instructor - unfortunately about 2 years out of date so many parts could not be followed","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
        publishedBy: 'Mark',
        lastUpdated: 'Tue Jan 01 2022 17:41:08',
        childrenCount: 1
    },
    {
        anchor: 'comment_2',
        body: '{"blocks":[{"key":"92i15","text":"Great ","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
        publishedBy: 'Henry',
        lastUpdated: 'Tue Jan 21 2022 09:44:50',
        childrenCount: 0
    }
]

export const mockCommentsReply: Comment[] = [
    {
        anchor: 'comment_1_1',
        body: '{"blocks":[{"key":"92i53","text":"Playing really loud music, colorful objects","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
        publishedBy: 'John',
        lastUpdated: 'Tue Jan 24 2022 17:41:08',
        childrenCount: 1
    },
    {
        anchor: 'comment_1_2',
        body: '{"blocks":[{"key":"92i90","text":"2nd reply","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
        publishedBy: 'Smith',
        lastUpdated: 'Tue Jan 24 2022 19:11:08',
        childrenCount: 1
    }
]