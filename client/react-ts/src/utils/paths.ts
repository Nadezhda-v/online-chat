export const Paths = {
  LOGIN: '/',
  CHAT: '/chat',
} as const;

export type Paths = (typeof Paths)[keyof typeof Paths];
