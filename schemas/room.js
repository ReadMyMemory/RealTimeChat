import mongoose from 'mongoose';

const { Schema } = mongoose;
const roomSchema = new Schema({
    title: {
        type: String,
        required: true, // 방제목은 필수!!
    },
    max: {
        type: Number,
        required: true,
        default: 10,
        min: 2,
    },
    owner: { // 기본적으로 익명채팅방이지만, 구분은 되야 하기 때문에 id 역할을 할 누군가가 필요
        type: String,
        required: true,
    },
    password: String, // 선택요소, 비밀방 o x
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

export default mongoose.model('Room',roomSchema);