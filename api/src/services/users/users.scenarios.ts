import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        profileImage: 'String',
      },
    },
    two: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        profileImage: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
