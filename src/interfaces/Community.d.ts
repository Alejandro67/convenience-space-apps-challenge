type Community = {
    id:string,
    members: CommunityMember[];
    comments: CommunityComment[];
}

type CommunityMember = {
    userId: string;
    joinedAt: Date;
}

type CommunityComment = {
    id:string,
    userId: stringId,
    content:string,
    meta: Meta
}