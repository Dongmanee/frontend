import { create } from "zustand";

const initData = {
    name:'',
    email:'',
    introduce:'',
    // 친구목록
    friendList:[],
    // 가입 동아리
    clubList:[],
    // 작성한 글
    postList:[],
    // 작성한 댓글
    commentList:[],
    // 일정 정보
    scheduleList:[],
    // socket 필요하면 만들자 -> socket.io
    chatList:[],
}

export const useUserStore = create()(
    (set,get) => ({
        ...initData,
        setName:(s) => set({name:s}),
        setEmail:(s) => set({email:s}),
        setIntroduce:(s) => set({introduce:s}),
        setFriendList:(a) => ({friendList:a}),
        setClubList:(a) => set({clubList:a}),
        setPostList:(a) => set({postList:a}),
        setCommentList:(a) => set({commentList:a}),
        setScheduleList:(a) => set({scheduleList:a}),
        setChatList:(a) => set({chatList:a}),
        getName:() => get().name,
        getEmail:() => get().email,
        getIntroduce:() => get().introduce,
        getFriendList:() => get().friendList,
        getClubList:() => get().clubList,
        getPostList:() => get().postList,
        getCommentList:() => get().commentList,
        getScheduleList:() => get().scheduleList,
        getChatList:() => get().chatList,
    })
)