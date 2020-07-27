import * as github from '@actions/github'
import * as core from '@actions/core'

export function getCreatedTag(): string | null {
  if (github.context.eventName !== 'create') {
    core.info(`The event name was ${github.context.eventName}`)
    return null
  }
  if (github.context.ref !== 'tag') {
    core.info(`The created reference was a branch, not a tag`)
    return null
  }
  core.info(`ref is ${github.context.ref}`)
  return github.context.ref
}
