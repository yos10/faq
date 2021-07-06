import fs from 'fs'
import glob from 'glob'
import { join } from 'path'
import grayMatter from 'gray-matter'

const postsPrefix = 'MARKDOWN/'
const postsPath = join(process.cwd(), postsPrefix)

export const getPostBySlug = (slugArray: string[], fields: string[] = []) => {
  const matchedSlug = slugArray.join('/')
  const actualSlug = matchedSlug.replace(/\.md$/, '')
  const filePath = join(postsPath, `${actualSlug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = grayMatter(fileContent)

  type Items = {
    [key: string]: string | string[]
  }

  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

/**
 * 'MARKDOWN/'以下の全ファイルの配列を返す関数
 * 例えば、'MARKDOWN/aaa.md'と'MARKDOWN/aaa/bbb.md'がある場合、[["aaa"], ["bbb", "ccc"]]を返す
 * @returns 'MARKDOWN/'以下の全ファイルの配列
 */
export const getAllPosts = () => {
  const entries = glob.sync(`${postsPrefix}/**/*.md`)
  return entries
    .map((file) => file.split(postsPrefix).pop())
    .map((slug) => (slug as string).replace(/\.md$/, '').split('/'))
}

/**
 * コースの種類から、そのコースの全ての PostsData を返す関数
 * @param course コースの種類
 * @returns 当該コースの全ての PostsData
 */
export const getPostsData = (course: string) => {
  const allPosts = getAllPosts();
  const postsData = allPosts
    .filter(post => post[0] === course)
    .map(post => {
      const postData = getPostBySlug(post, [
        'date',
        'title',
      ]);
      if (!postData.title) {
        postData.title = `${post[1]} のトラブル`;
      }
      return {
        ...postData,
        path: `/${post[0]}/${post[1]}`
      }
    });
  return postsData;
}
