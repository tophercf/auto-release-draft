export async function getChangesIntroducedByTag(tag: string): Promise<string> {
    // get previous tag
    const previousVersionTag = await getPreviousVersionTag(tag);

    return previousVersionTag ? getCommitMessagesBetween(previousVersionTag, tag)
    : getCommitMessagesFrom(tag)
}

export async function getPreviousVersionTag(tag: string): Promise<string | null> {
    
}