import { Post } from '../types';
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
        body: '{"blocks":[{"key":"cibd8","text":"This is a test","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
        publishedBy: "Sat Jan 15 2022",
        updatedBy: "Sat Jan 15 2022",
        publishedOn: "Sat Jan 15 2022",
        updatedOn: "Sat Jan 15 2022",
        commentsCount: 3
    },
    {
        title: "Managing Secrets in Node.js with HashiCorp Vault",
        slug: "42e3985d-b7c6-4e61-a068-3e32fed9ff07",
        excerpt: "HashiCorp Vault helps organizations manage secrets safely. Learn how to use Vault with your Node.js applications.",
        body: "HashiCorp Vault helps organizations manage secrets safely. Learn how to use Vault with your Node.js applications.",
        publishedBy: "Sat Jan 15 2022",
        updatedBy: "Sat Jan 15 2022",
        publishedOn: "Sat Jan 15 2022",
        updatedOn: "Sat Jan 15 2022",
        commentsCount: 1
    },
    {
        title: "Why starting a new Android project with Java is a bad idea",
        slug: "794b11a3-c095-4578-99ed-eb77e345d1d5",
        excerpt: "I’m a programming language sceptic. i.e. I don’t jump on every new language and try to learn five new ones every year. When I find a good one I’ll stick with it. I used Java exclusively as my programming language for 20 year. ",
        body: "I’m a programming language sceptic. i.e. I don’t jump on every new language and try to learn five new ones every year. When I find a good one I’ll stick with it. I used Java exclusively as my programming language for 20 year. ",
        publishedBy: "Sat Jan 15 2022",
        updatedBy: "Sat Jan 15 2022",
        publishedOn: "Sat Jan 15 2022",
        updatedOn: "Sat Jan 15 2022",
        commentsCount: 3
    },
    {
        title: "A Beginner’s Guide to Java: Part 1 of 4",
        slug: "a18351fa-f8de-40de-9ad8-413166f6a1dc",
        excerpt: "These blogs will help you learn Java Programming & Concepts in a simple and effective way.",
        body: "These blogs will help you learn Java Programming & Concepts in a simple and effective way.",
        publishedBy: "Sat Jan 15 2022",
        updatedBy: "Sat Jan 15 2022",
        publishedOn: "Sat Jan 15 2022",
        updatedOn: "Sat Jan 15 2022",
        commentsCount: 6
    },
    {
        title: "Kotlin for grumpy Java developers",
        slug: "3f653d7b-79e0-46fd-b10e-3235ea6c396b",
        excerpt: "So you’re an Android developer. You’ve been writing Java code for years and your code is clean, testable and well-architected. Then Google announces official support for Kotlin at Google",
        body: "So you’re an Android developer. You’ve been writing Java code for years and your code is clean, testable and well-architected. Then Google announces official support for Kotlin at Google",
        publishedBy: "Sat Jan 15 2022",
        updatedBy: "Sat Jan 15 2022",
        publishedOn: "Sat Jan 15 2022",
        updatedOn: "Sat Jan 15 2022",
        commentsCount: 2
    }
]