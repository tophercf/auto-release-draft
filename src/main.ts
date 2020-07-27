import * as core from '@actions/core'
import * as event from './event'
import * as version from './version'
export async function run(): Promise<void> {
  try {
    core.debug('testing the main file run')
    // get tag
    const tag = event.getCreatedTag()
    // check if it is semver
    if (tag && version.isSemVer(tag)) {
      // TO DO
    }

    core.setOutput('release-url', 'https://example.com')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
