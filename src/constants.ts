import { LinkType } from './types/global.type'

export const links: LinkType[] = [
  { name: 'Home', to: '/' },
  { name: 'Posts', to: '/posts' },
  { name: 'Users', to: '/users' },
  { name: 'Comments', to: '/comments' },
  { name: 'Apollo', to: '/apollo' },
  { name: 'Image', to: '/image' },
]

export const variants = {
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    display: 'flex',
    transition: {
      delay: i * 0.3,
    },
  }),
  hidden: {
    scale: 0.1,
    opacity: 0,
  },
}
